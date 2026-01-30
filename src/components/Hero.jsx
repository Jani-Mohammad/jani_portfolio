import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { TechRing } from "./TechRing";
import { useSectionSpy } from "../hooks/useSectionSpy";

export function Hero() {
  const avatarSrc = import.meta.env.BASE_URL + "assets/profile.jpg";
  const resumeSrc = import.meta.env.BASE_URL + "assets/resume.pdf";

  // Observe sections for active-button highlight
  const activeId = useSectionSpy(["skills", "experience", "projects", "contact"]);
  const isActive = (id) => (activeId === id ? "active" : "");

  return (
    <header className="hero">
      {/* 3D background behind content */}
      <div className="hero-bg">
        <TechRing />
      </div>

      <div className="hero-inner container">
        <img className="avatar" src={avatarSrc} alt="Profile photo of Mohammad Mahaboob Jani" />

        <div className="hero-copy">
          <motion.h1
            className="title"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {profile.title} — {profile.location}
          </motion.p>

          <motion.p
            className="summary"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {profile.summary}
          </motion.p>

          {/* CTA row in your requested order */}
          <motion.div
            className="cta-row"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            role="navigation"
            aria-label="Section shortcuts"
          >
            <a className={`btn ${isActive("skills")}`} href="#skills">Skills</a>
            <a className={`btn ${isActive("experience")}`} href="#experience">Experience</a>
            <a className={`btn ${isActive("projects")}`} href="#projects">View Projects</a>
            <a className={`btn ${isActive("contact")}`} href="#contact">Contact</a>
            <a className="btn outline" href={resumeSrc} target="_blank" rel="noreferrer" aria-label="Download resume in PDF">
              Download Resume
            </a>
          </motion.div>

          <motion.ul
            className="social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
            <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </motion.ul>
        </div>
      </div>
    </header>
  );
}