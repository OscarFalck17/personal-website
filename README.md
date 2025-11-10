# personal-website

This repository contains my personal website built with modern web technologies.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript
- **Styling**: CSS

## Features

- 🚀 Fast development with Vite's HMR (Hot Module Replacement)
- 📦 Scalable architecture ready for backend integration
- 🔌 Clean API service layer for easy backend connection
- 💪 Type-safe with TypeScript
- ⚡ Modern React 19 features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OscarFalck17/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure backend API:
```bash
cp .env.example .env
# Edit .env and set VITE_API_BASE_URL to your backend URL
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
personal-website/
├── src/
│   ├── services/        # API service layer for backend integration
│   │   └── api.ts       # Centralized API client
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.tsx         # Application entry point
├── public/              # Public static files
└── index.html           # HTML template
```

## Backend Integration

The project is structured to easily connect to a backend API:

1. The `src/services/api.ts` file provides a centralized API client
2. Configure your backend URL in `.env` file using `VITE_API_BASE_URL`
3. Import and use the `apiClient` in your components:

```typescript
import { apiClient } from './services/api';

// Example GET request
const data = await apiClient.get('/endpoint');

// Example POST request
const result = await apiClient.post('/endpoint', { key: 'value' });
```

The API client supports all HTTP methods (GET, POST, PUT, DELETE) and handles:
- JSON serialization/deserialization
- Error handling
- TypeScript type safety

## License

This project is private and maintained by Oscar Falck.
