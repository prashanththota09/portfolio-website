export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          Senior / Lead iOS Developer with 8+ years delivering high‑performance healthcare and
          enterprise applications using Swift, SwiftUI, and Objective‑C. Expertise in BLE/IoT integrations,
          CI/CD automation, and secure data communication. Proven record of improving app reliability
          (−35% crashes) and enhancing engagement (+30%). Adept at mentoring teams and leading the full
          lifecycle from architecture to App Store deployment.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Swift','SwiftUI','Objective‑C','UIKit','Combine','Core Data','Core Bluetooth','Core Motion',
            'Core Location','HealthKit','MapKit','RESTful APIs','BLE','IoT','MVVM','CI/CD (Jenkins, Fastlane)',
            'Unit Testing','Code Review','Performance Optimization','App Store Deployment','Git'
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



