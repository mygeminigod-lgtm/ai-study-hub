# AI Study Hub 🎓✨

> **The modern AI launchpad and decision dashboard for students, researchers, programmers, and creators.**

AI Study Hub solves the question: **"What AI tool should I use for this task?"**
It connects users directly to the best official AI platforms across Academic Research, STEM & Math, Writing, Programming, Visual Design, and Audio/Video creation without relying on unneeded APIs, scrapers, or third-party wrappers.

---

## ⚡ Key Features

- 🎯 **"What Should I Use?" Task Advisor**: Select immediate student tasks (e.g. *Write a literature review*, *Solve math*, *Debug code*, *Build a website*) and get top 3 verified AI recommendations with contextual rationale.
- ⚡ **Instant Global Search**: Blazing-fast multi-field search scanning tool names, categories, descriptions, best-for use cases, and student-focused tags in real-time.
- 🚀 **One-Click Official Launching**: Every tool card opens the official tool destination securely in a new browser tab (`target="_blank" rel="noopener noreferrer"`).
- 💖 **Persistent Favorites**: Save your daily AI tools to your local workstation with persistent `localStorage` support.
- 🌟 **Curated Tool of the Day & Popular Tools**: Spotlight rotating recommendations and core AI essentials (NotebookLM, ChatGPT, Claude, Perplexity, Cursor, Gemini).
- 🎨 **Premium Aesthetic**: Built with dark-first styling, glassmorphism, responsive grid (1 col mobile, 2 col tablet, 3–4 col desktop), and accessible keyboard shortcuts (`/` to search, `Escape` to close modal).

---

## 📂 Project Structure

```
ai-study-hub/
├── index.html                  # HTML entry point with fonts & metadata
├── package.json                # Dependencies and scripts (Vite, React, TS, Tailwind)
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite dev server and build configuration
├── tailwind.config.js          # Tailwind styling with dark theme and glows
├── postcss.config.js           # PostCSS configuration
├── standalone.html             # Zero-dependency browser runner (open directly in browser)
├── src/
│   ├── main.tsx                # React DOM root entry
│   ├── App.tsx                 # Main layout and orchestrator
│   ├── index.css               # Global styles, glassmorphism, custom scrollbar
│   ├── types/
│   │   └── index.ts            # Type definitions (Tool, Category, TaskRecommendation)
│   ├── data/
│   │   ├── tools.ts            # 28 official AI tools with rich metadata
│   │   ├── categories.ts       # Category definitions, badges, and gradients
│   │   └── taskRecommendations.ts # "What should I use" recommendation rules
│   ├── hooks/
│   │   ├── useFavorites.ts     # LocalStorage favorites management
│   │   └── useToolFilter.ts    # Instant search, filter, and sorting engine
│   └── components/
│       ├── Navbar.tsx          # Sticky glass header with search & category links
│       ├── HeroSection.tsx     # Hero headline, search bar, and example query pills
│       ├── QuickActions.tsx    # 1-click intent launch cards
│       ├── TaskAdvisor.tsx     # "What do you need help with?" interactive selector
│       ├── ToolOfTheDay.tsx    # Daily spotlight card
│       ├── FeaturedTools.tsx   # Popular core AI tools showcase
│       ├── CategoryFilters.tsx # Category chips, sort dropdown, and view switcher
│       ├── ToolCard.tsx        # Glassmorphic tool card with launch button & favorites
│       ├── ToolGrid.tsx        # Responsive grid layout (1-4 columns)
│       ├── ToolDetailModal.tsx # Full modal with deep-dive metadata & direct launch
│       ├── EmptyState.tsx      # Polished empty search & favorites states
│       ├── DynamicIcon.tsx     # Lucide icon resolver
│       └── Footer.tsx          # Academic footer with disclaimer & links
```

---

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- `npm` or `pnpm` or `yarn`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

---

## 🚀 Instant Standalone Run (Zero Node.js Required)

A production-ready standalone distribution is included at `standalone.html`.
You can simply **double-click `standalone.html`** or open it with Google Chrome, Microsoft Edge, Brave, or Mozilla Firefox to use the entire application immediately offline or online without running `npm install`!

---

## 🛡️ Security & Privacy Notice
- AI Study Hub does not require account creation, API tokens, or user tracking.
- All external links use `rel="noopener noreferrer"` and `target="_blank"`.
- AI Study Hub is an independent tool directory and is not affiliated with the listed AI services.
