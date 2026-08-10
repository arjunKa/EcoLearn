# EcoLearn Frontend

This frontend is configured for GitHub Pages under:

`https://arjunka.github.io/EcoLearn/`

## Modes

`repo`
Reads committed calculator data from `public/data/ecolearn-data.json`.

`api`
Calls a deployed backend API.

`auto`
Tries the API first, then falls back to the repo dataset.

## Environment

Copy `frontend/.env.example` if you want a clean starting point.

Default local settings in `frontend/.env`:

```env
VITE_BASE_PATH=/EcoLearn/
VITE_DATA_SOURCE_MODE=auto
VITE_API_BASE_URL_LOCAL=http://127.0.0.1:8000
VITE_API_BASE_URL_PROD=
```

## Build

```bash
npm install
npm run build
```

The GitHub Pages workflow builds from the `frontend` directory and publishes `dist/`.
