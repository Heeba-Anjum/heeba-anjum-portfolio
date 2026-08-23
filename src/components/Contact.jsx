import React from 'react'
import { profile } from '../data/resumeData.js'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page text-center">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="section-title mb-4">Let's talk product</h2>
        <p className="text-mutedInk max-w-lg mx-auto mb-10">
          Open to Technical PM, Growth PM, and AI/Data PM roles in remote or hybrid setups.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="btn-secondary">
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {profile.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
