export type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'AWAK Clinical Trials',
    description:
      'BLE‑enabled iOS app for dialysis device connectivity, collecting therapy logs and vitals with secure cloud sync; reduced manual trial reporting time by 40%.',
    tech: ['Swift', 'SwiftUI', 'Core Bluetooth', 'HealthKit', 'Combine', 'Fastlane'],
    image: 'awak-clinical-trials.png',
    links: [
      { label: 'Overview', href: 'https://prashanththota09.github.io/portfolio-website' },
    ],
  },
  {
    title: 'Viva Konnect',
    description:
      'Healthcare app for monitoring dialysis, logging patient vitals, scheduling teleconsultations, and integrating AI‑based chat to improve engagement by 25%.',
    tech: ['Swift', 'UIKit', 'HealthKit', 'RESTful APIs', 'Notifications'],
    image: 'viva-konnect.png',
    links: [
      { label: 'Overview', href: 'https://prashanththota09.github.io/portfolio-website' },
    ],
  },
  {
    title: 'Tindop',
    description:
      'Dating app with video profiles, real‑time chat, and AI‑driven match suggestions; improved retention via real‑time interactions and personalization.',
    tech: ['Swift', 'UIKit', 'RESTful APIs', 'WebSockets'],
    image: 'tindop.png',
    links: [
      { label: 'Overview', href: 'https://prashanththota09.github.io/portfolio-website' },
    ],
  },
]



