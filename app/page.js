import PostCard from '@/components/PostCard'
import { posts } from '@/data/posts'

export default function Home() {
  const featured = posts.slice(0, 3)
  return (
    <>
      <section className="hero">
        <p className="hero-tag">✦ Financial freedom for every woman</p>
        <h1>Take control of your <em>money</em> and build the life you love</h1>
        <p>Practical tips on budgeting, saving, side hustles, and making money work for you.</p>
        <a href="/blog" className="btn">Read the blog</a>
      </section>
      <div className="strip">
        <div className="strip-inner">
          {['Budgeting tips','Saving strategies','Side hustles','Passive income','Debt payoff','Investing basics'].map(t => (
            <div key={t} className="strip-item"><span className="strip-dot" />{t}</div>
          ))}
        </div>
      </div>
      <div className="section">
        <p className="section-label">Latest Posts</p>
        <p className="section-title">Fresh from the blog</p>
        <div className="posts-grid">
          {featured.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
      <div className="newsletter-bar">
        <h3>Get weekly money tips</h3>
        <p>Free budgeting worksheets, savings challenges, and side hustle ideas — straight to your inbox.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="your@email.com" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </>
  )
}
