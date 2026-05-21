import PostCard from '@/components/PostCard'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'Blog — Bloom & Budget',
}

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-header-tag">✦ All articles</p>
        <h1>The Blog</h1>
      </div>
      <div className="section">
        <div className="posts-grid">
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </>
  )
}
