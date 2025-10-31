import { Reveal } from '../components/Reveal'
export function Experience() {
  const roles = [
    {
      title: 'Lead / Senior iOS Developer',
      company: 'Vivance (formerly AWAK Technologies) • Bangalore',
      period: 'Jul 2020 – Present',
      about:
        'A healthcare technology company specializing in connected medical solutions.',
      bullets: [
        'Led end‑to‑end development of IoT‑enabled healthcare iOS apps integrating medical devices via secure Bluetooth with server‑side sync',
        'Architected SwiftUI migration, improving load times by 35% and reducing crash rate below industry average',
        'Built secure data communication modules achieving 100% synchronization and full HIPAA/GDPR compliance (+30% data accuracy)',
        'Delivered 10+ high‑impact features in collaboration with design/product, boosting engagement by 30%',
        'Mentored 5+ engineers and lifted code coverage to 90% while streamlining releases with CI/CD automation',
      ],
    },
    {
      title: 'Senior iOS Developer',
      company: 'Pace Wisdom Solutions • Bangalore',
      period: 'Oct 2018 – Jul 2020',
      about:
        'IT services company delivering enterprise and consumer mobile apps.',
      bullets: [
        'Engineered and shipped 6 large‑scale iOS apps (100K+ downloads, 4.8★ ratings)',
        'Implemented BLE + MapKit for real‑time item tracking (+40% tracking accuracy, −25% sync latency)',
        'Established CI/CD with Jenkins & Fastlane cutting deployment time by 50%',
        'Maintained 95% on‑time delivery through agile collaboration and efficient sprint management',
      ],
    },
    {
      title: 'iOS Developer',
      company: 'Agathsya Technologies • Bangalore',
      period: 'Mar 2018 – Sep 2018',
      about:
        'A technology startup offering mobile and web application solutions.',
      bullets: [
        'Built a scalable dating/social iOS app with real‑time chat using Swift and RESTful APIs',
        'Enhanced design collaboration, increasing user retention by 25%',
        'Delivered high‑quality releases 15% ahead of schedule, exceeding client satisfaction KPIs',
      ],
    },
    {
      title: 'iOS Software Engineer',
      company: 'Health5c Wellness Solutions • Bangalore',
      period: 'Apr 2017 – Mar 2018',
      about:
        'A company dedicated to health and wellness application development.',
      bullets: [
        'Built core modules for health & fitness tracking apps leveraging Core Motion and HealthKit APIs',
        'Optimized performance, reducing crash rate by 20% and improving HealthKit sync reliability by 30%',
        'Partnered with product teams to enhance features and improve user satisfaction by 15%',
      ],
    },
  ]

  return (
    <section id="experience" className="py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
        <h2 className="text-2xl font-semibold">Experience</h2>
        </Reveal>
        <ol className="mt-8 relative">
          {roles.map((r, idx) => (
            <li key={r.title} className="mb-8">
              <Reveal delay={idx * 0.05}>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{r.company}</p>
                    {('about' in r) && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{(r as any).about}</p>
                    )}
                  </div>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 rounded px-2 py-1">{r.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}



