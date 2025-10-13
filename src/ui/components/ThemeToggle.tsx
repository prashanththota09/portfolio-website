import { FaMoon, FaSun } from 'react-icons/fa6'

type Props = { theme: 'light' | 'dark'; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}



