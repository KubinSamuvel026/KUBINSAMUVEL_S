import { motion } from "framer-motion";
import { ExternalLink, Github, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section.jsx";
import { projects } from "../data/profile.js";
import { attachRippleVars } from "../lib/dom.js";
import { usePrefersReducedMotion } from "../hooks/index.js";

function ProjectCard({ p, index }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(0.18, index * 0.05), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow2)]">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          <div className="absolute -right-24 -top-24 h-44 w-44 rounded-full bg-[rgba(var(--accent2),0.15)] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-44 w-44 rounded-full bg-[rgba(var(--accent3),0.12)] blur-3xl" />
        </div>
        <div className="relative flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
            {p.category}
          </div>
          <h3 className="mt-4 font-[Poppins] text-lg font-bold tracking-tight">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        <div className="relative mt-5 flex flex-wrap gap-2 pt-4 border-t border-[rgb(var(--border))]">
          <Link
            to={`/projects/${p.id}`}
            onMouseMove={attachRippleVars}
            className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]"
          >
            Details
          </Link>
          <a href={p.live} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
            className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-4 py-2 text-xs font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
            Live <ExternalLink size={13} />
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
            className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-4 py-2 text-xs font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
            GitHub <Github size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filters = ["All", "Frontend", "Backend", "Fullstack"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = filter === "All" || p.category === filter;
      if (!inCat) return false;
      if (!q) return true;
      return [p.title, p.description, ...(p.tech ?? [])].join(" ").toLowerCase().includes(q);
    });
  }, [filter, query]);

  return (
    <div className="page-enter">
      <Section eyebrow="Projects" title="Search and filter my work">
        <div className="glass rounded-3xl p-5 sm:p-7 mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-[rgb(var(--muted))]">
              <SlidersHorizontal size={16} /> Find projects quickly
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <Search size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--muted))]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, tech, keywords…"
                  className="focus-ring w-full rounded-2xl border border-[rgb(var(--border))] bg-white/70 py-2.5 pl-11 pr-4 text-sm placeholder:text-[rgb(var(--muted))] backdrop-blur transition focus:bg-white/90 sm:w-72 dark:bg-white/5 dark:focus:bg-white/10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button key={f} type="button" onClick={() => setFilter(f)} onMouseMove={attachRippleVars}
                    className={["focus-ring ripple rounded-2xl px-4 py-2 text-sm font-semibold transition",
                      f === filter
                        ? "bg-[rgb(var(--text))] text-white dark:bg-white dark:text-[rgb(var(--text))]"
                        : "border border-[rgb(var(--border))] bg-white/60 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10",
                    ].join(" ")}>{f}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? filtered.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />) : (
            <div className="glass col-span-full rounded-3xl p-9 text-center">
              <div className="font-[Poppins] text-base font-bold">No matches</div>
              <div className="mt-2 text-sm text-[rgb(var(--muted))]">Try a different keyword or switch the category filter.</div>
              <button type="button" onClick={() => { setQuery(""); setFilter("All"); }} onMouseMove={attachRippleVars}
                className="focus-ring ripple mt-5 rounded-2xl bg-[rgb(var(--text))] px-4 py-2 text-sm font-semibold text-white transition dark:bg-white dark:text-[rgb(var(--text))]">
                Reset
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
