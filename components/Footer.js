import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">Bloom<span>&amp;</span>Budget</Link>
      <ul className="footer-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
      </ul>
      <p className="footer-copy">© 2025 Bloom &amp; Budget · Made with ♥ and spreadsheets</p>
    </footer>
  )
}
