import { useEffect, useMemo, useState } from 'react'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { ProfilePhoto } from './components/ProfilePhoto'
import { ThemeToggle } from './components/ThemeToggle'
import { MobileNav } from './components/MobileNav'

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-[rgb(var(--color-primary))]/30">
              <ProfilePhoto className="h-full w-full object-cover object-[50%_30%]" alt="Prashanth Thota" />
            </span>
            <span className="font-semibold">Prashanth Thota</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-[rgb(var(--color-primary))]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <a href="#contact" className="hidden sm:inline-block rounded-md bg-[rgb(var(--color-primary))] px-3 py-2 text-white text-sm font-medium">
              Contact
            </a>
            <MobileNav items={navItems} />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}



