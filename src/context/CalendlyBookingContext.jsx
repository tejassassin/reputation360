import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import CalendlyBookingModal from "../components/CalendlyBookingModal.jsx";
import { isCalendlyExternalUrl } from "../constants/scheduling.js";

const CalendlyBookingContext = createContext(null);

export function CalendlyBookingProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!isCalendlyExternalUrl(href)) return;
      event.preventDefault();
      event.stopPropagation();
      openBooking();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [openBooking]);

  const value = useMemo(
    () => ({ openBooking, closeBooking, isOpen: open }),
    [openBooking, closeBooking, open],
  );

  return (
    <CalendlyBookingContext.Provider value={value}>
      {children}
      <CalendlyBookingModal open={open} onClose={closeBooking} />
    </CalendlyBookingContext.Provider>
  );
}

export function useCalendlyBooking() {
  const ctx = useContext(CalendlyBookingContext);
  if (!ctx) {
    throw new Error("useCalendlyBooking must be used within CalendlyBookingProvider");
  }
  return ctx;
}
