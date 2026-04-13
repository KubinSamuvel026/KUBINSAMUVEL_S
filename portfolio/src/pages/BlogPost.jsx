import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogTopics, blogCategories } from "../data/blog";
import { usePrefersReducedMotion } from "../hooks";

function CodeBlock({ code }) {
  return (
    <pre className="code-block my-5 overflow-x-auto text-[rgb(var(--text))]">
      <code>{code}</code>
    </pre>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const topic = blogTopics.find((t) => t.id === id);
  const reduced = usePrefersReducedMotion();

  if (!topic) return <Navigate to="/blog" replace />;

  const cat = blogCategories.find(c => c.id === topic.category);

  // Related articles (same category, different topic)
  const related = blogTopics.filter(t => t.category === topic.category && t.id !== topic.id).slice(0, 4);

  // Table of contents
  const toc = topic.content.sections.map(s => s.heading);

  const LEVEL_COLORS = {
    Beginner: "text-green-600 dark:text-green-400 border-green-300/50",
    Intermediate: "text-yellow-600 dark:text-yellow-400 border-yellow-300/50",
    Advanced: "text-red-600 dark:text-red-400 border-red-300/50",
  };

  return (
    <div className="page-enter pt-28 pb-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Link to="/blog" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition mb-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article */}
          <motion.article
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 min-w-0"
          >
            {/* Hero */}
            <div className="glass rounded-3xl p-7 sm:p-10 mb-7 relative overflow-hidden">
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[rgba(var(--accent),0.12)] blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="tag">{cat?.label ?? topic.category}</span>
                  <span className={`tag ${LEVEL_COLORS[topic.level]}`}>{topic.level}</span>
                  <span className="flex items-center gap-1.5 tag">
                    <Clock size={11} /> {topic.readTime} read
                  </span>
                </div>
                <h1 className="font-[Poppins] text-3xl sm:text-4xl font-extrabold tracking-tight">{topic.title}</h1>
                <p className="mt-3 text-[rgb(var(--muted))] text-lg">{topic.summary}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="glass rounded-3xl p-7 mb-6 prose-blog">
              <p className="text-base leading-relaxed">{topic.content.intro}</p>
            </div>

            {/* Sections */}
            {topic.content.sections.map((s, i) => (
              <div key={i} className="glass rounded-3xl p-7 mb-5">
                <h2 id={s.heading.toLowerCase().replace(/\s+/g, "-")}
                  className="font-[Poppins] text-xl font-bold mb-3">{s.heading}</h2>
                {s.body && <div className="prose-blog mb-4"><p>{s.body}</p></div>}
                {s.code && <CodeBlock code={s.code} />}
              </div>
            ))}

            {/* Tips */}
            {topic.content.tips?.length > 0 && (
              <div className="glass rounded-3xl p-7 border-l-4 border-[rgb(var(--accent2))]">
                <div className="font-[Poppins] text-base font-bold mb-3 flex items-center gap-2">
                  <span className="text-[rgb(var(--accent2))]">💡</span> Quick Tips
                </div>
                <ul className="space-y-2">
                  {topic.content.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[rgb(var(--muted))]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent2))]" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            {/* Table of Contents */}
            <div className="glass rounded-3xl p-5 mb-5 sticky top-24">
              <div className="font-[Poppins] text-sm font-bold mb-3 flex items-center gap-2">
                <BookOpen size={14} /> Contents
              </div>
              <ol className="space-y-1.5">
                {toc.map((heading, i) => (
                  <li key={i}>
                    <a
                      href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition flex items-center gap-2"
                    >
                      <span className="text-[rgb(var(--accent))] font-semibold">{i + 1}.</span>
                      {heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="glass rounded-3xl p-5">
                <div className="font-[Poppins] text-sm font-bold mb-3">Related Articles</div>
                <div className="space-y-2">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.id}`}
                      className="block rounded-xl border border-[rgb(var(--border))] bg-white/70 px-3 py-2.5 hover:-translate-y-0.5 transition dark:bg-white/5">
                      <div className="text-xs font-bold leading-snug">{r.title}</div>
                      <div className={`mt-1 text-[10px] font-semibold ${LEVEL_COLORS[r.level]}`}>{r.level}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
