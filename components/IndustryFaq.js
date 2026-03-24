'use client'

import { useState } from 'react'

export default function IndustryFaq({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="ind-faq-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`ind-faq-item${openIndex === index ? ' open' : ''}`}
        >
          <button
            className="ind-faq-q"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="ind-faq-q-text">{item.question}</span>
            <span className="ind-faq-icon">+</span>
          </button>
          <div className="ind-faq-a">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
