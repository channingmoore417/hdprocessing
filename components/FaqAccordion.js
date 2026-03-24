'use client'

import { useState } from 'react'

export default function FaqAccordion({ items = [], variant = 'dark', heading, label }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`section ${variant}`}>
      <div className="section-inner">
        {label && <div className="section-label">{label}</div>}
        {heading && <h2>{heading}</h2>}
        <div className="faq-list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-a">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
