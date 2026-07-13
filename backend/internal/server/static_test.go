package server

import (
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func mustWrite(t *testing.T, path, content string) {
	t.Helper()
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
		t.Fatal(err)
	}
}

// newStaticDir builds a minimal Vite-like dist/ directory.
func newStaticDir(t *testing.T) string {
	t.Helper()
	dir := t.TempDir()
	mustWrite(t, filepath.Join(dir, "index.html"), "<html>app-shell</html>")
	mustWrite(t, filepath.Join(dir, "assets", "app.abc123.js"), "console.log('app')")
	return dir
}

func get(t *testing.T, h http.Handler, path string) *httptest.ResponseRecorder {
	t.Helper()
	req := httptest.NewRequest(http.MethodGet, path, nil)
	rec := httptest.NewRecorder()
	h.ServeHTTP(rec, req)
	return rec
}

func TestStaticSPA_ServesExistingFileWithLongCache(t *testing.T) {
	h := StaticSPA(newStaticDir(t))
	rec := get(t, h, "/assets/app.abc123.js")

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}
	if !strings.Contains(rec.Body.String(), "console.log") {
		t.Fatalf("expected asset body, got %q", rec.Body.String())
	}
	if cc := rec.Header().Get("Cache-Control"); !strings.Contains(cc, "immutable") {
		t.Fatalf("expected immutable Cache-Control for hashed asset, got %q", cc)
	}
}

func TestStaticSPA_FallsBackToIndexForClientRoutes(t *testing.T) {
	h := StaticSPA(newStaticDir(t))
	for _, path := range []string{"/", "/obyekty", "/kontakty"} {
		rec := get(t, h, path)
		if rec.Code != http.StatusOK {
			t.Fatalf("%s: expected 200, got %d", path, rec.Code)
		}
		if !strings.Contains(rec.Body.String(), "app-shell") {
			t.Fatalf("%s: expected index.html fallback, got %q", path, rec.Body.String())
		}
		if cc := rec.Header().Get("Cache-Control"); cc != "no-cache" {
			t.Fatalf("%s: expected no-cache for SPA fallback, got %q", path, cc)
		}
	}
}

func TestStaticSPA_UnknownAPIPathIsJSON404(t *testing.T) {
	h := StaticSPA(newStaticDir(t))
	rec := get(t, h, "/api/nope")

	if rec.Code != http.StatusNotFound {
		t.Fatalf("expected 404, got %d", rec.Code)
	}
	if ct := rec.Header().Get("Content-Type"); !strings.Contains(ct, "application/json") {
		t.Fatalf("expected JSON error, got Content-Type %q", ct)
	}
}

func TestStaticSPA_PathTraversalStaysInsideDir(t *testing.T) {
	parent := t.TempDir()
	dir := filepath.Join(parent, "public")
	mustWrite(t, filepath.Join(dir, "index.html"), "<html>app-shell</html>")
	mustWrite(t, filepath.Join(parent, "secret.txt"), "top-secret")

	h := StaticSPA(dir)
	for _, path := range []string{"/../secret.txt", "/assets/../../secret.txt"} {
		rec := get(t, h, path)
		if strings.Contains(rec.Body.String(), "top-secret") {
			t.Fatalf("%s: served a file outside the static dir", path)
		}
	}
}
