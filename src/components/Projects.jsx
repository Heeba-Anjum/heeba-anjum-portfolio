import React from 'react'
import { projects } from '../data/resumeData.js'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Case Study &amp; Side Projects</p>
        <h2 className="section-title mb-12">Product thinking, self-initiated</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card p-6 flex flex-col">
              <span className="chip w-fit mb-4">{p.tag}</span>
              <h3 className="text-lg font-semibold mb-3 leading-snug">{p.title}</h3>
              <p className="text-mutedInk text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-paper-border dark:border-ink-border">
                {p.metrics.map((m) => (
                  <span key={m} className="font-mono text-[11px] text-signal-blue dark:text-signal-amber">
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
