export function Skills() {
  const groups: Record<string, string[]> = {
    'Languages & Frameworks': ['Swift', 'SwiftUI', 'Objective‑C', 'UIKit', 'Combine'],
    'Platform & Services': ['Core Data', 'Core Bluetooth', 'Core Motion', 'Core Location', 'HealthKit', 'MapKit'],
    'Tooling': ['Git', 'Fastlane', 'Jenkins', 'Xcode', 'CI/CD', 'Unit Testing']
  }
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(groups).map(([name, items]) => (
            <div key={name} className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
              <h3 className="font-semibold">{name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



