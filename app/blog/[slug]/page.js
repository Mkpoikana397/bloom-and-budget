import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <div className="page-header">
        <p className="page-header-tag">✦ {post.category}</p>
        <h1>{post.title}</h1>
      </div>
      <div className="section" style={{maxWidth: '720px'}}>
        <p style={{fontSize:'13px', color:'var(--text-light)', marginBottom:'2rem'}}>{post.date}</p>
        <div className={`post-img ${post.color}`} style={{height:'260px', borderRadius:'16px', marginBottom:'2rem', fontSize:'72px'}}>
          <span>{post.emoji}</span>
        </div>
        <p style={{fontSize:'16px', color:'var(--text-mid)', lineHeight:'1.8', marginBottom:'2rem', fontWeight:'300'}}>{post.excerpt}</p>
        <p style={{fontSize:'15px', color:'var(--text-mid)', lineHeight:'1.8', fontWeight:'300'}}>
          This is where your full blog post content goes. Use Claude to write the full post and paste it in the data/posts.js file by adding a content field to each post object.
        </p>
        <div style={{marginTop:'3rem'}}>
          <Link href="/blog" className="btn btn-outline">← Back to blog</Link>
        </div>
      </div>
    </>
  )
}
