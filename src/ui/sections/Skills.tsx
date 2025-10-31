import { Reveal } from '../components/Reveal'
export function Skills() {
  const groups: Record<string, string[]> = {
    'Primary • iOS (Languages & Frameworks)': ['Swift', 'SwiftUI', 'Objective‑C', 'UIKit', 'Combine', 'MVVM'],
    'iOS APIs & Services': ['Core Data', 'Core Bluetooth', 'Core Motion', 'Core Location', 'HealthKit', 'MapKit', 'GCD'],
    'Android (Secondary)': ['Kotlin', 'XML', 'Android Studio'],
    'Connectivity & Protocols': ['BLE', 'IoT', 'RESTful APIs'],
    'Tooling & DevOps': ['Git', 'Xcode', 'Jenkins', 'Fastlane', 'CI/CD', 'Unit Testing', 'Code Review', 'Performance Optimization', 'TestFlight'],
    'Collaboration': ['Agile/Scrum', 'Jira', 'GitHub']
  }
  return (
    <section id="skills" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
        <h2 className="text-2xl font-semibold">Skills</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(groups).map(([name, items], idx) => (
            <Reveal key={name} delay={idx * 0.05}>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
              <h3 className="font-semibold">{name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs">{i}</span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}



