// Package server wires routes and middleware into an http.Handler.
package server

import (
	"net/http"

	"github.com/kasper-elevator/backend/internal/config"
	"github.com/kasper-elevator/backend/internal/httpx"
	"github.com/kasper-elevator/backend/internal/lead"
	"log"
	"os"
)

// NewRouter builds the application router. Uses Go 1.22 method+pattern routing,
// so no third-party router dependency is required.
func NewRouter(cfg config.Config, leads *lead.Handler) http.Handler {
	logger := log.New(os.Stdout, "", log.LstdFlags|log.LUTC)
	mux := http.NewServeMux()

	// Health/readiness probe for Docker, load balancers and uptime checks.
	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		httpx.JSON(w, http.StatusOK, map[string]string{"status": "ok"})
	})

	// Lead endpoints.
	mux.HandleFunc("POST /api/leads", leads.Create)
	mux.HandleFunc("GET /api/leads", leads.List)

	// In production the same binary serves the built React app (the Docker
	// image sets STATIC_DIR). Unset means API-only — local dev, where Vite
	// serves the frontend itself and proxies /api here.
	if cfg.StaticDir != "" {
		mux.Handle("/", StaticSPA(cfg.StaticDir))
	}

	// Apply middleware (outermost first): recover -> logging -> CORS.
	return httpx.Chain(
		mux,
		httpx.Recover(logger),
		httpx.Logging(logger),
		httpx.CORS(cfg.CORSOrigins),
	)
}
