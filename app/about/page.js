export const metadata = { title: 'About — Bloom & Budget' }

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-header-tag">✦ The story behind the blog</p>
        <h1>About Me</h1>
      </div>
      <div className="section">
        <div className="about-grid">
          <div className="about-avatar">🌿</div>
          <div className="about-content">
            <h2>Hi, I&apos;m <em>Sarah</em> — your money bestie.</h2>
            <p>A few years ago, I was drowning in debt, living paycheck to paycheck, and had no idea where my money was going. Sound familiar?</p>
            <p>I started this blog to document my journey — and quickly realized I wasn&apos;t alone. Today, I help thousands of women take control of their finances, one practical tip at a time.</p>
            <p>Financial freedom isn&apos;t about deprivation. It&apos;s about building a life you love, with money that works for you.</p>
            <div className="values-grid">
              <div className="value-card"><h4>📌 Honesty first</h4><p>Real numbers, real struggles, real wins.</p></div>
              <div className="value-card"><h4>🎯 Practical tips</h4><p>Advice you can act on today, not someday.</p></div>
              <div className="value-card"><h4>💚 No judgment</h4><p>We all start somewhere. You&apos;re in the right place.</p></div>
              <div className="value-card"><h4>✨ Celebrate wins</h4><p>Every dollar saved is worth celebrating.</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
