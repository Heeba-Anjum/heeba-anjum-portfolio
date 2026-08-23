import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/resumeData.js'

// Signature element: a funnel visualization referencing her own
// "Google Analytics for Job Seekers" project (applications -> responses
// -> interviews -> offers), rendered as the hero's centerpiece.
const funnelStages = [
  { label: 'Applications', value: 100 },
  { label: 'Responses', value: 70 },
  { label: 'Interviews', value: 45 },
  { label: 'Offers', value: 22 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="container-page relative py-24 sm:py-32 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Product Manager · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-mutedInk max-w-xl"
          >
            Turns ambiguous user problems into shipped features — combining hands-on
            technical fluency with a research-first approach to roadmap decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {profile.exploring.map((role) => (
              <span key={role} className="chip">
                Exploring: {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a href="#resume" className="btn-secondary">
              Download resume
            </a>
          </motion.div>
        </div>

        {/* Funnel signature visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card p-6"
          aria-label="Illustrative funnel referencing personal job-search analytics project"
        >
          <p className="eyebrow mb-4">Job-search funnel · personal project</p>
          <div className="flex flex-col gap-3">
            {funnelStages.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs font-mono text-mutedInk mb-1">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-paper dark:bg-ink border border-paper-border dark:border-ink-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.value}%` }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: 'easeOut' }}
                    className={`h-full ${
                      i % 2 === 0 ? 'bg-signal-blue' : 'bg-signal-amber'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-mutedInk">
            Modeled after her "Google Analytics for Job Seekers" project — tracking
            applications through offers to identify the highest-converting channels.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
