const DEFAULT_API_BASE_URL = 'https://api.needhomes.ng/api';

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

/**
 * Backend API base URL (includes `/api`).
 * Defaults to production so the marketing site never fetches its own Next origin
 * (which caused `/api/properties` 404 + webpack crashes when landing ran on :3000).
 */
export function getApiBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (configured) {
    return normalizeBaseUrl(configured);
  }

  return DEFAULT_API_BASE_URL;
}
