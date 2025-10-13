type Props = { className?: string }

export function Logo({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="PT logo">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="rgb(var(--color-primary))" />
          <stop offset="100%" stopColor="rgb(var(--color-accent))" />
        </linearGradient>
      </defs>
      <rect rx="12" width="64" height="64" fill="url(#g)" />
      <text x="18" y="40" fontSize="24" fontWeight="700" fill="white">PT</text>
    </svg>
  )
}



