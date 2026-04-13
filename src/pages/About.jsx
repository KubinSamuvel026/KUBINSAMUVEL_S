import { motion } from "framer-motion";
import { Braces, Database, Layers, Rocket, User } from "lucide-react";
import { Section } from "../components/Section.jsx";
import { profile, strengths } from "../data/profile.js";
import { usePrefersReducedMotion } from "../hooks/index.js";

const CARDS = [
  { icon: Database, title: "Backend APIs", desc: "Designing robust REST APIs and scalable backend services." },
  { icon: Layers, title: "Database & Performance", desc: "Query optimization, data modeling, and systems that stay fast." },
  { icon: Braces, title: "Frontend Delivery", desc: "Modern React UI that feels clean, responsive, and polished." },
  { icon: Rocket, title: "Architecture", desc: "Maintainable codebases with clear structure and solid patterns." },
];

export default function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="page-enter">
      <Section id="about" eyebrow="About Me" title="Who I am">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
                <User size={20} />
              </div>
              <div className="font-[Poppins] text-lg font-bold">About Kubinsamuvel</div>
            </div>
            <p className="text-[rgb(var(--muted))] leading-relaxed">{profile.bio}</p>
            <p className="text-[rgb(var(--muted))] leading-relaxed mt-4">
              Trained at QSpiders, one of South India's premier software training institutes, I've built practical skills across the full web development stack. I take pride in writing clean, documented code that teams can actually maintain.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: "Location", value: "Tamil Nadu, India" },
                { label: "Availability", value: "Open to work" },
                { label: "Experience", value: "Fresher / Junior" },
                { label: "Languages", value: "Tamil, English" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-3 dark:bg-white/5">
                  <div className="text-xs text-[rgb(var(--muted))] font-semibold">{label}</div>
                  <div className="mt-0.5 text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-3xl p-7 sm:p-9">
              <div className="font-[Poppins] text-base font-bold mb-5">Capabilities at a glance</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {CARDS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="group rounded-2xl border border-[rgb(var(--border))] bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[var(--shadow2)] dark:bg-white/5">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent2),0.12)] to-[rgba(var(--accent3),0.12)]">
                          <Icon size={16} />
                        </span>
                        <div className="min-w-0">
                          <div className="font-[Poppins] text-sm font-semibold">{c.title}</div>
                          <div className="mt-0.5 text-xs text-[rgb(var(--muted))]">{c.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Strengths */}
      <Section eyebrow="Strengths" title="What you can expect working with me">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-6"
            >
              <div className="font-[Poppins] text-base font-bold">{s.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">{s.description}</div>
              <div className="mt-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent2))] to-[rgb(var(--accent3))]" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
