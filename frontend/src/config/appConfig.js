const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const APP_BASE_PATH = import.meta.env.BASE_URL;
export const ROUTER_BASENAME =
  APP_BASE_PATH.length > 1 && APP_BASE_PATH.endsWith("/")
    ? APP_BASE_PATH.slice(0, -1)
    : APP_BASE_PATH;

const explicitApiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const environmentApiBaseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_PROD;

const resolvedApiBaseUrl = explicitApiBaseUrl || environmentApiBaseUrl || "";

export const API_BASE_URL = resolvedApiBaseUrl
  ? trimTrailingSlash(resolvedApiBaseUrl)
  : "";

export const DATA_SOURCE_MODE =
  import.meta.env.VITE_DATA_SOURCE_MODE ||
  (import.meta.env.PROD ? "repo" : "auto");

export const DATASET_URL = `${APP_BASE_PATH}data/ecolearn-data.json`;

export const isRepoMode = DATA_SOURCE_MODE === "repo";
export const isApiMode = DATA_SOURCE_MODE === "api";
export const isAutoMode = DATA_SOURCE_MODE === "auto";

export const hasApiBaseUrl = Boolean(API_BASE_URL);
