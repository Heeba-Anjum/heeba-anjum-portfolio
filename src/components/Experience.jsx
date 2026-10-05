import React from 'react'
import { experience } from '../data/resumeData.js'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="section-title mb-12">Where she's shipped</h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <article key={job.company} className="card p-7 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-signal-blue dark:text-signal-amber font-medium">{job.company}</p>
                </div>
                <div className="text-right font-mono text-xs text-mutedInk">
                  <p>{job.period}</p>
                  <p>{job.duration} · {job.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-mutedInk leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-signal-blue dark:bg-signal-amber shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {job.documents && job.documents.length > 0 ? (
                <div className="mt-6 pt-5 border-t border-paper-border dark:border-ink-border">
                  <p className="text-sm font-medium mb-1">Don't just take her word for it —</p>
                  <p className="text-xs text-mutedInk mb-4">
                    These documents are kept confidential; request access and it'll be granted promptly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {job.documents.map((doc) => {
                      return (
                        
                          <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium rounded-full border border-paper-border dark:border-ink-border px-4 py-2 hover:border-signal-blue dark:hover:border-signal-amber hover:text-signal-blue dark:hover:text-signal-amber transition-colors"
                        >
                          {'📄 ' + doc.label}
                        </a>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}