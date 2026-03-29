import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Footer() {
  const reduced = usePrefersReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-10 pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-[Poppins] text-lg font-bold">{profile.name}</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">{profile.role}</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[rgb(var(--border))] pt-6 text-sm text-[rgb(var(--muted))]">
            © {year} {profile.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

