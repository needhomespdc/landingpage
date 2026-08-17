const STORAGE_KEY = 'needhomes-cookie-consent';

export type CookieConsent = 'accepted' | 'essential';

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === 'accepted' || value === 'essential') {
    return value;
  }

  return null;
}

export function writeCookieConsent(value: CookieConsent): void {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event('needhomes-cookie-consent'));
}

export function hasAcceptedCookies(): boolean {
  return readCookieConsent() === 'accepted';
}
