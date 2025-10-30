export function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <form className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
            <div className="grid gap-4">
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Name" />
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Email" type="email" />
              <textarea className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Message" rows={5} />
              <button type="submit" className="rounded-md bg-[rgb(var(--color-primary))] text-white px-4 py-2 w-max">Send</button>
            </div>
          </form>
          <div>
            <p className="text-slate-700 dark:text-slate-300">Email: <a className="underline" href="mailto:prashanthsep2@gmail.com">prashanthsep2@gmail.com</a></p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.linkedin.com/in/prashanth-thota-40abb2100/" target="_blank" className="underline">LinkedIn</a>
              <a href="https://github.com/prashanth-thota" target="_blank" className="underline">GitHub</a>
              <a href="https://x.com" target="_blank" className="underline">X</a>
              <a href="https://calendly.com" target="_blank" className="underline">Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



