import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '/',        label: 'Home'           },
    { href: '/blog',    label: 'Blog'           },
    { href: '/about',   label: 'About'          },
    { href: '/contact', label: 'Contact'        },
    { href: '/privacy', label: 'Privacy Policy' },
  ]

  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">
        Bloom<span>&amp;</span>Budget
      </Link>
      <ul className="footer-links">
        {links.map(({ href, label }) => (
          <li key={href}><Link href={href}>{label}</Link></li>
        ))}
      </ul>
      <p className="footer-copy">© 2025 Bloom &amp; Budget · Made with ♥ and spreadsheets</p>
    </footer>
  )
}
