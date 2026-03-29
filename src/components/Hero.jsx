import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { profile } from "../data/profile";
import { attachRippleVars, scrollToId } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTypingText } from "../hooks/useTypingText";

function Particles() {
  const reduced = usePrefersReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const particles = [];

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const make = (n) => {
      particles.length = 0;
      for (let i = 0; i < n; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 2.2 + 0.6,
          vx: (Math.random() * 2 - 1) * 0.22,
          vy: (Math.random() * 2 - 1) * 0.22,
          c: Math.random() < 0.5 ? "accent" : Math.random() < 0.5 ? "accent2" : "accent3",
        });
      }
    };

    resize();
    make(Math.min(84, Math.floor(window.innerWidth / 16)));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = window.innerWidth + 20;
        if (p.x > window.innerWidth + 20) p.x = -20;
        if (p.y < -20) p.y = window.innerHeight + 20;
        if (p.y > window.innerHeight + 20) p.y = -20;

        const a =
          p.c === "accent" ? "rgba(86,64,255,0.22)" : p.c === "accent2" ? "rgba(0,191,255,0.18)" : "rgba(255,56,181,0.16)";
        ctx.beginPath();
        ctx.fillStyle = a;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 opacity-70" />;
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const typed = useTypingText(profile.role, { speedMs: 38, startDelayMs: 320 });

  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 retro-grid opacity-70" />
      <Particles />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-20 sm:px-6 md:grid-cols-2 md:pb-28">
        <div className="relative">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative rounded-3xl p-7 sm:p-9"
          >
            <div className="absolute -right-24 -top-24 h-44 w-44 rounded-full bg-[rgba(var(--accent2),0.18)] blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-44 w-44 rounded-full bg-[rgba(var(--accent3),0.14)] blur-3xl" />

            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
              Premium · Modern · Retro
            </div>

            <h1 className="mt-5 font-[Poppins] text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))] bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <div className="mt-3 flex items-center gap-2 text-base font-semibold text-[rgb(var(--text))] sm:text-lg">
              <span className="text-[rgb(var(--muted))]">I build</span>
              <span className="relative">
                {typed}
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse rounded bg-[rgba(var(--accent),0.75)] align-middle" />
              </span>
            </div>

            <p className="mt-5 text-[rgb(var(--muted))]">
              Scalable APIs, performance-first systems, and polished user experiences — with clean architecture and maintainable code.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onMouseMove={attachRippleVars}
                onClick={() => scrollToId("projects")}
                className="focus-ring ripple inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow2)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(10,12,20,0.16)] dark:bg-white dark:text-[rgb(var(--text))]"
              >
                View Projects <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onMouseMove={attachRippleVars}
                onClick={() => scrollToId("contact")}
                className="focus-ring ripple inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold text-[rgb(var(--text))] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Contact Me <Mail size={16} />
              </button>

              <a
                onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold text-[rgb(var(--text))] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                href={profile.contact.resumePath}
                download
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent),0.14)] via-transparent to-[rgba(var(--accent2),0.12)]" />

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Focus", v: "Scalable systems" },
                  { k: "Strength", v: "Backend APIs" },
                  { k: "Style", v: "Modern UI" },
                  { k: "Mindset", v: "Clean architecture" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur dark:bg-white/5"
                  >
                    <div className="text-xs font-semibold text-[rgb(var(--muted))]">{s.k}</div>
                    <div className="mt-1 font-[Poppins] text-sm font-semibold">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur dark:bg-white/5">
                <div className="text-xs font-semibold text-[rgb(var(--muted))]">Signature</div>
                <div className="mt-1 font-[Poppins] text-base font-semibold">
                  Premium light theme + subtle retro glow
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

