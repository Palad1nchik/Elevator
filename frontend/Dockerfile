# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first for better layer caching.
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
# VITE_API_BASE can be overridden at build time; defaults to /api (same-origin via nginx).
ARG VITE_API_BASE=/api
ENV VITE_API_BASE=$VITE_API_BASE
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
# Placed in /etc/nginx/templates/ so the base image's docker-entrypoint runs
# envsubst on it at container startup, substituting ${BACKEND_PORT} below.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
# Matches the Go backend's own PORT default (backend/internal/config/config.go);
# override via the BACKEND_PORT environment variable if PORT is changed.
ENV BACKEND_PORT=8080
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
