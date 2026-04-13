import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Section } from "../components/Section.jsx";
import { profile } from "../data/profile.js";
import { attachRippleVars } from "../lib/dom.js";
import { usePrefersReducedMotion } from "../hooks/index.js";

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold text-[rgb(var(--muted))]">{label}</div>
      {children}
    </label>
  );
}

export default function Contact() {
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls = "focus-ring w-full rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm placeholder:text-[rgb(var(--muted))] backdrop-blur transition focus:bg-white/90 dark:bg-white/5 dark:focus:bg-white/10";

  return (
    <div className="page-enter">
      <Section eyebrow="Contact" title="Let's build something real">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-3xl p-7 sm:p-9 h-full">
              <div className="font-[Poppins] text-xl font-bold">Contact details</div>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                Open to full-time roles, freelance, and interesting collaborations. Let's talk.
              </p>

              <div className="mt-6 grid gap-3">
                <a href={`mailto:${profile.contact.email}`} onMouseMove={attachRippleVars}
                  className="focus-ring ripple flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(var(--accent2),0.14)]">
                    <Mail size={16} />
                  </span>
                  <span className="min-w-0 truncate">{profile.contact.email}</span>
                </a>
                <a href={`tel:${profile.contact.phone.replaceAll(" ", "")}`} onMouseMove={attachRippleVars}
                  className="focus-ring ripple flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 dark:bg-white/5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.14)]">
                    <Phone size={16} />
                  </span>
                  <span>{profile.contact.phone}</span>
                </a>
              </div>

              <div className="mt-7">
                <div className="text-xs font-semibold text-[rgb(var(--muted))] mb-3">Social</div>
                <div className="flex flex-wrap gap-3">
                  <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
                    className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 dark:bg-white/5">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" onMouseMove={attachRippleVars}
                    className="focus-ring ripple inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 dark:bg-white/5">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-8 glass rounded-2xl p-5">
                <div className="font-[Poppins] text-sm font-bold mb-2">Response time</div>
                <div className="text-sm text-[rgb(var(--muted))]">I typically respond within 24 hours on weekdays.</div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-black/5 dark:bg-white/10">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))]" />
                </div>
                <div className="mt-1.5 text-xs text-[rgb(var(--muted))]">90% reply rate</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-[Poppins] text-xl font-bold">Send a message</div>
                <div className="mt-1 text-sm text-[rgb(var(--muted))]">UI-only — wire up your backend when ready.</div>
              </div>
              {sent && (
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  ✓ Sent!
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input value={form.name} onChange={e => setForm(v => ({ ...v, name: e.target.value }))}
                    className={inputCls} placeholder="Your name" type="text" required />
                </Field>
                <Field label="Email">
                  <input value={form.email} onChange={e => setForm(v => ({ ...v, email: e.target.value }))}
                    className={inputCls} placeholder="your@email.com" type="email" required />
                </Field>
              </div>
              <Field label="Subject">
                <input value={form.subject} onChange={e => setForm(v => ({ ...v, subject: e.target.value }))}
                  className={inputCls} placeholder="What's this about?" type="text" required />
              </Field>
              <Field label="Message">
                <textarea value={form.message} onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                  className={`${inputCls} min-h-36 resize-none`} placeholder="Your message..." required />
              </Field>
              <button type="submit" onMouseMove={attachRippleVars}
                className="focus-ring ripple inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgb(var(--text))] px-5 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow2)] transition hover:-translate-y-0.5 dark:bg-white dark:text-[rgb(var(--text))]">
                Send Message <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </div>
  );
}
