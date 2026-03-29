import { motion } from "framer-motion";
import { ExternalLink, Github, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { projects as allProjects } from "../data/profile";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Section } from "./Section";

function TiltCard({ children, className = "" }) {
  const reduced = usePrefersReducedMotion();
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 12;
    setStyle({ transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)` });
  };
  const onLeave = () => setStyle({});

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 [transform-style:preserve-3d] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: Math.min(0.18, index * 0.03), ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="h-full">
        <div className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6">
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -right-24 -top-24 h-44 w-44 rounded-full bg-[rgba(var(--accent2),0.18)] blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-44 w-44 rounded-full bg-[rgba(var(--accent3),0.14)] blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
              {p.category}
            </div>
            <h3 className="mt-4 font-[Poppins] text-lg font-bold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">{p.description}</p>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--text))] backdrop-blur dark:bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative mt-6 flex flex-wrap gap-3">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={attachRippleVars}
              className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={attachRippleVars}
              className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            >
              GitHub <Github size={16} />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Frontend", "Backend", "Fullstack"];

  const filtered = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="projects" eyebrow="Projects" title="Premium UI cards with tilt + filters">
      <div className="glass rounded-3xl p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-[rgb(var(--muted))]">
            <SlidersHorizontal size={16} />
            Filter projects
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  onMouseMove={attachRippleVars}
                  className={[
                    "focus-ring ripple rounded-2xl px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-[rgb(var(--text))] text-white dark:bg-white dark:text-[rgb(var(--text))]"
                      : "border border-[rgb(var(--border))] bg-white/60 text-[rgb(var(--text))] hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

