import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Certifications() {
  const certUrl =
    "https://github.com/Jani-Mohammad/my-learning-and-certification/tree/main/certifications/microsoft%20certifications";

  return (
    <section id="certs" className="section">
      <h2 className="section-title">Certifications</h2>

      <motion.ul
        className="chips"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        {profile.certifications.map((c, i) => (
          <motion.li
            key={i}
            className="chip chip-skill"
            variants={{
              hidden: { y: 8, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <a
              href={certUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {c}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="edu">
        <h3>Education</h3>
        <p>
          {profile.education.degree} — {profile.education.college} (CGPA{" "}
          {profile.education.cgpa})
        </p>
      </div>
    </section>
  );
}