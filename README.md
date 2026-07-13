# KASPER Lift Solutions · Казахстан

Корпоративный сайт официального представителя KASPER в Казахстане
(г. Астана): поставка, монтаж и сервис лифтов под ключ.

Многостраничное приложение:

- **Frontend** — React 18 + Vite + React Router (кросс-платформенно: работает в любом
  современном браузере на desktop/mobile, адаптивная вёрстка).
- **Backend** — Go 1.22 (стандартная библиотека, без внешних зависимостей), REST API.
- **Контейнеризация** — Docker + Docker Compose, nginx как статика + reverse-proxy.

```
.
├── frontend/        React SPA (multi-page via React Router)
│   └── public/
│       ├── favicon.png, logo-mark.png   логотип KASPER (PNG, прозрачный фон)
│       └── photos/                      фото объектов/команды
├── backend/         Go REST API (health + leads/заявки)
├── legacy/          исходный bundled-сайт (для справки)
├── docker-compose.yml
└── .env.example
```

## Страницы

| Путь          | Страница                  |
| ------------- | ------------------------- |
| `/`           | Главная                   |
| `/dlya-kogo`  | Для кого / Как работаем   |
| `/obyekty`    | Объекты / Производство    |
| `/servis`     | Сервис / Преимущества     |
| `/kontakty`   | Контакты + форма заявки   |

Навигация между страницами — клиентская (React Router), без перезагрузки. nginx
настроен на SPA-fallback, поэтому прямые ссылки и обновление страницы работают.

## Логотип и фавикон

Официальный логотип клиента (`frontend/public/logo-mark.png` — для шапки/футера,
`frontend/public/favicon.png` — для вкладки браузера, наложен на скруглённый
тёмно-синий фон бренда). Чтобы заменить, положите свой `logo-mark.png` /
`favicon.png` в `frontend/public/` (или другой формат и поправьте пути в
`Navbar.jsx`/`Footer.jsx`/`index.html`).

## Фотографии

Подобранные фото лежат в `frontend/public/photos/` (уже сжаты и повёрнуты по EXIF).
Используются на главной (hero), странице объектов, в блоках производства, сервиса
и контактов. Заменить/добавить — положить файл в эту папку и сослаться в коде
(`frontend/src/data/content.js` для карточек объектов).

## Быстрый старт (Docker — рекомендуется)

```bash
cp .env.example .env
docker compose up --build
```

Сайт: <http://localhost:8080> · API: <http://localhost:8080/api/health>

## Локальная разработка (без Docker)

**Backend:**

```bash
cd backend
go run ./cmd/server        # http://localhost:8080
go test ./...
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev                # http://localhost:5173 (proxy /api -> :8080)
```

## API

| Метод | Путь          | Назначение                          |
| ----- | ------------- | ----------------------------------- |
| GET   | `/api/health` | healthcheck                         |
| POST  | `/api/leads`  | приём заявки «Получить расчёт»       |
| GET   | `/api/leads`  | список заявок (защитить авторизацией перед публикацией) |

Пример заявки:

```bash
curl -X POST http://localhost:8080/api/leads \
  -H 'Content-Type: application/json' \
  -d '{"name":"Иван","phone":"+7 702 230 22 38","object_type":"ЖК","message":"4 лифта"}'
```

## Контакты компании (в подвале сайта)

- Адрес: г. Астана, ул. Аманжол Болекпаева, дом-12, ЖК «Юпитер», офис-9
- Телефон: +7 702 230-22-38
- Сайт: eurasialift.kz
- Email: V_Spichkin@mail.ru
- Заместитель директора: Спичкин Владимир Владимирович

Эти данные заданы в одном месте — `frontend/src/data/content.js` (объект `COMPANY`).

## Деплой на хостинг + домен

1. На сервере (VPS) установить Docker и Docker Compose.
2. Склонировать репозиторий, заполнить `.env`:
   - `WEB_PORT=80` (или оставить 8080 за внешним прокси),
   - `CORS_ORIGINS=https://eurasialift.kz`.
3. `docker compose up -d --build`.
4. Привязать домен: A-запись DNS → IP сервера.
5. **HTTPS:** поставить перед стеком reverse-proxy с авто-сертификатами
   (Caddy / Traefik / nginx + certbot). Compose отдаёт сайт на одном порту,
   поэтому достаточно проксировать `:443 → frontend:80`.

## Масштабируемость (ориентир ~500 пользователей)

- Backend **stateless** — масштабируется репликами:
  `docker compose up -d --scale backend=3` (добавить балансировщик перед ними).
- nginx отдаёт статику с gzip и долгим кэшем для хэшированных ассетов.
- Хранилище заявок сейчас **in-memory** (`backend/internal/lead/store_memory.go`).
  Перед масштабированием на несколько реплик заменить на общую БД (PostgreSQL):
  реализовать интерфейс `lead.Store` — handler менять не нужно.
- Таймауты и graceful shutdown уже настроены в `cmd/server/main.go`.

## Что доделать перед продакшеном

- [ ] Persistent storage (PostgreSQL) вместо in-memory.
- [ ] Авторизация для `GET /api/leads`.
- [ ] Уведомления о заявках (email / Telegram / CRM).
- [ ] HTTPS / TLS перед стеком.
- [ ] Rate limiting на `POST /api/leads`.
- [ ] Заменить SVG-логотип на официальный файл при наличии.
