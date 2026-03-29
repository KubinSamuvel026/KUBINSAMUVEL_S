import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Section({ id, eyebrow, title, children, className = "" }) {
  const reduced = usePrefersReducedMotion();

  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--muted))] backdrop-blur dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent2))]" />
              <span className="uppercase">{eyebrow}</span>
            </div>
          ) : null}

          {title ? (
            <h2 className="font-[Poppins] text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
              {title}
            </h2>
          ) : null}

          <div className="mt-10">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}

