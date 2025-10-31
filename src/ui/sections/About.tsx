import { Reveal } from '../components/Reveal'
export function About() {
  return (
    <section id="about" className="py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
        <h2 className="text-2xl font-semibold">About</h2>
        </Reveal>
        <Reveal delay={0.05}>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          Senior / Lead iOS Developer (primary focus) with 8+ years delivering high‑performance healthcare and
          enterprise apps using Swift, SwiftUI, and Objective‑C. Expertise in BLE/IoT integrations, CI/CD automation,
          and secure data communication. I also have hands‑on Android experience (Kotlin, XML, Android Studio) for
          cross‑platform collaboration and feature parity. Proven record of improving reliability (−35% crashes) and
          engagement (+30%), mentoring teams, and leading the full lifecycle from architecture to App Store deployment.
        </p>
        </Reveal>
        <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Swift','SwiftUI','Objective‑C','UIKit','Combine','Core Data','Core Bluetooth','Core Motion',
            'Core Location','HealthKit','MapKit','RESTful APIs','BLE','IoT','MVVM','CI/CD (Jenkins, Fastlane)',
            'Kotlin (Android)','Android XML','Android Studio','Unit Testing','Code Review','Performance Optimization','App Store Deployment','Git'
          ].map((s) => (
            <span key={s} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm">{s}</span>
          ))}
        </div>
        </Reveal>
        <Reveal delay={0.15}>
        <div className="mt-8">
          <a href={`${import.meta.env.BASE_URL}Prashanth_Thota_Resume.pdf`} className="underline" download>
            Download résumé
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  )
}



