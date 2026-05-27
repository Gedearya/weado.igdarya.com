# ⛅ WeaDo

**Weather to-do app** — a React-based task management app integrated with the OpenWeatherMap API. Provides task priority recommendations based on weather conditions — indoor tasks are prioritized when it's raining, outdoor tasks when it's sunny.

## 🧑‍💻 Author

I Gede Arya Danny Pratama

## 🌐 Live Website (come soon)

- 🔗 <https://weado.igdarya.com>
- 🔗 <https://weado-igdarya.vercel.app/>

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 + shadcn/ui
- Vitest + React Testing Library + fast-check

## Design & Inspiration

- [Open Weather API](https://openweathermap.org/)
- [Microsoft To Do](https://to-do.office.com)

## Figma Design

🔗 <https://www.figma.com/design/stLySXmtNTG6Vo8KwwVHQl/Weather-Todo-APP>

## Flowchart

![Weado Screenshot](/src/screenshot/weado-flowchart.jpg)

## Screenshot

![Weado Screenshot](/src/screenshot/weado-layout.jpg)

## Setup

- Clone repository dan install dependencies:

```bash
npm install
```

- Buat file `.env` dari template:

```bash
cp .env.example .env
```

- Get the API key from [OpenWeatherMap](https://openweathermap.org/api) and put it in `.env`:

```text
OPENWEATHERMAP_API_KEY=your_actual_api_key
```

- Run the development server:

```bash
npm run dev
```

## Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run test`       | Run tests (single run)   |
| `npm run test:watch` | Run tests in watch mode  |
| `npm run lint`       | Run ESLint               |
| `npm run preview`    | Preview production build |

## Features

- Add, edit, delete, and mark tasks as complete
- Real-time weather integration from OpenWeatherMap
- Automatic sorting by weather (indoor/outdoor)
- Recommendation badges on weather-appropriate tasks
- Persistent storage via localStorage
- Responsive design (mobile & desktop)
- Automatic geolocation or manual city input
