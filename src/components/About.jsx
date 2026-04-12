import { motion } from "framer-motion";
import { Braces, Database, Layers, Rocket } from "lucide-react";
import profileImg from "../kubin.jpeg";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Section } from "./Section";

const CARDS = [
  {
    icon: Database,
    title: "Backend APIs",
    desc: "Designing robust REST APIs and scalable backend services.",
  },
  {
    icon: Layers,
    title: "Database & Performance",
    desc: "Query optimization, data modeling, and systems that stay fast.",
  },
  {
    icon: Braces,
    title: "Frontend Delivery",
    desc: "Modern React UI that feels clean, responsive, and polished.",
  },
  {
    icon: Rocket,
    title: "Architecture",
    desc: "Maintainable codebases with clear structure and solid patterns.",
  },
];

export function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="about" eyebrow="What I do" title="Capabilities at a glance">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <p className="text-[rgb(var(--muted))] leading-relaxed">
            I build scalable web applications with strong backend foundations and modern frontend execution.
            The focus is always on clean architecture, performance, and practical value.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[var(--shadow2)] dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-[Poppins] text-sm font-semibold">{c.title}</div>
                      <div className="mt-1 text-xs text-[rgb(var(--muted))]">{c.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[rgba(var(--accent),0.22)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.18)] blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[32px] p-3">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 dark:from-white/10 dark:to-transparent" />
              <img
                src={profileImg}
                alt="Kubinsamuvel"
                loading="lazy"
                className="relative aspect-square w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

