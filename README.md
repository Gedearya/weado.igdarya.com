# ⛅ WeaDo

**Weather to-do app** — aplikasi manajemen tugas berbasis React yang terintegrasi dengan OpenWeatherMap API. Memberikan rekomendasi prioritas tugas berdasarkan kondisi cuaca — tugas indoor diprioritaskan saat hujan, tugas outdoor saat cerah.

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

- Dapatkan API key dari [OpenWeatherMap](https://openweathermap.org/api) dan masukkan ke `.env`:

```text
OPENWEATHERMAP_API_KEY=your_actual_api_key
```

- Jalankan development server:

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

## Fitur

- Tambah, edit, hapus, dan tandai tugas selesai
- Integrasi cuaca real-time dari OpenWeatherMap
- Sorting otomatis berdasarkan cuaca (indoor/outdoor)
- Badge rekomendasi pada tugas yang sesuai cuaca
- Penyimpanan persisten via localStorage
- Responsive design (mobile & desktop)
- Geolocation otomatis atau input kota manual
