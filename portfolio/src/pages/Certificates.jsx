import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "../components/Section";
import { certificates } from "../data/profile";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks";

const CAT_COLORS = {
  Training: "from-[rgba(var(--accent),0.18)] to-[rgba(var(--accent2),0.12)]",
  Backend: "from-[rgba(var(--accent2),0.18)] to-[rgba(var(--accent),0.12)]",
  Frontend: "from-[rgba(var(--accent3),0.18)] to-[rgba(var(--accent2),0.12)]",
  Database: "from-[rgba(var(--accent),0.18)] to-[rgba(var(--accent3),0.12)]",
  DevOps: "from-[rgba(var(--accent2),0.18)] to-[rgba(var(--accent3),0.12)]",
};

export default function Certificates() {
  const reduced = usePrefersReducedMotion();

  const categories = [...new Set(certificates.map(c => c.category))];
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? certificates : certificates.filter(c => c.category === filter);

  return (
    <div className="page-enter">
      <Section eyebrow="Certificates" title="Certifications & Credentials">
        {/* Filters */}
        <div className="glass rounded-3xl p-4 mb-8 flex flex-wrap gap-2">
          {["All", ...categories].map(cat => (
            <button key={cat} type="button" onClick={() => setFilter(cat)} onMouseMove={attachRippleVars}
              className={["focus-ring ripple rounded-2xl px-4 py-2 text-sm font-semibold transition",
                filter === cat
                  ? "bg-[rgb(var(--text))] text-white dark:bg-white dark:text-[rgb(var(--text))]"
                  : "border border-[rgb(var(--border))] bg-white/60 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10",
              ].join(" ")}>{cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass group flex h-full flex-col rounded-3xl overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow2)]">
                {/* Preview banner */}
                <div className={`bg-gradient-to-br ${CAT_COLORS[cert.category] ?? CAT_COLORS.Training} h-28 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 retro-grid opacity-30" />
                  <div className="relative text-center px-4">
                    <Award size={28} className="mx-auto mb-1 text-[rgb(var(--accent))]" />
                    <div className="font-[Poppins] text-xs font-bold text-[rgb(var(--muted))]">{cert.org}</div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="tag">{cert.category}</span>
                    <span className="text-xs font-semibold text-[rgb(var(--muted))]">{cert.date}</span>
                  </div>
                  <h3 className="font-[Poppins] text-base font-bold leading-snug">{cert.name}</h3>
                  <div className="mt-1 text-sm text-[rgb(var(--muted))] font-semibold">{cert.org}</div>
                  <p className="mt-3 text-xs text-[rgb(var(--muted))] leading-relaxed flex-1">{cert.description}</p>
                  {cert.verifyUrl && cert.verifyUrl !== "#" && (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
                      className="focus-ring ripple mt-4 inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-white/60 px-3 py-2 text-xs font-semibold transition hover:bg-white/80 dark:bg-white/5">
                      Verify <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
