// Package lead handles "Получить расчёт" requests submitted from the site.
package lead

import (
	"context"
	"errors"
	"strings"
	"time"
)

// Lead is a calculation/contact request from a potential client.
type Lead struct {
	ID         string    `json:"id"`
	Name       string    `json:"name"`
	Phone      string    `json:"phone"`
	ObjectType string    `json:"object_type"`
	Message    string    `json:"message"`
	CreatedAt  time.Time `json:"created_at"`
}

// Input is the payload accepted from the frontend form.
type Input struct {
	Name       string `json:"name"`
	Phone      string `json:"phone"`
	ObjectType string `json:"object_type"`
	Message    string `json:"message"`
}

// Validate trims and checks the required fields.
func (in *Input) Validate() error {
	in.Name = strings.TrimSpace(in.Name)
	in.Phone = strings.TrimSpace(in.Phone)
	in.ObjectType = strings.TrimSpace(in.ObjectType)
	in.Message = strings.TrimSpace(in.Message)

	if in.Name == "" {
		return errors.New("укажите имя")
	}
	if len(in.Name) > 120 {
		return errors.New("имя слишком длинное")
	}
	if in.Phone == "" {
		return errors.New("укажите телефон")
	}
	if len(in.Phone) > 40 {
		return errors.New("некорректный телефон")
	}
	if in.Message == "" {
		return errors.New("укажите комментарий")
	}
	if len(in.Message) > 2000 {
		return errors.New("комментарий слишком длинный")
	}
	return nil
}

// Store persists leads. Implementations must be safe for concurrent use.
// The in-memory implementation is the default; a Postgres-backed one can be
// dropped in later without changing the handler.
type Store interface {
	Create(ctx context.Context, in Input) (Lead, error)
	List(ctx context.Context) ([]Lead, error)
}
