import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
export function Contact() {
  return (
    <section id="contact" className="py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
        <h2 className="text-2xl font-semibold">Contact</h2>
        </Reveal>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <Reveal>
          <form className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
            <div className="grid gap-4">
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Name" />
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Email" type="email" />
              <textarea className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Message" rows={5} />
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="rounded-md bg-[rgb(var(--color-primary))] text-white px-4 py-2 w-max">Send</motion.button>
            </div>
          </form>
          </Reveal>
          <Reveal delay={0.05}>
          <div>
            <p className="text-slate-700 dark:text-slate-300">Email: <a className="underline" href="mailto:prashanthsep2@gmail.com">prashanthsep2@gmail.com</a></p>
            <div className="mt-4 flex gap-4">
              <motion.a whileHover={{ opacity: 0.8 }} href="https://www.linkedin.com/in/prashanth-thota-40abb2100/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</motion.a>
              <motion.a whileHover={{ opacity: 0.8 }} href="https://github.com/prashanththota09" target="_blank" rel="noopener noreferrer" className="underline">GitHub</motion.a>
              <motion.a whileHover={{ opacity: 0.8 }} href="https://x.com" target="_blank" className="underline">X</motion.a>
              <motion.a whileHover={{ opacity: 0.8 }} href="https://calendly.com" target="_blank" className="underline">Book a call</motion.a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}



