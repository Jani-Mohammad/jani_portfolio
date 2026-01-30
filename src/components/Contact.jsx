import { profile } from '../data/profile'

export function Contact(){
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact">
        <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p><strong>LinkedIn:</strong> <a href={profile.links.linkedin} target="_blank" rel="noreferrer">View Profile</a></p>
        <p><strong>GitHub:</strong> <a href={profile.links.github} target="_blank" rel="noreferrer">Repo/Portfolio</a></p>
        <p><a className="btn" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Download Resume (PDF)</a></p>
        <p className="muted">Phone: {profile.phone}</p>
      </div>
    </section>
  )
}
