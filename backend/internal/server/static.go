package server

import (
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/kasper-elevator/backend/internal/httpx"
)

// StaticSPA serves the built frontend (Vite's dist/) from dir. Any path that
// doesn't match a real file falls back to index.html so React Router can
// render the route client-side — the same job nginx's
// `try_files ... /index.html` did when the frontend shipped as a separate
// container.
func StaticSPA(dir string) http.Handler {
	index := filepath.Join(dir, "index.html")
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Unknown /api/ paths are real 404s, not the SPA page.
		if strings.HasPrefix(r.URL.Path, "/api/") {
			httpx.Error(w, http.StatusNotFound, "not found")
			return
		}

		// Cleaning "/"+path resolves any ".." segments against the root, so
		// the Join below cannot escape dir.
		rel := strings.TrimPrefix(path.Clean("/"+r.URL.Path), "/")
		file := filepath.Join(dir, filepath.FromSlash(rel))

		if info, err := os.Stat(file); err == nil && !info.IsDir() {
			w.Header().Set("Cache-Control", cacheControlFor(r.URL.Path))
			http.ServeFile(w, r, file)
			return
		}

		// SPA fallback: index.html must not be cached, or clients would keep
		// referencing old hashed asset URLs after a redeploy.
		w.Header().Set("Cache-Control", "no-cache")
		http.ServeFile(w, r, index)
	})
}

// cacheControlFor mirrors the cache policy the nginx config used to apply:
// Vite content-hashes everything under /assets/, so those never change and
// cache forever; other public/ files (photos, favicon) keep their filename
// when replaced, so cache them briefly.
func cacheControlFor(p string) string {
	switch {
	case strings.HasPrefix(p, "/assets/"):
		return "public, max-age=31536000, immutable"
	case strings.HasSuffix(p, ".html"):
		return "no-cache"
	default:
		return "public, max-age=86400"
	}
}
