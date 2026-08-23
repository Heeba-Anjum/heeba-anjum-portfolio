import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-paper/80 dark:bg-ink/80 border-b border-paper-border dark:border-ink-border">
      <nav className="container-page flex items-center justify-between h-16" aria-label="Primary">
        <a href="#hero" className="font-mono text-sm font-medium tracking-tight">
          heeba<span className="text-signal-blue dark:text-signal-amber">.</span>pm
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal-blue dark:hover:text-signal-amber transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-paper-border dark:border-ink-border hover:border-signal-blue dark:hover:border-signal-amber transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-paper-border dark:border-ink-border"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden container-page pb-4">
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1.5">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
