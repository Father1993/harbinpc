# HarbinPC

Интернет-магазин компьютерных комплектующих с доставкой из Китая. Офисы в Харбине и Суньфэньхэ, логистический склад в Уссурийске.

## Ветки разработки

- `main` - продакшн версия
- `dev` - основная ветка разработки
- `feature/*` - ветки для новых функций
- `bugfix/*` - ветки для исправления ошибок
- `hotfix/*` - срочные исправления в продакшене

## Технологии

- Next.js 15+
- TypeScript
- Tailwind CSS
- Framer Motion
- Next-themes
- Radix UI
- Vercel Analytics
- Zod
- React Hook Form
- Zustand

## Особенности

- Современный адаптивный дизайн
- Темная/светлая тема
- SEO оптимизация
- Анимации и переходы
- Конфигуратор ПК
- Система заказов
- Административная панель
- Оптимизированная производительность
- Аналитика и метрики

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/harbinpc.git
   ```

2. Установите зависимости:

   ```bash
   cd harbinpc
   npm install
   ```

3. Создайте файл .env и заполните необходимые переменные окружения:

   ```env
   # Аналитика
   NEXT_PUBLIC_ANALYTICS_ID=""

   # API ключи
   NEXT_PUBLIC_API_URL=""
   ```

4. Запустите проект:
   ```bash
   npm run dev
   ```

## Структура проекта

```
harbinpc/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── providers/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   └── styles/
├── public/
│   ├── images/
│   └── icons/
└── config/
```

## Разработка

- Линтинг:

  ```bash
  npm run lint
  ```

- Форматирование кода:
  ```bash
  npm run format
  ```

## Деплой

1. Создайте аккаунт на Vercel
2. Подключите репозиторий
3. Настройте переменные окружения
4. Выполните деплой:
   ```bash
   npm run build
   vercel deploy
   ```

## Лицензия

MIT
