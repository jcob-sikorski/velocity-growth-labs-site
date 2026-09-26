"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const NAMESPACE = "strategy-call";
const CAL_LINK = "jaxescales/strategy-call";

/**
 * Inline Cal.com booking widget.
 * - No fixed height: Cal auto-resizes its iframe to fit the calendar.
 * - Event details are hidden (the page already explains the call), which
 *   keeps the calendar compact and stops it collapsing into Cal's tall,
 *   stacked mobile layout when the column is narrow.
 */
export function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#cdbb92" },
          light: { "cal-brand": "#05060a" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
