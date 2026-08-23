import React from 'react'
import { profile } from '../data/resumeData.js'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page grid md:grid-cols-[0.35fr_0.65fr] gap-10">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-title">Product sense, backed by technical fluency</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-mutedInk">{profile.summary}</p>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="card p-5">
              <p className="font-mono text-xs text-mutedInk">Location</p>
              <p className="mt-1 font-medium">{profile.location}</p>
            </div>
            <div className="card p-5">
              <p className="font-mono text-xs text-mutedInk">Current focus</p>
              <p className="mt-1 font-medium">Technical, Growth &amp; AI/Data PM</p>
            </div>
            <div className="card p-5">
              <p className="font-mono text-xs text-mutedInk">Setup</p>
              <p className="mt-1 font-medium">Remote / Hybrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
