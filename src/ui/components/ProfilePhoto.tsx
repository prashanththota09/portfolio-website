import { useState } from 'react'

type Props = { className?: string; alt?: string }

export function ProfilePhoto({ className, alt = 'Profile photo' }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))]`} aria-label={alt} />
    )
  }
  return (
    <img
      src="/profile.jpeg"
      onError={() => setFailed(true)}
      alt={alt}
      loading="eager"
      decoding="async"
      className={className}
    />
  )
}


