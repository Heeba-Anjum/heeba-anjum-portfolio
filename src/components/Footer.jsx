import React from 'react'
import { profile } from '../data/resumeData.js'

export default function Footer() {
  return (
    <footer className="border-t border-paper-border dark:border-ink-border py-10">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mutedInk">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <div className="flex gap-6 font-mono text-xs">
          <a href={`mailto:${profile.email}`} className="hover:text-signal-blue dark:hover:text-signal-amber">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal-blue dark:hover:text-signal-amber">
            LinkedIn
          </a>
          <a href="#hero" className="hover:text-signal-blue dark:hover:text-signal-amber">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
