import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Section } from "./Section";

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold text-[rgb(var(--muted))]">{label}</div>
      {children}
    </label>
  );
}

export function Contact() {
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2200);
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "focus-ring w-full rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))] shadow-none backdrop-blur transition focus:bg-white/90 dark:bg-white/5 dark:focus:bg-white/10";

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something real">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="font-[Poppins] text-lg font-bold">Contact details</div>
          <div className="mt-5 grid gap-3">
            <a
              className="focus-ring ripple flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold text-[rgb(var(--text))] backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5"
              onMouseMove={attachRippleVars}
              href={`mailto:${profile.contact.email}`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(var(--accent2),0.14)]">
                <Mail size={18} />
              </span>
              <span className="min-w-0 truncate">{profile.contact.email}</span>
            </a>
            <a
              className="focus-ring ripple flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold text-[rgb(var(--text))] backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5"
              onMouseMove={attachRippleVars}
              href={`tel:${profile.contact.phone.replaceAll(" ", "")}`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.14)]">
                <Phone size={18} />
              </span>
              <span className="min-w-0 truncate">{profile.contact.phone}</span>
            </a>
          </div>

          <div className="mt-7">
            <div className="text-xs font-semibold text-[rgb(var(--muted))]">Social</div>
            <div className="mt-3 flex flex-wrap gap-3">
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
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-[Poppins] text-lg font-bold">Send a message</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                This form is UI-only (no backend wired yet).
              </div>
            </div>
            {sent ? (
              <div className="rounded-full bg-[rgba(var(--accent2),0.14)] px-3 py-1 text-xs font-semibold text-[rgb(var(--text))]">
                Sent
              </div>
            ) : null}
          </div>

          <div className="mt-6 grid gap-4">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                className={inputCls}
                placeholder="Your name"
                type="text"
                required
              />
            </Field>
            <Field label="Email">
              <input
                value={form.email}
                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                className={inputCls}
                placeholder="your.email@example.com"
                type="email"
                required
              />
            </Field>
            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                className={`${inputCls} min-h-32 resize-none`}
                placeholder="Your message..."
                required
              />
            </Field>

            <button
              type="submit"
              onMouseMove={attachRippleVars}
              className="focus-ring ripple inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow2)] transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]"
            >
              Send Message <Send size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

