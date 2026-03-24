'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Sticky sidebar TOC for legal pages (Terms / Privacy).
 * Highlights the active section based on scroll position.
 *
 * @param {{ items: { id: string; label: string }[]; extraLinks?: { href: string; label: string }[] }} props
 */
export default function LegalToc({ items = [], extraLinks = [] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <aside className="legal-toc">
      <div className="legal-toc-title">On This Page</div>
      <nav className="legal-toc-links">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`legal-toc-link${activeId === item.id ? ' active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        {extraLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="legal-toc-link"
            style={{ marginTop: 12, color: 'var(--gold)', fontWeight: 500 }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
