import { motion } from 'framer-motion'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid md:grid-cols-2 gap-8 items-center">
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
          <Reveal delay={0.05}>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Senior / Lead iOS Developer
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <p className="mt-5 text-slate-700 dark:text-slate-300">
            Building world-class iOS apps with elegant architecture and great UX.
          </p>
          </Reveal>
          <div className="mt-8 flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#projects" className="rounded-md bg-[rgb(var(--color-primary))] px-5 py-3 text-white font-medium">View Projects</motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact" className="rounded-md border border-slate-300 dark:border-slate-700 px-5 py-3">Contact Me</motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden shadow-lg ring-8 ring-[rgb(var(--color-primary))]/10"
        >
          <ProfilePhoto className="h-full w-full object-cover object-[50%_30%]" alt="Prashanth Thota headshot" />
        </motion.div>
      </div>
    </section>
  )
}



