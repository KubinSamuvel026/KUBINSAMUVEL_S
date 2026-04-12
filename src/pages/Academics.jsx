import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Section } from "../components/Section";
import { academics } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks";

const TYPE_META = {
  education: { icon: GraduationCap, label: "Education", color: "var(--accent)" },
  training: { icon: Briefcase, label: "Training", color: "var(--accent2)" },
};

export default function Academics() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="page-enter">
      <Section eyebrow="Academics" title="Education & Training">
        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="timeline-line" />

          {academics.map((a, idx) => {
            const meta = TYPE_META[a.type] ?? TYPE_META.education;
            const Icon = meta.icon;

            return (
              <motion.div
                key={idx}
                initial={reduced ? false : { opacity: 0, x: -20 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[2.35rem] top-6 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-[var(--shadow1)]">
                  <Icon size={15} style={{ color: `rgb(${meta.color})` }} />
                </div>

                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 tag mb-2" style={{ borderColor: `rgba(${meta.color},0.4)`, color: `rgb(${meta.color})` }}>
                        {meta.label}
                      </div>
                      <h3 className="font-[Poppins] text-xl font-bold leading-snug">{a.degree}</h3>
                      <div className="mt-1 font-semibold text-[rgb(var(--muted))]">{a.institution}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-[Poppins] text-sm font-bold bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))] bg-clip-text text-transparent">
                        {a.year}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[rgb(var(--muted))]">{a.grade}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">{a.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* QSpiders spotlight */}
      <Section eyebrow="Training Spotlight" title="QSpiders — Where It All Came Together">
        <div className="glass rounded-3xl p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[rgba(var(--accent2),0.15)] blur-3xl pointer-events-none" />
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className="font-[Poppins] text-2xl font-extrabold mb-3">
                Python Full Stack Development
              </div>
              <div className="text-[rgb(var(--muted))] leading-relaxed mb-5">
                QSpiders is one of South India's premier software training institutes with a strong track record of placing freshers in top tech companies. The 12-month Python Full Stack program covered everything from core Python to production deployment.
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python Core","Django","Flask","FastAPI","PostgreSQL","React","Tailwind CSS","REST APIs","Docker","Git"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Duration", value: "12 Months" },
                { label: "Format", value: "Full-time" },
                { label: "Projects", value: "2+ Built" },
                { label: "Status", value: "Certified" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 dark:bg-white/5 text-center">
                  <div className="font-[Poppins] text-xl font-extrabold grad-text">{value}</div>
                  <div className="mt-1 text-xs text-[rgb(var(--muted))] font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
