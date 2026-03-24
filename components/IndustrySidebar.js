'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function IndustrySidebar({ category, categoryLabel, currentSlug, items }) {
  const pathname = usePathname()

  return (
    <nav className="industry-sidebar" aria-label={`${categoryLabel} navigation`}>
      <Link href={`/industries/${category}`} className="industry-sidebar-back">
        &larr; Back to {categoryLabel}
      </Link>

      <div className="industry-sidebar-label">{categoryLabel}</div>

      <ul className="industry-sidebar-links">
        {items.map((item) => {
          const href = `/industries/${category}/${item.slug}`
          const isActive =
            currentSlug === item.slug || pathname === href

          return (
            <li key={item.slug}>
              <Link
                href={href}
                className={`industry-sidebar-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
