'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()

  const links = [
    { href: '/',        label: 'Home'    },
    { href: '/blog',    label: 'Blog'    },
    { href: '/about',   label: 'About'   },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
  ]

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        Bloom<span>&amp;</span>Budget
      </Link>
      <ul className="navbar-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={path === href ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
