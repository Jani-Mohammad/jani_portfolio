export const profile = {
  name: "Mohammad Mahaboob Jani",
  title: "Senior Software Engineer — SRE / DevOps",
  location: "Bangalore, India",
  email: "Janimohammed29@gmail.com",
  phone: "+91 9014266797",
  links: {
    linkedin: "https://www.linkedin.com/in/mohammad-mahaboob-jani-272455226/",
    github: "https://github.com/Jani-Mohammad/my-learning-and-certification.git"
  },
  summary: `Site Reliability Engineer (3+ years, Capgemini) focused on building and operating reliable cloud-native systems across AWS and Azure. Strengths: service reliability, automation, observability, incident management, and IaC. Experienced with SLIs/SLOs, monitoring, and CI/CD-driven operations.`,
  skills: {
    reliability: ["SLIs/SLOs", "Error Budgets", "Incident Response", "RCA", "Toil Reduction", "Capacity Planning", "HA"],
    cloud: ["AWS (EC2, S3, IAM, EKS, ECS, CloudWatch)", "Azure (VMs, Blob, Disks, AAD, Monitor)"],
    containers: ["Docker", "Kubernetes", "EKS", "ECS", "Persistent Volumes"],
    cicd: ["Git", "GitHub Actions", "Jenkins", "Control-M", "cron"],
    iac: ["Terraform", "CloudFormation"],
    observability: ["Prometheus", "Grafana", "ELK", "CloudWatch", "Azure Monitor"],
    scripting: ["Bash", "Python", "YAML"],
    security: ["IAM", "DevSecOps", "SonarQube", "GitHub/K8s Secrets"],
    systems: ["Linux (Ubuntu, CentOS, RHEL, Amazon Linux)"],
    itsm: ["ServiceNow", "Slack"]
  },
  experience: [
    {
      company: "Capgemini India Pvt. Ltd.",
      role: "Senior Software Engineer (SRE/DevOps) — Client: Carnival (PCL, HAL)",
      period: "Sep 2024 – Present",
      bullets: [
        "Owned reliability/availability for production workloads across AWS & Azure.",
        "Automated and monitored data transfers/backups across S3, EFS, Azure Disks, Blob, and NFS.",
        "Built/maintained CI/CD (Jenkins, GitHub Actions) for safe, consistent releases.",
        "Standardized environments via IaC (Terraform, CloudFormation).",
        "Improved detection/MTTR via Prometheus, Grafana, CloudWatch, Azure Monitor.",
        "Reduced toil via Control-M + shell automation; performed Linux tuning and hardening."
      ]
    },
    {
      company: "Capgemini (Indirect) — Client: Carnival (PCL)",
      role: "Software Engineer",
      period: "Dec 2022 – Sep 2024",
      bullets: [
        "SPOC for 15-member Testing team; manual & UAT testing replicating client envs with Docker/K8s.",
        "Worked on dynamic pricing microservices across EKS/ECS and Kubernetes.",
        "Linux admin (user mgmt, patching) and automation with Bash/Python.",
        "Collaborated cross-functionally to resolve incidents and uplift reliability."
      ]
    }
  ],
  achievements: [
    "Automated 100+ servers (Bash/Python) — reduced operational workload by ~60%.",
    "Automated S3 and backups — improved data retention compliance.",
    "Designed end-to-end CI/CD (Jenkins & GitHub Actions) — lowered lead time & failures.",
    "Built test-ready K8s envs via Docker — cut test cycles by ~30%."
  ],
  projects: [
    {
      name: "Reusable CI/CD Platform",
      stack: ["GitHub Actions", "Jenkins", "Docker", "SonarQube"],
      description: "Reusable workflows, environment gates, artifact versioning; SonarQube quality gates; caching & parallelism.",
      link: "https://github.com/Jani-Mohammad/my-learning-and-certification.git"
    },
    {
      name: "Kubernetes Microservices (EKS/ECS)",
      stack: ["Kubernetes", "EKS", "ECS", "Helm"],
      description: "Microservice deployments with health probes, rollout strategies, and centralized logging/metrics."
    },
    {
      name: "Infra as Code Modules",
      stack: ["Terraform", "CloudFormation", "Azure", "AWS"],
      description: "Standard IaC modules for VPC/VNet, compute, managed storage with remote state and workspaces."
    },
    {
      name: "Ops Automation & Scheduling",
      stack: ["Control-M", "Bash", "Python", "ServiceNow", "Slack"],
      description: "Automated batch flows with approvals, notifications, and retry logic integrated with ITSM and chatops."
    }
  ],
  certifications: [
    "AZ-104 Azure Administrator",
    "AI-900 Azure AI Fundamentals",
    "AZ-900 Azure Fundamentals",
    "AZ-204 Azure Developer Associate",
    "AWS Certified Cloud Practitioner (CLF-C02)",
    "GitHub Foundations (GH-900)",
    "GitHub Actions (GH-200)",
    "RHCSA"
  ],
  awards: [
    "Top Performer (Capgemini training, Dec 2022 – Mar 2023)",
    "Winner, Innovative Premier League (Mar 2024)",
    "Winner, Guardians of Privacy Quiz Challenge (Feb 2025)"
  ],
  education: {
    degree: "B.Tech, Electronics & Communication Engineering",
    college: "BVC College of Engineering, Andhra Pradesh",
    cgpa: "8.44"
  }
};
