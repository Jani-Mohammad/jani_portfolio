import { motion } from "framer-motion";
import { profile } from "../data/profile";

const DEFAULT_GITHUB =
  "https://github.com/Jani-Mohammad"; // Change if you want a different default

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        {profile.projects.map((p, i) => {
          // If a project doesn’t have a specific link yet, point to your GitHub profile (or portfolio repo)
          const viewHref = p.link && p.link.trim().length > 0 ? p.link : DEFAULT_GITHUB;

          return (
            <motion.article
              key={i}
              className="card project"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <h3>{p.name}</h3>
              <p className="muted">{p.stack.join(" • ")}</p>
              <p>{p.description}</p>

              {/* Always render a View button */}
              <p>
                <a
                  className="btn sm"
                  href={viewHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.name} on GitHub`}
                  title={p.link ? "Open project" : "Open GitHub (add specific repo link later)"}
                >
                  View
                </a>
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}