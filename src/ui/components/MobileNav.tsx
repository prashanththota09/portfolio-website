import { useState } from 'react'

type Item = { id: string; label: string }

type Props = { items: Item[] }

export function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="rounded-md border border-slate-300 dark:border-slate-700 p-2"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="i-tabler-menu" />
        {/* simple three bars */}
        <div className="w-5 space-y-1">
          <div className="h-[2px] bg-current" />
          <div className="h-[2px] bg-current" />
          <div className="h-[2px] bg-current" />
        </div>
      </button>
      {open && (
        <div className="absolute left-0 right-0 mt-3 mx-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {items.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-[rgb(var(--color-primary))] px-3 py-2 text-white text-sm font-medium w-max">Contact</a>
          </nav>
        </div>
      )}
    </div>
  )}


