import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/30 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 relative">
                {p.image ? (
                  <img
                    src={new URL(p.image, import.meta.env.BASE_URL).toString()}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[rgb(var(--color-primary))] transition-opacity"/>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" className="text-sm text-[rgb(var(--color-primary))] underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}



