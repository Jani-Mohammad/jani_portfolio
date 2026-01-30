// src/components/Experience.jsx

import { useEffect, useRef, useState } from "react";

// --- Your experience data (2 roles) ---
const items = [
  {
    title: "Senior Software Engineer (SRE / DevOps) — Capgemini (Client: Carnival)",
    place: "Bangalore, IN",
    start: "Sep 2024",
    end: "Present",
    points: [
      "Owned reliability & availability across AWS/Azure; proactive incident detection via Prometheus/Grafana/CloudWatch/Azure Monitor",
      "Automated data transfers & backups across S3, EFS, Azure Disks, Blob, NFS; improved DR readiness",
      "Built/maintained CI/CD with Jenkins & GitHub Actions; IaC with Terraform/CloudFormation; toil reduction with Control-M & shell",
      "Linux tuning & hardening to improve stability/uptime",
    ],
  },
  {
    title: "Software Engineer — Capgemini (Client: Carnival)",
    start: "Dec 2022",
    end: "Sep 2024",
    points: [
      "SPOC for a 15-member testing team; manual/UAT on Docker & Kubernetes-based envs; tools: SonarQube, Selenium",
      "Worked on microservices-based dynamic pricing on EKS/ECS/Kubernetes",
      "Linux administration; Bash/Python automation; incident collaboration",
      "Delivered CI/CD with Jenkins & GitHub Actions; created test-ready K8s envs with Docker",
    ],
  },
];

// ✅ Named export to match: import { Experience } from "./components/Experience.jsx";
export function Experience() {
  // Scroll-based progress for the vertical timeline line (uses your .timeline-* CSS)
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // When the section approaches the viewport, start filling
      const start = Math.min(vh * 0.95, vh);
      const end = Math.max(rect.height * 0.05, 1);

      const visible = Math.min(Math.max(start - rect.top, 0), rect.height + start);
      const p = Math.min(Math.max(visible / (rect.height + start - end), 0), 1);
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Experience</h2>

      <div ref={containerRef} className="timeline">
        {/* Background track */}
        <div className="timeline-track" />

        {/* Scroll progress line */}
        <div
          className="timeline-progress"
          style={{ height: `${progress * 100}%` }}
        />

        <ul className="timeline-list">
          {items.map((item, index) => (
            <li key={index} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-row">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-time">
                    {item.start} — {item.end}
                  </span>
                </div>
                {item.place && <div className="timeline-place">{item.place}</div>}
                <ul className="timeline-points">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}