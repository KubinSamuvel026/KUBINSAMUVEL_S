import { ArrowLeft, Calendar, ExternalLink, Github, Layers } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);
  const reduced = usePrefersReducedMotion();

  if (!p) return <Navigate to="/projects" replace />;

  return (
    <div className="page-enter pt-28 pb-20">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-6">
        <Link to="/projects"
          className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition mb-8">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="glass rounded-3xl p-7 sm:p-10 relative overflow-hidden">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[rgba(var(--accent),0.12)] blur-3xl pointer-events-none" />
            <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-[rgba(var(--accent3),0.1)] blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    {p.category}
                  </div>
                  <h1 className="font-[Poppins] text-3xl sm:text-4xl font-extrabold tracking-tight">{p.title}</h1>
                  <div className="flex items-center gap-3 mt-3 text-sm text-[rgb(var(--muted))]">
                    <Calendar size={14} /> Created {p.createdAt}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]">
                    Live Demo <ExternalLink size={15} />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
                    GitHub <Github size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass rounded-3xl p-7">
                <h2 className="font-[Poppins] text-lg font-bold mb-4">Project Overview</h2>
                <p className="text-[rgb(var(--muted))] leading-relaxed">{p.overview}</p>
              </div>

              <div className="glass rounded-3xl p-7">
                <h2 className="font-[Poppins] text-lg font-bold mb-4">Key Features</h2>
                <ul className="space-y-2.5">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[rgb(var(--muted))]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-3xl p-7">
                <h2 className="font-[Poppins] text-lg font-bold mb-4">Challenges Solved</h2>
                <p className="text-[rgb(var(--muted))] leading-relaxed">{p.challenges}</p>
              </div>

              {/* Placeholder UI Preview */}
              {/* <div className="glass rounded-3xl p-7">
                <h2 className="font-[Poppins] text-lg font-bold mb-4">UI Preview</h2>
                <div className="rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.12)] via-[rgba(var(--accent2),0.08)] to-[rgba(var(--accent3),0.10)] border border-[rgb(var(--border))] aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-[Poppins] text-2xl font-extrabold grad-text mb-2">{p.title}</div>
                    <div className="text-sm text-[rgb(var(--muted))]">{p.screenshot }</div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="glass rounded-3xl p-6">
                <h3 className="font-[Poppins] text-sm font-bold mb-4 flex items-center gap-2">
                  <Layers size={15} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="font-[Poppins] text-sm font-bold mb-4">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { k: "Category", v: p.category },
                    { k: "Created", v: p.createdAt },
                    { k: "Status", v: "Live" },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex justify-between">
                      <dt className="text-[rgb(var(--muted))] font-semibold">{k}</dt>
                      <dd className="font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="font-[Poppins] text-sm font-bold mb-3">Other Projects</h3>
                <div className="space-y-2">
                  {projects.filter(x => x.id !== p.id).slice(0, 3).map(x => (
                    <Link key={x.id} to={`/projects/${x.id}`}
                      className="block rounded-xl border border-[rgb(var(--border))] bg-white/70 px-3 py-2.5 text-xs font-semibold hover:-translate-y-0.5 transition dark:bg-white/5">
                      {x.title}
                      <span className="ml-2 text-[rgb(var(--muted))] font-normal">{x.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
