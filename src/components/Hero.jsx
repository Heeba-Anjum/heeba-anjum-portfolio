import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/resumeData.js'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-signal-blue/20 dark:bg-signal-amber/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-signal-green/10 blur-3xl pointer-events-none" />

      <div className="container-page relative py-24 sm:py-32 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
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

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto md:mx-0 w-full max-w-xs"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-signal-blue/30 via-signal-amber/20 to-signal-green/20 blur-2xl scale-95" />
          <div className="relative rounded-[2rem] overflow-hidden border border-paper-border dark:border-ink-border shadow-2xl">
            <img
              src="/images/heeba-anjum.jpg"
              alt="Heeba Anjum Hosur, Product Manager"
              className="w-full h-auto object-cover aspect-[3/4]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink900/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 card px-4 py-2.5 shadow-lg">
            <p className="font-mono text-[11px] text-mutedInk">Currently</p>
            <p className="text-sm font-semibold">Junior PM @ Ultimez</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
