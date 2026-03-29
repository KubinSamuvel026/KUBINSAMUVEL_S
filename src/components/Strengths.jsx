import { motion } from "framer-motion";
import { Bolt, Boxes, Gauge, Sparkles } from "lucide-react";
import { strengths } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Section } from "./Section";

const ICONS = [Boxes, Gauge, Bolt, Sparkles];

export function Strengths() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="strengths" eyebrow="Strengths" title="What you can expect working with me">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={s.title}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: Math.min(0.18, idx * 0.04), ease: [0.22, 1, 0.36, 1] }}
              className="glass group rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
                <Icon size={18} />
              </div>
              <div className="mt-4 font-[Poppins] text-base font-bold">{s.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                {s.description}
              </div>
              <div className="mt-5 h-1 w-full rounded-full bg-black/5 dark:bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

