export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          Senior iOS engineer with 8+ years designing, building, and leading teams to ship
          reliable, high‑performance apps. Expert in Swift, SwiftUI, Objective‑C, BLE, Core
          Location/Motion, HealthKit, MapKit, Combine, and modern CI/CD.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Swift','SwiftUI','Objective‑C','UIKit','Combine','Core Data','Core Bluetooth','Core Motion',
            'Core Location','HealthKit','MapKit','REST APIs','CI/CD (Fastlane, Jenkins)','Unit Testing','Git'
          ].map((s) => (
            <span key={s} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm">{s}</span>
          ))}
        </div>
        <div className="mt-8">
          <a href="/Prashanth_Thota_Resume.pdf" className="underline" download>
            Download résumé
          </a>
        </div>
      </div>
    </section>
  )
}



