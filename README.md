# UI Radar

> Интерактивный гид по выбору инструментов для веб-разработки

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 О проекте

**UI Radar** — это интерактивный инструмент для выбора оптимального технологического стека для веб-разработки. Помогает разработчикам:

- 📊 Сравнивать фреймворки и библиотеки по множеству критериев
- 🎯 Получать персонализированные рекомендации на основе типа проекта
- 📚 Изучать готовые технологические стеки с объяснениями
- 🗺️ Планировать путь обучения

## ✨ Возможности

### 🏠 Главная страница
- Статистика по инструментам
- Категории с быстрым переходом
- Интерактивный выбор стека (тип проекта → команда → опыт)

### 🎯 Инструменты
- 20+ инструментов в 6 категориях
- Фильтрация по категории, рекомендации, сложности для новичков
- Radar Chart визуализация рейтингов
- Сравнение до 3 инструментов

### 📊 Tech Radar
- Классификация по кольцам: ADOPT / TRIAL / ASSESS / HOLD
- Объяснение причин классификации

### 🧱 Готовые стеки
- 5 проверенных стеков для разных задач
- Детальные объяснения WHY (почему эти инструменты вместе)
- Объяснение каждого инструмента в стеке

### 🗺️ Путь обучения
- 6 этапов от HTML/CSS/JS до мета-фреймворков
- Визуализация времени обучения
- Индикаторы сложности

### ⚖️ Сравнение
- Side-by-side сравнение до 3 инструментов
- Визуальные метрики и рейтинг

## 🛠️ Технологии

| Категория | Технология |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | Prisma (SQLite) |

## 🚀 Запуск

```bash
# Установка зависимостей
bun install

# Запуск dev сервера
bun run dev

# Проверка линтера
bun run lint
```

Приложение будет доступно на `http://localhost:3000`

## 📁 Структура проекта

```
src/
├── app/
│   ├── page.tsx          # Главная страница (все компоненты)
│   ├── layout.tsx        # Layout с темой
│   └── globals.css       # Глобальные стили
├── components/
│   ├── ui/               # shadcn/ui компоненты
│   └── DynamicBackground.tsx
├── lib/
│   └── utils.ts          # Утилиты (cn и др.)
└── data/
    └── ui-radar-data.json # Экспортированные данные

prisma/
└── schema.prisma         # Схема базы данных
```

## 📊 Данные

Все данные инструментов экспортированы в `/data/ui-radar-data.json`:

```typescript
interface UITool {
  id: string;
  name: string;
  category: "framework" | "styling" | "icons" | "animation" | "components" | "meta-framework";
  url: string;
  description: string;
  bundleSize: string;
  bundleSizeBytes: number;
  trend: "up" | "stable" | "down";
  difficulty: 1 | 2 | 3 | 4 | 5;
  githubStars: string;
  npmDownloads: string;
  ratings: {
    design: number;
    integration: number;
    learning: number;
    documentation: number;
    community: number;
    performance: number;
  };
  // ... и другие поля
}
```

## 🎨 Категории инструментов

| Категория | Описание | Примеры |
|-----------|----------|---------|
| 🏗️ Фреймворки | JS фреймворки | React, Vue, Angular, Svelte, Solid.js |
| 🚀 Мета-фреймворки | Full-stack фреймворки | Next.js, Nuxt, SvelteKit, Astro |
| 🎨 Стилизация | CSS инструменты | Tailwind CSS |
| 🧩 UI Компоненты | Библиотеки компонентов | Shadcn, Mantine, Radix, MUI, Chakra, DaisyUI |
| ⭐ Иконки | SVG иконки | Lucide, Heroicons |
| ⚡ Анимации | Библиотеки анимаций | Framer Motion, GSAP |

## 📈 Tech Radar

Классификация готовности технологий:

| Кольцо | Цвет | Описание |
|--------|------|----------|
| ADOPT | 🟢 | Готово к продакшену |
| TRIAL | 🔵 | Попробовать в пилотных проектах |
| ASSESS | 🟡 | Изучить для будущих проектов |
| HOLD | 🔴 | Не рекомендовать для новых проектов |

## 🧱 Готовые стеки

| Стек | Сложность | Для кого |
|------|-----------|----------|
| 🚀 React Starter | Easy | Начинающие |
| 🎨 Vue Starter | Easy | Начинающие |
| ⚡ Next.js Production | Medium | SSR проекты |
| 🪶 Svelte Minimal | Easy | Landing pages |
| 📝 Content Site | Easy | Блоги, документация |

## 🤝 Вклад

Приветствуются любые улучшения:

1. Fork репозитория
2. Создайте ветку (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📝 Лицензия

MIT License - используйте свободно

---

**Сделано с ❤️ используя Next.js, Tailwind CSS и Framer Motion**
