// Command server is the entrypoint for the Kasper Elevator backend API.
package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/kasper-elevator/backend/internal/config"
	"github.com/kasper-elevator/backend/internal/lead"
	"github.com/kasper-elevator/backend/internal/server"
)

func main() {
	cfg := config.Load()

	logger := log.New(os.Stdout, "", log.LstdFlags|log.LUTC)

	// Wire dependencies. The lead store is currently in-memory; swap it for a
	// Postgres-backed implementation later without touching the handlers.
	leadStore := lead.NewMemoryStore()
	leadHandler := lead.NewHandler(leadStore, logger)

	router := server.NewRouter(cfg, leadHandler)

	srv := &http.Server{
		Addr:              cfg.Addr(),
		Handler:           router,
		ReadHeaderTimeout: 10 * time.Second,
		ReadTimeout:       15 * time.Second,
		WriteTimeout:      20 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	// Run the server and shut it down gracefully on SIGINT/SIGTERM.
	go func() {
		logger.Printf("listening on %s (env=%s)", cfg.Addr(), cfg.Env)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logger.Fatalf("server error: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop

	logger.Println("shutting down...")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		logger.Fatalf("graceful shutdown failed: %v", err)
	}
	logger.Println("stopped")
}
