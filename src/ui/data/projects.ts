export type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'HealthSync Pro',
    description:
      'HIPAA-ready healthcare app with BLE medical device sync, HealthKit integration, and SwiftUI architecture. Reduced crash rate below industry average.',
    tech: ['Swift', 'SwiftUI', 'Core Bluetooth', 'HealthKit', 'Combine', 'Fastlane'],
    image: '/screens/healthsync.png',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com' },
      { label: 'Case Study', href: 'https://example.com/healthsync' },
    ],
  },
  {
    title: 'FitTrack+',
    description:
      'Fitness tracking app leveraging Core Motion and GPS geofencing with background sync and offline-first persistence.',
    tech: ['Swift', 'UIKit', 'Core Motion', 'MapKit', 'Core Data'],
    image: '/screens/fittrack.png',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
  {
    title: 'SecurePay Lite',
    description:
      'Fintech client with end-to-end encryption, biometric auth, and performance optimizations cutting load time by 35%.',
    tech: ['Swift', 'UIKit', 'REST', 'Keychain', 'CI/CD'],
    image: '/screens/securepay.png',
    links: [
      { label: 'Case Study', href: 'https://example.com/securepay' },
    ],
  },
]



