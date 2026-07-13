// Package config loads runtime configuration from environment variables.
package config

import (
	"os"
	"strings"
)

type Config struct {
	Env         string   // "development" | "production"
	Host        string   // bind host
	Port        string   // bind port
	CORSOrigins []string // allowed browser origins for CORS
	StaticDir   string   // if set, serve the built frontend (SPA) from this directory
}

// Load reads configuration from the environment, applying sensible defaults
// so the service runs out of the box in local development.
func Load() Config {
	cfg := Config{
		Env:         getenv("APP_ENV", "development"),
		Host:        getenv("HOST", "0.0.0.0"),
		Port:        getenv("PORT", "8080"),
		CORSOrigins: splitCSV(getenv("CORS_ORIGINS", "http://localhost:5173")),
		StaticDir:   getenv("STATIC_DIR", ""),
	}
	return cfg
}

// Addr returns the host:port string for http.Server.
func (c Config) Addr() string {
	return c.Host + ":" + c.Port
}

func (c Config) IsProd() bool {
	return c.Env == "production"
}

func getenv(key, fallback string) string {
	if v, ok := os.LookupEnv(key); ok && v != "" {
		return v
	}
	return fallback
}

func splitCSV(s string) []string {
	parts := strings.Split(s, ",")
	out := make([]string, 0, len(parts))
	for _, p := range parts {
		if p = strings.TrimSpace(p); p != "" {
			out = append(out, p)
		}
	}
	return out
}
