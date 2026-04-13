import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(mq.matches);
    const h = (e) => setR(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return r;
}

export function useTypingText(text, { speedMs = 38, startDelayMs = 320 } = {}) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    setTyped("");
    let i = 0;
    const t = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setTyped(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speedMs);
      return () => clearInterval(id);
    }, startDelayMs);
    return () => clearTimeout(t);
  }, [text, speedMs, startDelayMs]);
  return typed;
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}
