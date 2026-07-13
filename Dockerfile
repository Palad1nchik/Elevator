# Kasper Elevator — the whole site in ONE image: the Go server serves both
# the REST API and the built React frontend (see backend/internal/server/static.go).
# This is the image both docker-compose.yml and Render (render.yaml) run.

# ---- Frontend build stage ----
FROM node:20-alpine AS frontend
WORKDIR /app
# Install deps first for better layer caching.
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install
COPY frontend/ ./
# Same origin for site and API, so the default VITE_API_BASE=/api
# (frontend/src/api/client.js) needs no override here.
RUN npm run build

# ---- Backend build stage ----
FROM golang:1.22-alpine AS backend
WORKDIR /src
COPY backend/go.mod ./
COPY backend/go.sum* ./
RUN go mod download
COPY backend/ ./
# Static build so the binary runs in a minimal runtime image.
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /out/server ./cmd/server

# ---- Runtime stage ----
FROM alpine:3.20
RUN adduser -D -u 10001 appuser
WORKDIR /app
COPY --from=backend /out/server /app/server
COPY --from=frontend /app/dist /app/public
USER appuser
# PORT is read at startup (internal/config); hosting platforms like Render
# inject their own PORT and the server just follows it. STATIC_DIR switches
# the server from API-only mode to also serving the frontend.
ENV PORT=8080 APP_ENV=production STATIC_DIR=/app/public
EXPOSE 8080
ENTRYPOINT ["/app/server"]
