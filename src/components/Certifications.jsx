import React from 'react'
import { proficiencies } from '../data/resumeData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Certifications &amp; Tool Proficiency</p>
        <h2 className="section-title mb-4">Hands-on with the tools, not just the theory</h2>
        <p className="text-mutedInk mb-10 max-w-2xl">
          No formal certificates are listed on the resume — instead, direct working proficiency
          with the tools below, demonstrated on the job.
        </p>
        <div className="flex flex-wrap gap-3">
          {proficiencies.map((tool) => (
            <span key={tool} className="chip text-sm px-4 py-2">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
