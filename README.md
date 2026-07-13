# Eurasia Lift KZ · Казахстан

Корпоративный сайт официального представителя KASPER в Казахстане
(г. Астана): поставка, монтаж и сервис лифтов под ключ.

Многостраничное приложение:

- **Frontend** — React 18 + Vite + React Router (кросс-платформенно: работает в любом
  современном браузере на desktop/mobile, адаптивная вёрстка).
- **Backend** — Go 1.22 (стандартная библиотека, без внешних зависимостей), REST API.
- **Контейнеризация** — один Docker-образ: Go-сервер отдаёт и API, и собранный
  фронтенд. Тот же образ запускается локально (Docker Compose) и на Render.

```
.
├── frontend/        React SPA (multi-page via React Router)
│   └── public/
│       ├── favicon.png, logo-mark.png   логотип KASPER (PNG, прозрачный фон)
│       └── photos/                      фото объектов/команды
├── backend/         Go REST API (health + leads/заявки) + раздача статики
├── legacy/          исходный bundled-сайт (для справки)
├── Dockerfile       сборка всего сайта в один образ (frontend build → go build)
├── docker-compose.yml
├── render.yaml      конфигурация деплоя на Render (Blueprint)
├── DEPLOY.md        пошаговая инструкция деплоя на Render
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

Навигация между страницами — клиентская (React Router), без перезагрузки.
Сервер отдаёт `index.html` для любого неизвестного пути (SPA-fallback,
`backend/internal/server/static.go`), поэтому прямые ссылки и обновление
страницы работают.

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

## Деплой

**Render (рекомендуется, есть бесплатный тариф)** — весь сайт деплоится как
один веб-сервис из корневого `Dockerfile`; конфигурация уже описана в
`render.yaml`. Пошаговая инструкция — какие кнопки нажимать, как читать логи,
типовые ошибки — в **[DEPLOY.md](DEPLOY.md)**.

**Свой VPS (альтернатива):**

1. Установить Docker и Docker Compose.
2. Склонировать репозиторий, `cp .env.example .env`, при желании `WEB_PORT=80`.
3. `docker compose up -d --build`.
4. Привязать домен: A-запись DNS → IP сервера.
5. **HTTPS:** поставить перед контейнером reverse-proxy с авто-сертификатами
   (Caddy / Traefik / nginx + certbot): проксировать `:443 → localhost:8080`.
   На Render HTTPS включён автоматически, ничего делать не нужно.

## Масштабируемость (ориентир ~500 пользователей)

- Backend **stateless** (кроме in-memory заявок) — при росте нагрузки
  масштабируется репликами за балансировщиком.
- Хэшированные ассеты (`/assets/`) отдаются с годовым кэшем
  (`Cache-Control: immutable`); gzip/brotli-сжатие на Render делает их edge-прокси.
- Хранилище заявок сейчас **in-memory** (`backend/internal/lead/store_memory.go`).
  Перед масштабированием на несколько реплик заменить на общую БД (PostgreSQL):
  реализовать интерфейс `lead.Store` — handler менять не нужно.
- Таймауты и graceful shutdown уже настроены в `cmd/server/main.go`.

## Что доделать перед продакшеном

- [ ] Persistent storage (PostgreSQL) вместо in-memory. **Особенно важно на
      бесплатном тарифе Render**: сервис засыпает после 15 минут без трафика
      и при каждом деплое перезапускается — заявки в памяти при этом пропадают.
      Практичный первый шаг — уведомления (Telegram/email) при каждой заявке,
      тогда потеря памяти не страшна.
- [ ] Авторизация для `GET /api/leads`.
- [ ] Уведомления о заявках (email / Telegram / CRM).
- [ ] HTTPS / TLS перед стеком.
- [ ] Rate limiting на `POST /api/leads`.
- [ ] Заменить SVG-логотип на официальный файл при наличии.
#   E l e v a t o r  
 #   E l e v a t o r  
 #   E l e v a t o r  
 #   E l e v a t o r  
 