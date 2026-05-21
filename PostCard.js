import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <div className={`post-img ${post.color}`}>
        <span>{post.emoji}</span>
        <span className="post-tag">{post.category}</span>
      </div>
      <div className="post-body">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="post-meta">
          <span>{post.date}</span>
          <span className="read-more">Read more →</span>
        </div>
      </div>
    </Link>
  )
}
