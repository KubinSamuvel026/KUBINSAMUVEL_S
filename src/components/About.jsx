import { motion } from "framer-motion";
import profileImg from "../kubin.jpeg";
import { profile } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Section } from "./Section";

function Highlight({ children }) {
  return (
    <span className="rounded-md bg-[rgba(var(--accent2),0.12)] px-1.5 py-0.5 font-semibold text-[rgb(var(--text))]">
      {children}
    </span>
  );
}

export function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="about" eyebrow="About" title="Crafting scalable systems with polished UX">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <p className="text-[rgb(var(--muted))] leading-relaxed">
            {profile.about
              .replaceAll("scalable", "__SCALABLE__")
              .replaceAll("APIs", "__APIS__")
              .replaceAll("performance", "__PERFORMANCE__")
              .split(/(__SCALABLE__|__APIS__|__PERFORMANCE__)/g)
              .map((chunk, i) => {
                if (chunk === "__SCALABLE__") return <Highlight key={i}>scalable</Highlight>;
                if (chunk === "__APIS__") return <Highlight key={i}>APIs</Highlight>;
                if (chunk === "__PERFORMANCE__") return <Highlight key={i}>performance</Highlight>;
                return <span key={i}>{chunk}</span>;
              })}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { t: "Scalable", d: "Architecture & APIs" },
              { t: "Clean", d: "Maintainable code" },
              { t: "Fast", d: "Performance-first" },
              { t: "Modern", d: "UI craft" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur dark:bg-white/5"
              >
                <div className="font-[Poppins] text-sm font-semibold">{c.t}</div>
                <div className="mt-1 text-xs text-[rgb(var(--muted))]">{c.d}</div>
              </div>
            ))}
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

