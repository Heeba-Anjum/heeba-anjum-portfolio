import React from 'react'
import { projects } from '../data/resumeData.js'

function domainBadge(link) {
  if (!link) return null
  try {
    const host = new URL(link).hostname.replace('www.', '')
    if (host.includes('miro.com')) return 'Miro board'
    return host
  } catch {
    return null
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <p className="eyebrow mb-3">Case Study &amp; Side Projects</p>
        <h2 className="section-title mb-12">Product thinking, self-initiated</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => {
            const badge = domainBadge(p.link)
            const Wrapper = p.link ? 'a' : 'article'
            const wrapperProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <Wrapper
                key={p.title}
                {...wrapperProps}
                className={`card p-6 flex flex-col ${p.link ? 'hover:shadow-lg hover:-translate-y-0.5 transition-all' : ''}`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="chip w-fit">{p.tag}</span>
                  {badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-paper-border dark:border-ink-border text-mutedInk">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-mutedInk text-sm leading-relaxed flex-1">{p.description}</p>

                {p.docLink && (
                  <span
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(p.docLink, '_blank', 'noopener,noreferrer')
                    }}
                    className="text-xs underline text-signal-blue dark:text-signal-amber mt-2 inline-block cursor-pointer"
                  >
                    Click here to check how it works →
                  </span>
                )}

                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-paper-border dark:border-ink-border">
                  {(p.metrics || []).map((m) => (
                    <span key={m} className="font-mono text-[11px] text-signal-blue dark:text-signal-amber">
                      {m}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal-blue dark:text-signal-amber">
                    View <span aria-hidden="true">→</span>
                  </span>
                )}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}