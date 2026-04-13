import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import { Section } from "../components/Section";
import { blogCategories, blogTopics } from "../data/blog";
import { attachRippleVars } from "../lib/dom";
import { usePrefersReducedMotion } from "../hooks";

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const LEVEL_COLORS = {
  Beginner: "text-green-600 dark:text-green-400 border-green-300/50",
  Intermediate: "text-yellow-600 dark:text-yellow-400 border-yellow-300/50",
  Advanced: "text-red-600 dark:text-red-400 border-red-300/50",
};

// Group topics by category → level → topics
function buildTree(topics) {
  const tree = {};
  for (const t of topics) {
    if (!tree[t.category]) tree[t.category] = {};
    if (!tree[t.category][t.level]) tree[t.category][t.level] = [];
    tree[t.category][t.level].push(t);
  }
  return tree;
}

export default function Blog() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeLevel, setActiveLevel] = useState("All");
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const reduced = usePrefersReducedMotion();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogTopics.filter((t) => {
      const catOk = activeCat === "all" || t.category === activeCat;
      const lvlOk = activeLevel === "All" || t.level === activeLevel;
      const qOk = !q || [t.title, t.summary, t.category].join(" ").toLowerCase().includes(q);
      return catOk && lvlOk && qOk;
    });
  }, [activeCat, activeLevel, query]);

  const tree = useMemo(() => buildTree(filtered), [filtered]);

  return (
    <div className="page-enter">
      <Section eyebrow="Knowledge Hub" title="Learn Python Full Stack Development">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="glass rounded-3xl p-5 sticky top-24">
              <div className="font-[Poppins] text-sm font-bold mb-4">Topics</div>

              <button
                type="button"
                onClick={() => setActiveCat("all")}
                onMouseMove={attachRippleVars}
                className={["focus-ring ripple w-full text-left rounded-xl px-3 py-2 text-sm font-semibold transition mb-1",
                  activeCat === "all" ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--text))]" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-black/5 dark:hover:bg-white/5",
                ].join(" ")}
              >
                All Topics
              </button>

              {blogCategories.map((cat) => {
                const count = blogTopics.filter(t => t.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCat(cat.id)}
                    onMouseMove={attachRippleVars}
                    className={["focus-ring ripple w-full text-left rounded-xl px-3 py-2 text-sm font-semibold transition flex items-center justify-between mb-1",
                      activeCat === cat.id ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--text))]" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-black/5 dark:hover:bg-white/5",
                    ].join(" ")}
                  >
                    <span>{cat.label}</span>
                    <span className="tag text-[10px] px-1.5">{count}</span>
                  </button>
                );
              })}

              <div className="mt-5 border-t border-[rgb(var(--border))] pt-4">
                <div className="font-[Poppins] text-xs font-bold text-[rgb(var(--muted))] mb-3 uppercase tracking-wider">Level</div>
                {LEVELS.map(l => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setActiveLevel(l)}
                    className={["focus-ring w-full text-left rounded-xl px-3 py-2 text-sm font-semibold transition mb-1",
                      activeLevel === l ? "bg-[rgba(var(--accent),0.12)] text-[rgb(var(--text))]" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-black/5 dark:hover:bg-white/5",
                    ].join(" ")}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Search */}
            <div className="glass rounded-3xl p-4 mb-6 flex gap-3 items-center">
              <Search size={16} className="shrink-0 text-[rgb(var(--muted))]" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[rgb(var(--muted))]"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition">Clear</button>
              )}
            </div>

            {/* Tree view by category + level */}
            {Object.keys(tree).length === 0 ? (
              <div className="glass rounded-3xl p-9 text-center">
                <div className="font-[Poppins] font-bold">No articles found</div>
                <div className="mt-2 text-sm text-[rgb(var(--muted))]">Try a different search or filter.</div>
              </div>
            ) : (
              Object.entries(tree).map(([catId, levels]) => {
                const cat = blogCategories.find(c => c.id === catId);
                return (
                  <div key={catId} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen size={16} className="text-[rgb(var(--accent))]" />
                      <h2 className="font-[Poppins] text-xl font-bold">{cat?.label ?? catId}</h2>
                    </div>
                    {["Beginner", "Intermediate", "Advanced"].map(level => {
                      const articles = levels[level];
                      if (!articles) return null;
                      return (
                        <div key={level} className="mb-5">
                          <div className={`inline-flex items-center gap-1.5 tag mb-3 ${LEVEL_COLORS[level]}`}>{level}</div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {articles.map((t, i) => (
                              <motion.div
                                key={t.id}
                                initial={reduced ? false : { opacity: 0, y: 10 }}
                                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                              >
                                <Link
                                  to={`/blog/${t.id}`}
                                  className="glass flex items-start gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow2)] group"
                                >
                                  <ChevronRight size={15} className="mt-0.5 shrink-0 text-[rgb(var(--accent))] group-hover:translate-x-0.5 transition" />
                                  <div className="min-w-0">
                                    <div className="font-[Poppins] text-sm font-bold leading-snug">{t.title}</div>
                                    <div className="mt-1 text-xs text-[rgb(var(--muted))] line-clamp-2">{t.summary}</div>
                                    <div className="mt-2 text-xs text-[rgb(var(--muted))]">{t.readTime} read</div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
