import React from 'react'
import { skillGroups } from '../data/resumeData.js'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Skills &amp; Tools</p>
        <h2 className="section-title mb-12">What she reaches for</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="card p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide text-signal-blue dark:text-signal-amber mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
