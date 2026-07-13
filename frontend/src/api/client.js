// Tiny API client. In dev, requests to /api are proxied to the Go backend by Vite.
// In production the Go server serves both the site and /api from one origin.
// Override the base URL at build time with VITE_API_BASE if the API lives elsewhere.
const API_BASE = import.meta.env.VITE_API_BASE || '/api'

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  })

  let data = null
  try {
    data = await res.json()
  } catch {
    // non-JSON response (e.g. 204) — leave data null
  }

  if (!res.ok) {
    const message = (data && data.error) || `Ошибка запроса (${res.status})`
    throw new Error(message)
  }
  return data
}

// Submit a "Получить расчёт" lead.
export function submitLead(payload) {
  return request('/leads', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function getHealth() {
  return request('/health')
}
