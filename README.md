# Outdoor Food

Превью-сайт компании, которая продаёт ланч-боксы для outdoor-туров (B2B для туроператоров).

## Что нужно для старта

1. **Node.js 22+** — [nodejs.org](https://nodejs.org/)
2. **Git** — для публикации на GitHub Pages
3. **Редактор** — VS Code / Cursor

## Быстрый старт

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:4321`.

## Структура проекта

```text
src/
├── data/
│   ├── products.json   # каталог (Classic / Energy / Fresh)
│   └── site.json       # тексты лендинга и контакты
├── components/
│   ├── layout/         # Header, Footer
│   └── sections/       # Hero, Benefits, Products...
├── lib/                # helpers для данных
├── pages/
│   └── index.astro     # главная страница
└── styles/
    └── global.css      # Tailwind + тема
```

## Что редактировать в первую очередь

1. **`src/data/site.json`** — название, тексты, контакты
2. **`src/data/products.json`** — состав и цены боксов
3. **`src/components/sections/`** — блоки лендинга
4. **`public/`** — фото продуктов и favicon

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub и запушьте проект
2. В Settings → Pages выберите **GitHub Actions**
3. При push в `main` workflow `.github/workflows/deploy.yml` соберёт и опубликует сайт

URL будет таким:

`https://<username>.github.io/<repo-name>/`

Для локальной разработки используется `BASE_PATH=/`.  
В CI `BASE_PATH` подставляется автоматически из имени репозитория.

## Расширение до магазина

- Продукты уже описаны в `products.json` с полями `id`, `slug`, `partnerPrice`, `cta`
- Флаг `PUBLIC_COMMERCE_ENABLED=true` можно включить позже
- Корзину и checkout можно добавить через React islands без смены фреймворка

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Локальный dev-сервер |
| `npm run build` | Сборка в `dist/` |
| `npm run preview` | Просмотр production-сборки |

## Источник контента

Тексты взяты из `презентация-ланч-боксы-для-партнеров.md`.
