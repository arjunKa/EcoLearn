# EcoLearn

 [Try it Out](https://arjunka.github.io/EcoLearn/)

EcoLearn is a React + Vite frontend with an optional Django backend.

Can run in two modes:

1. `repo` mode
   The calculators read committed JSON data from `frontend/public/data/ecolearn-data.json` and do not need to deploy the backend.
2. `api` mode
   The frontend calls a deployed backend API.
3. `auto` mode
   The frontend tries the API first and falls back to the repo dataset if the API is unavailable.

## Frontend deploy

Push to `master` and the GitHub Actions workflow in `.github/workflows/deploy-pages.yml` will build and publish the frontend to GitHub Pages.

In the repository settings, make sure Pages is set to use `GitHub Actions` as the source.

## Data source toggle

Frontend config lives in `frontend/.env`.

`VITE_DATA_SOURCE_MODE=repo`
Uses only the committed dataset.

`VITE_DATA_SOURCE_MODE=api`
Uses only the backend API.

`VITE_DATA_SOURCE_MODE=auto`
Uses the backend API when available, then falls back to the repo dataset.

`VITE_API_BASE_URL_LOCAL`
Local backend URL for development.

`VITE_API_BASE_URL_PROD`
Optional deployed backend URL for production API mode.

## Local development

Frontend:

```bash
cd frontend
npm install
npm run build
```

Backend is optional. If you do deploy it separately, CORS now includes `https://arjunka.github.io` so the GitHub Pages frontend can call it.
