export function Experience() {
  const roles = [
    {
      title: 'Lead / Senior iOS Developer',
      company: 'Vivance Pte. Ltd.',
      period: 'Jul 2020 – Present',
      bullets: [
        'Led end‑to‑end development of healthcare & fitness apps',
        'Migrated to SwiftUI, improving load times by 35% and reducing crash rate',
        'Integrated Core Bluetooth for BLE medical devices with HIPAA/GDPR compliance',
        'Mentored 5+ engineers; raised code coverage to 90% with CI/CD automation',
      ],
    },
    {
      title: 'Senior iOS Developer',
      company: 'Pace Wisdom Solutions Pvt Ltd.',
      period: 'Oct 2018 – Jul 2020',
      bullets: [
        'Delivered 6 large‑scale iOS applications (100K+ downloads, 4.8★ ratings)',
        'Implemented BLE & MapKit for location‑aware features',
        'Established CI/CD pipelines with Jenkins/Fastlane cutting deployment time 50%'
      ],
    },
    {
      title: 'iOS Developer',
      company: 'Agathsya Technologies Pvt Ltd.',
      period: 'Mar 2018 – Sep 2018',
      bullets: [
        'Built secure healthcare & fintech apps using Swift and RESTful APIs',
        'Improved UI/UX collaboration, increasing retention by 25%'
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ol className="mt-8 relative">
          {roles.map((r) => (
            <li key={r.title} className="mb-8">
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{r.company}</p>
                  </div>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 rounded px-2 py-1">{r.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}



