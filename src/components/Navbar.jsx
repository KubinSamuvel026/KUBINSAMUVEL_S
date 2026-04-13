import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { attachRippleVars } from "../lib/dom.js";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/academics", label: "Academics" },
  { to: "/contact", label: "Contact" },
];

export function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const h = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className={[
        "mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-6 mt-3",
        scrolled ? "glass rounded-2xl" : "",
      ].join(" ")}>
        <Link to="/" className="focus-ring group inline-flex items-center gap-2 rounded-xl px-2 py-1">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
            <span className="font-[Poppins] text-sm font-extrabold tracking-tight text-[rgb(var(--text))]">KS</span>
          </span>
          <span className="hidden sm:block">
            <span className="block font-[Poppins] text-sm font-semibold leading-tight">Kubinsamuvel</span>
            <span className="block text-xs text-[rgb(var(--muted))]">Python Full Stack Developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((it) => {
            const active = pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                onMouseMove={attachRippleVars}
                className={[
                  "focus-ring ripple rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--text))]"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-black/5 dark:hover:bg-white/5",
                ].join(" ")}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            onMouseMove={attachRippleVars}
            className="focus-ring ripple inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-white/60 px-3 py-2 text-sm transition hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring ripple inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-white/60 px-3 py-2 text-sm transition hover:bg-white/80 lg:hidden dark:bg-white/5 dark:hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-auto mt-2 w-full max-w-7xl px-5 sm:px-6">
            <div className="glass rounded-2xl p-2">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {NAV_ITEMS.map((it) => {
                  const active = pathname === it.to;
                  return (
                    <Link
                      key={it.to}
                      to={it.to}
                      className={[
                        "focus-ring rounded-xl px-4 py-3 text-sm font-semibold transition",
                        active
                          ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--text))]"
                          : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-black/5 dark:hover:bg-white/5",
                      ].join(" ")}
                    >
                      {it.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
