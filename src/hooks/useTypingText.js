import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useTypingText(text, { speedMs = 42, startDelayMs = 250 } = {}) {
  const reduced = usePrefersReducedMotion();
  const full = useMemo(() => text ?? "", [text]);
  const [value, setValue] = useState(() => (reduced ? full : ""));

  useEffect(() => {
    let start = 0;
    let t = 0;
    let i = 0;

    start = window.setTimeout(() => {
      if (reduced) {
        setValue(full);
        return;
      }

      setValue("");
      t = window.setInterval(() => {
        i += 1;
        setValue(full.slice(0, i));
        if (i >= full.length) window.clearInterval(t);
      }, speedMs);
    }, 0);

    const delayed = window.setTimeout(() => {
      // noop; ensures we respect startDelay without sync setState in effect body
    }, startDelayMs);

    window.clearTimeout(start);
    start = window.setTimeout(() => {
      if (reduced) {
        setValue(full);
        return;
      }

      setValue("");
      t = window.setInterval(() => {
        i += 1;
        setValue(full.slice(0, i));
        if (i >= full.length) window.clearInterval(t);
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(delayed);
      window.clearInterval(t);
    };
  }, [full, reduced, speedMs, startDelayMs]);

  return value;
}

