import { motion } from "framer-motion";
import { Code2, Database, Layout } from "lucide-react";
import { skills } from "../data/profile.js";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import { Section } from "./Section.jsx";

function Meter({ label, value }) {
  const reduced = usePrefersReducedMotion();
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (c * value) / 100;

  return (
    <div className="group rounded-3xl border border-[rgb(var(--border))] bg-white/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[var(--shadow2)] dark:bg-white/5">
      <div className="flex items-center justify-between">
        <div className="font-[Poppins] text-sm font-semibold">{label}</div>
        <div className="text-xs font-semibold text-[rgb(var(--muted))]">{value}%</div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <svg width="88" height="88" viewBox="0 0 88 88" className="shrink-0">
          <circle cx="44" cy="44" r={r} stroke="rgba(0,0,0,0.06)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="44"
            cy="44"
            r={r}
            stroke="url(#grad)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={reduced ? false : { strokeDashoffset: c }}
            whileInView={reduced ? undefined : { strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "44px 44px", transform: "rotate(-90deg)" }}
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="88" y2="88">
              <stop offset="0%" stopColor="rgb(var(--accent))" />
              <stop offset="55%" stopColor="rgb(var(--accent2))" />
              <stop offset="100%" stopColor="rgb(var(--accent3))" />
            </linearGradient>
          </defs>
        </svg>

        <div className="min-w-0">
          <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]"
              initial={reduced ? false : { width: 0 }}
              whileInView={reduced ? undefined : { width: `${value}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="mt-3 text-xs text-[rgb(var(--muted))]">
            Hover for glow · Built for speed
          </div>
        </div>
      </div>
    </div>
  );
}

function Category({ title, icon: Icon, list }) {
  return (
    <div className="glass rounded-3xl p-7 sm:p-9">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
          <Icon size={18} />
        </div>
        <div>
          <div className="font-[Poppins] text-lg font-bold">{title}</div>
          <div className="text-sm text-[rgb(var(--muted))]">Interactive proficiency meters</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {list.map((s) => (
          <Meter key={s.name} label={s.name} value={s.level} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Backend depth, modern frontend craft">
      <div className="grid gap-6">
        <Category title="Backend" icon={Database} list={skills.backend} />
        <Category title="Frontend" icon={Layout} list={skills.frontend} />
        <div className="glass rounded-3xl p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
              <Code2 size={18} />
            </div>
            <div>
              <div className="font-[Poppins] text-lg font-bold">Tech Stack</div>
              <div className="text-sm text-[rgb(var(--muted))]">Icons with motion + hover</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Python",
              "Django",
              "Flask",
              "FastAPI",
              "PostgreSQL",
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind",
            ].map((t) => (
              <motion.span
                key={t}
                whileHover={{ y: -2 }}
                className="rounded-full border border-[rgb(var(--border))] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgb(var(--text))] backdrop-blur dark:bg-white/5"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

