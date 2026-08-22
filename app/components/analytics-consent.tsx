"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "declined" | null;
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const consentStorageKey = "hnfix-analytics-consent-v1";
export const openCookieSettingsEvent = "hnfix:open-cookie-settings";

function enableAnalyticsConsent(gaId: string) {
  const analyticsWindow = window as AnalyticsWindow;
  (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = false;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.gtag =
    analyticsWindow.gtag ??
    ((...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    });

  analyticsWindow.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  analyticsWindow.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function disableAnalyticsConsent(gaId: string) {
  const analyticsWindow = window as AnalyticsWindow;
  (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = true;
  analyticsWindow.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (name !== "_ga" && !name.startsWith("_ga_"))) return;

    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
    document.cookie = `${name}=; Path=/; Domain=.hnfix.de; Max-Age=0; SameSite=Lax`;
    document.cookie = `${name}=; Path=/; Domain=www.hnfix.de; Max-Age=0; SameSite=Lax`;
  });
}

export function AnalyticsConsent({ gaId }: { gaId: string }) {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(consentStorageKey);
    if (storedChoice === "accepted") {
      enableAnalyticsConsent(gaId);
      setChoice("accepted");
    } else if (storedChoice === "declined") {
      disableAnalyticsConsent(gaId);
      setChoice("declined");
    }
    setReady(true);

    const openSettings = () => setChoice(null);
    window.addEventListener(openCookieSettingsEvent, openSettings);
    return () => window.removeEventListener(openCookieSettingsEvent, openSettings);
  }, [gaId]);

  function acceptAnalytics() {
    enableAnalyticsConsent(gaId);
    window.localStorage.setItem(consentStorageKey, "accepted");
    setChoice("accepted");
  }

  function declineAnalytics() {
    disableAnalyticsConsent(gaId);
    window.localStorage.setItem(consentStorageKey, "declined");
    setChoice("declined");
  }

  return (
    <>
      {ready && choice === null && (
        <section
          className="cookieConsent"
          aria-label="Cookie-Einstellungen"
          aria-live="polite"
        >
          <div className="cookieConsentContent">
            <div>
              <h2>Datenschutz-Einstellungen</h2>
              <p>
                Wir verwenden notwendige Speichertechniken für Ihre Auswahl.
                Google Analytics wird nur mit Ihrer Einwilligung geladen. Weitere
                Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz">Datenschutzerklärung</Link>.
              </p>
            </div>
            <div className="cookieConsentActions">
              <button type="button" className="cookieDecline" onClick={declineAnalytics}>
                Nur notwendige
              </button>
              <button type="button" className="cookieAccept" onClick={acceptAnalytics}>
                Analytics erlauben
              </button>
            </div>
          </div>
        </section>
      )}
      {ready && choice === "accepted" && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
