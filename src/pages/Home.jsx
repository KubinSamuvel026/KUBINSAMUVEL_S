import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Database, Download, Layout, Mail, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { profile, projects, skills } from "../data/profile";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion, useTypingText } from "../hooks";

function Particles() {
  const reduced = usePrefersReducedMotion();
  const canvasRef = useRef(null);
  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(2, devicePixelRatio || 1);
    const particles = [];
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const make = (n) => {
      particles.length = 0;
      for (let i = 0; i < n; i++) particles.push({
        x: Math.random() * innerWidth, y: Math.random() * innerHeight,
        r: Math.random() * 2.2 + 0.6,
        vx: (Math.random() * 2 - 1) * 0.22,
        vy: (Math.random() * 2 - 1) * 0.22,
        c: Math.random() < 0.5 ? "a" : Math.random() < 0.5 ? "b" : "c",
      });
    };
    resize(); make(Math.min(80, Math.floor(innerWidth / 16)));
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = innerWidth + 20;
        if (p.x > innerWidth + 20) p.x = -20;
        if (p.y < -20) p.y = innerHeight + 20;
        if (p.y > innerHeight + 20) p.y = -20;
        ctx.beginPath();
        ctx.fillStyle = p.c === "a" ? "rgba(86,64,255,0.22)" : p.c === "b" ? "rgba(0,191,255,0.18)" : "rgba(255,56,181,0.16)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, [reduced]);
  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 opacity-70" />;
}

const FEATURED = projects.filter(p => p.featured).slice(0, 4);

export default function Home() {
  const typed = useTypingText(profile.role, { speedMs: 38, startDelayMs: 320 });
  const reduced = usePrefersReducedMotion();
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/kubinresume.pdf";
  link.download = "Kubin_Samuel_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 retro-grid opacity-60" />
        <Particles />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 sm:px-6 md:grid-cols-2 md:pb-28">
          <div className="relative">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative rounded-3xl p-7 sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[rgba(var(--accent2),0.18)] blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[rgba(var(--accent3),0.14)] blur-3xl" />
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                Modern · Interactive · Fast
              </div>
              <h1 className="mt-5 font-[Poppins] text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="grad-text">{profile.name}</span>
              </h1>
              <div className="mt-3 flex items-center gap-2 text-base font-semibold sm:text-lg">
                <span className="text-[rgb(var(--muted))]">I build</span>
                <span className="relative">
                  {typed}
                  <span className="ml-1 inline-block h-5 w-[2px] animate-pulse rounded bg-[rgba(var(--accent),0.75)] align-middle" />
                </span>
              </div>
              <p className="mt-5 text-[rgb(var(--muted))]">{profile.tagline}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/projects" onMouseMove={attachRippleVars}
                  className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow2)] transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]">
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/blog" onMouseMove={attachRippleVars}
                  className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10">
                  Read Blog <BookOpen size={16} />
                </Link>
                <button onClick={downloadResume} onMouseMove={attachRippleVars}
                  className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10">
                  Resume <Download size={16} />
                </button>
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
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { k: "Focus", v: "Scalable systems" },
                  { k: "Strength", v: "Backend APIs" },
                  { k: "Style", v: "Modern UI" },
                  { k: "Mindset", v: "Clean architecture" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur dark:bg-white/5">
                    <div className="text-xs font-semibold text-[rgb(var(--muted))]">{s.k}</div>
                    <div className="mt-1 font-[Poppins] text-sm font-semibold">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="relative mt-4 rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur dark:bg-white/5">
                <div className="text-xs font-semibold text-[rgb(var(--muted))]">Core Expertise</div>
                <div className="mt-1 font-[Poppins] text-sm font-semibold">Python · Django · React · PostgreSQL</div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills preview ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2))]" />
              <span className="uppercase">Skills</span>
            </div>
            <h2 className="font-[Poppins] text-3xl font-bold tracking-tight sm:text-4xl">What I work with</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Database, label: "Backend", items: skills.backend.slice(0, 4) },
                { icon: Layout, label: "Frontend", items: skills.frontend },
                { icon: Code2, label: "Tech Stack", items: [
                  {name:"Docker",level:75},{name:"Git",level:90},{name:"Linux",level:80},{name:"REST APIs",level:92}
                ]},
              ].map(({ icon: Icon, label, items }) => (
                <div key={label} className="glass rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
                      <Icon size={18} />
                    </div>
                    <div className="font-[Poppins] text-base font-bold">{label}</div>
                  </div>
                  <div className="space-y-3">
                    {items.map(s => (
                      <div key={s.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-[rgb(var(--muted))]">{s.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]"
                            initial={reduced ? false : { width: 0 }}
                            whileInView={reduced ? undefined : { width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2))]" />
                  <span className="uppercase">Featured Projects</span>
                </div>
                <h2 className="font-[Poppins] text-3xl font-bold tracking-tight sm:text-4xl">Selected work</h2>
              </div>
              <Link to="/projects" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
                Explore More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {FEATURED.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/projects/${p.id}`} className="glass group block rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow2)]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                      {p.category}
                    </div>
                    <h3 className="mt-4 font-[Poppins] text-lg font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2))]" />
                  <span className="uppercase">Knowledge Hub</span>
                </div>
                <h2 className="font-[Poppins] text-3xl font-bold tracking-tight sm:text-4xl">Learn from the blog</h2>
              </div>
              <Link to="/blog" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
                All Articles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { cat: "Python", title: "Variables & Data Types", level: "Beginner", link: "/blog/py-variables" },
                { cat: "React", title: "React Hooks (useState, useEffect)", level: "Intermediate", link: "/blog/react-hooks" },
                { cat: "SQL", title: "Window Functions & CTEs", level: "Advanced", link: "/blog/sql-advanced" },
              ].map((b, i) => (
                <motion.div key={b.title}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}>
                  <Link to={b.link} className="glass block rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow2)]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag">{b.cat}</span>
                      <span className={`tag ${b.level === "Beginner" ? "border-green-300/40 text-green-600 dark:text-green-400" : b.level === "Advanced" ? "border-red-300/40 text-red-600 dark:text-red-400" : ""}`}>{b.level}</span>
                    </div>
                    <h3 className="font-[Poppins] text-base font-bold">{b.title}</h3>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[rgb(var(--accent))]">
                      Read article <ArrowRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[rgba(var(--accent),0.12)] blur-3xl" />
            <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-[rgba(var(--accent3),0.1)] blur-3xl" />
            <div className="relative">
              <div className="font-[Poppins] text-3xl font-extrabold mb-3">Let's build something real</div>
              <p className="text-[rgb(var(--muted))] mb-7 max-w-lg mx-auto">Open to full-time roles, freelance projects, and interesting collaborations.</p>
              <Link to="/contact" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow2)] transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]">
                <Mail size={16} /> Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
