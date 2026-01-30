import { motion } from "framer-motion";
import { profile } from "../data/profile";

const groupOrder = [
  { key: "cicd", label: "CI/CD" },
  { key: "containers", label: "Containers & Orchestration" },
  { key: "iac", label: "Infrastructure as Code" },
  { key: "cloud", label: "Cloud Platforms" },
  { key: "observability", label: "Observability & Monitoring" },
  { key: "reliability", label: "Reliability Engineering" },
  { key: "security", label: "Security & Controls" },
  { key: "scripting", label: "Scripting" },
  { key: "systems", label: "Operating Systems" },
  { key: "itsm", label: "ITSM & Collaboration" }
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {groupOrder.map(({ key, label }) => {
          const items = profile.skills[key] || [];
          return (
            <article key={key} className="card">
              <h3 className="skills-group-title">{label}</h3>
              <motion.ul
                className="chips"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
              >
                {items.map((s, i) => (
                  <motion.li
                    key={i}
                    className="chip chip-skill"
                    variants={{ hidden: { y: 8, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}