import { Hero } from "./components/Hero.jsx";
import { Skills } from "./components/skills.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Certifications } from "./components/Certifications.jsx";
import { Contact } from "./components/Contact.jsx";

import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* Theme toggle at top-right */}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "flex-end", paddingTop: "12px" }}
      >
        <ThemeToggle />
      </div>

      <Hero />

      <main className="container">
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}