"use client";

import { openCookieSettingsEvent } from "./analytics-consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footerLinkButton"
      onClick={() => window.dispatchEvent(new Event(openCookieSettingsEvent))}
    >
      Cookie-Einstellungen
    </button>
  );
}
