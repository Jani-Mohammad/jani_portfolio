// src/components/Footer.jsx
import { primaryLinks, externalLinks } from "../data/links.js";

export function Footer() {
  const links = [...primaryLinks, ...externalLinks];

  return (
    <footer className="footer">
      <nav className="footer-nav">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="footer-link"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="footer-copy">
        © {new Date().getFullYear()} Mohammad Mahaboob Jani
      </p>
    </footer>
  );
}