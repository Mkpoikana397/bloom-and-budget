export const metadata = { title: 'Contact — Bloom & Budget' }

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-header-tag">✦ Say hello</p>
        <h1>Contact</h1>
      </div>
      <div className="section">
        <div className="contact-wrap">
          <p className="contact-intro">Have a question or collaboration idea? Fill out the form and I&apos;ll get back to you within 2 business days.</p>
          <div className="form-group"><label>Name</label><input type="text" placeholder="Your name" /></div>
          <div className="form-group"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
          <div className="form-group"><label>Subject</label><input type="text" placeholder="What's this about?" /></div>
          <div className="form-group"><label>Message</label><textarea placeholder="Tell me anything..." /></div>
          <button type="button" className="btn" style={{width:'100%'}}>Send message</button>
        </div>
      </div>
    </>
  )
}
