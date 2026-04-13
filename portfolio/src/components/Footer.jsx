import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile.js";
import { attachRippleVars } from "../lib/dom.js";
import { usePrefersReducedMotion } from "../hooks/index.js";

export function Footer() {
  const reduced = usePrefersReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-10 pt-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-[Poppins] text-lg font-bold">{profile.name}</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">{profile.role}</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 dark:bg-white/5">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 dark:bg-white/5">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`mailto:${profile.contact.email}`} onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 dark:bg-white/5">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-6 text-xs text-[rgb(var(--muted))]">
            <span>© {year} {profile.name}. All rights reserved.</span>
            <div className="flex gap-4">
              {["/","/about","/projects","/blog","/contact"].map((p, i) => (
                <Link key={p} to={p} className="hover:text-[rgb(var(--text))] transition">
                  {["Home","About","Projects","Blog","Contact"][i]}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
