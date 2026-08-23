import React from 'react'
import { education } from '../data/resumeData.js'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Education</p>
        <h2 className="section-title mb-12">Foundation</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {education.map((e) => (
            <div key={e.degree} className="card p-6">
              <p className="font-mono text-xs text-signal-blue dark:text-signal-amber mb-2">{e.year}</p>
              <h3 className="font-semibold mb-1">{e.degree}</h3>
              <p className="text-sm text-mutedInk">{e.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
