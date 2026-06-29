# UI Radar

An interactive tool for choosing the optimal technology stack for web development -- compare frameworks, get personalized recommendations, explore ready-made stacks, and plan a learning path.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- 20+ tools across 6 categories with filtering by category, recommendation status, and beginner difficulty
- Radar Chart visualization for tool ratings across 6 dimensions (design, integration, learning, documentation, community, performance)
- Side-by-side comparison of up to 3 tools with visual metrics
- Tech Radar classification: ADOPT / TRIAL / ASSESS / HOLD with reasoning
- 5 ready-made stacks for different scenarios (React Starter, Vue Starter, Next.js Production, Svelte Minimal, Content Site)
- 6-stage learning path from HTML/CSS/JS to meta-frameworks with time visualization
- Interactive stack selection flow: project type, team size, experience level
- Tool data exported as typed JSON with bundle size, trend, difficulty, and GitHub/npm stats

## Tech Stack

- **Framework** - Next.js 16 (App Router)
- **Language** - TypeScript 5
- **Styling** - Tailwind CSS 4
- **UI Components** - Radix UI
- **Animations** - Framer Motion
- **Icons** - Lucide React
- **Database** - Prisma (SQLite)

## Getting Started

### Prerequisites

- Node.js 20+ or Bun

### Installation

```bash
git clone https://github.com/stsgs1980/UI-RADAR.git
cd UI-RADAR
bun install
```

### Run

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/app/page.tsx` - Main page with all components
- `src/app/layout.tsx` - Root layout with theme
- `src/app/globals.css` - Global styles
- `src/components/ui/` - shadcn/ui components
- `src/components/DynamicBackground.tsx` - Animated background
- `src/lib/utils.ts` - Utilities (cn helper, etc.)
- `src/data/ui-radar-data.json` - Exported tool data
- `prisma/schema.prisma` - Database schema

## API Reference

Tool data type definition:

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
}
```

## Tool Categories

| Category | Description | Examples |
|----------|-------------|----------|
| Frameworks | JS frameworks | React, Vue, Angular, Svelte, Solid.js |
| Meta-frameworks | Full-stack frameworks | Next.js, Nuxt, SvelteKit, Astro |
| Styling | CSS tools | Tailwind CSS |
| UI Components | Component libraries | Shadcn, Mantine, Radix, MUI, Chakra, DaisyUI |
| Icons | SVG icon sets | Lucide, Heroicons |
| Animations | Animation libraries | Framer Motion, GSAP |

## Tech Radar

| Ring | Description |
|------|-------------|
| ADOPT | Ready for production |
| TRIAL | Try in pilot projects |
| ASSESS | Study for future projects |
| HOLD | Not recommended for new projects |

## Ready-made Stacks

| Stack | Difficulty | Target audience |
|-------|-----------|-----------------|
| React Starter | Easy | Beginners |
| Vue Starter | Easy | Beginners |
| Next.js Production | Medium | SSR projects |
| Svelte Minimal | Easy | Landing pages |
| Content Site | Easy | Blogs, documentation |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)

---
Built with: Next.js + React + TypeScript + Tailwind CSS + Framer Motion