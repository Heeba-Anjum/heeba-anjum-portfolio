import React from 'react'

export default function ResumeDownload() {
  return (
    <section id="resume" className="py-20 sm:py-28 border-t border-paper-border dark:border-ink-border">
      <div className="container-page">
        <div className="card p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Resume</p>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Prefer the full document?</h2>
            <p className="text-mutedInk max-w-md">
              Download the complete resume as a PDF for a printable, ATS-friendly copy.
            </p>
          </div>
          <a
            href="/resume/Heeba-Anjum-Hosur-Resume.pdf"
            download
            className="btn-primary whitespace-nowrap"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}
