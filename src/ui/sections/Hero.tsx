import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Prashanth Thota
          </motion.h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Lead & Senior iOS Developer
          </p>
          <p className="mt-5 text-slate-700 dark:text-slate-300">
            Building world-class iOS apps with elegant architecture and great UX.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="rounded-md bg-[rgb(var(--color-primary))] px-5 py-3 text-white font-medium">View Projects</a>
            <a href="#contact" className="rounded-md border border-slate-300 dark:border-slate-700 px-5 py-3">Contact Me</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))] shadow-lg ring-8 ring-[rgb(var(--color-primary))]/10"
        />
      </div>
    </section>
  )
}



