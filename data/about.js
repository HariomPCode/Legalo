const About = {
  hero: {
    badge: "Integrated Site Safety & Compliance OS",
    tagline:
      "Designed for complex projects, strict audits, and real-time site control",
    title: "Turn safety observations into clear, accountable actions.",
    description:
      "Axiomos unifies Observations, Work Permits, Toolbox Talks, Inductions, and Incident Reporting into one API-first platform. Create a single source of truth for site safety, enforce SLAs with escalation, and close every loop with clear ownership and audit-ready records.",
    pills: [
      "Observations tracking with SLA & escalation",
      "End-to-end Work Permit lifecycle",
      "Induction & TBT evidence logs",
      "Incident & near-miss management",
      "Project & portfolio dashboards",
      "Contractor, subcontractor & labour registry",
      "Gatepass, trade & skill-wise labour tracking",
      "Inventory, tools, equipment & PPE control",
      "Digital inspections, checklists & safety reports",
      "Good practices, violations & corrective actions",
      "Meeting & Specific Meeting (TBT / HSE) records",
      "Risk rating engine aligned with your matrix",
      "Safety audit, safety budget & KPI monitoring",
      "Configurable formats, fields & form templates",
      "40+ secure APIs for users, roles, projects & mobile apps",
    ],
  },
  stats: [
    {
      value: "10+",
      label: "Safety modules connected",
      sub: "Observations, Work Permits, TBT, Inductions, Incidents & more",
    },
    {
      value: "72h",
      label: "Typical closure SLA",
      sub: "Configurable alert timelines with multi-level escalation",
    },
    {
      value: "99.9%",
      label: "Uptime objective",
      sub: "Cloud-native, hardened for critical site operations",
    },
    {
      value: "API-first",
      label: "Secure & extensible",
      sub: "Role-based access, full audit trails, and integrations",
    },
  ],
  primaryFeatures: [
    {
      title: "Observations that actually closes the loop",
      body: "Log observations in seconds, assign clear owners, and auto-calculate due dates using your risk model (for example, alertTimeline × escalationAlert.length). The system surfaces what’s overdue, what’s at risk, and who needs to act next.",
    },
    {
      title: "Work Permits without the paperwork",
      body: "Digitise the full permit lifecycle with project-wise context. Link hazards and controls, capture signatures and photos, and keep a searchable archive that’s always ready for internal audits and client reviews.",
    },
    {
      title: "Compliance, made visible",
      body: "Unify Inductions, Toolbox Talks, and Incident Reports into a single, connected record. Supervisors and HSE heads get a clear view of compliance status by project, contractor, and assignee — in real time.",
    },
  ],
  whyFeatures: [
    {
      title: "Built for real projects",
      body: "Project-wise views, offline-friendly forms, and exportable records keep sites moving — even when connectivity is patchy.",
    },
    {
      title: "SLA & escalation engine",
      body: "Define alert timelines and escalation chains; the system computes due times (for example: 12h × 4 steps = 48h) and keeps everyone accountable.",
    },
    {
      title: "Governance & auditability",
      body: "Immutable logs, role-based access, and consistent data models across modules make audits and compliance reviews straightforward.",
    },
    {
      title: "Fast to deploy",
      body: "API-first design, minimal training, and simple integrations into your existing stack — so you see value in weeks, not months.",
    },
  ],
  howItWorks: {
    title: "How it works",
    steps: [
      {
        label: "Capture",
        description:
          "Log a Observations, Work Permit, incident, or meeting directly from site (mobile-friendly, photo & file uploads). Every record is time-stamped and linked to the right project, location, and contractor.",
      },
      {
        label: "Classify",
        description:
          "Tag each entry by risk level, category, activity, and area. Your risk matrix and checklists standardise how teams report issues across all projects.",
      },
      {
        label: "Assign",
        description:
          "Set clear owners, due dates, and priorities using your SLA and escalation rules. The system can suggest responsible engineers, supervisors, or contractors based on project and risk profile.",
      },
      {
        label: "Collaborate",
        description:
          "Owners add comments, upload photos, and record interim actions. HSE and project teams stay aligned in one thread instead of scattered WhatsApp chats and spreadsheets.",
      },
      {
        label: "Track",
        description:
          "Live dashboards highlight oldest open items, overdue actions, and high-risk observations by project, contractor, and assignee. Filters and exportable views keep reviews and audits structured.",
      },
      {
        label: "Close",
        description:
          "Capture corrective and preventive actions, attach evidence, and complete digital sign-offs. Closure is locked with a full audit trail for internal audits, client reports, and regulatory inspections.",
      },
      {
        label: "Learn & Improve",
        description:
          "Use trends, recurring hazards, and closure performance to refine training, toolbox talks, and controls. Management sees which teams respond quickly, and where additional support is needed.",
      },
    ],
  },
  security: {
    title: "Security & Compliance",
    items: [
      "Role-based access control with least-privilege defaults",
      "Project, site, and contractor-level data segregation",
      "All traffic encrypted in transit (HTTPS/TLS)",
      "Granular activity logs and exportable audit reports",
      "Configurable approval workflows and digital sign-offs",
      "IP, device and environment-ready for enterprise hardening",
    ],
  },
  roadmap: {
    title: "Roadmap Highlights",
    items: [
      {
        label: "Q3",
        text: "Bulk actions on Observations & permits, advanced Excel/PDF exports, SLA & escalation analytics dashboards",
      },
      {
        label: "Q4",
        text: "Mobile app enhancements (offline mode, background sync), custom risk matrices per client, multi-project heatmaps",
      },
      {
        label: "Q4",
        text: "First CCTV integration: camera registry, snapshot ingestion, and manual tagging of unsafe acts linked to Observations",
      },
      {
        label: "H1",
        text: "AI-assisted CCTV: automatic detection of PPE non-compliance and zone intrusions, auto-creating observations with evidence",
      },
      {
        label: "H1",
        text: "Deeper integrations: HRIS & payroll (for staff/labour mapping), SSO (OAuth/SAML), and webhook automations for alerts",
      },
      {
        label: "H2",
        text: "Cross-module analytics: incident trends, contractor scorecards, closure performance, and risk hot-spot mapping",
      },
      {
        label: "H2",
        text: "Configuration studio: no-code form fields, checklists, and workflows so HSE teams can adapt the system without code changes",
      },
      {
        label: "Future",
        text: "Computer-vision labour ID & attendance PoC, linking face recognition events to site access, inductions, and Observations history",
      },
      {
        label: "Future",
        text: "Automated client & regulatory packs: scheduled PDF/Excel exports for monthly safety reviews, audits, and board reporting",
      },
    ],
  },
  cta: {
    title: "Ready to simplify safety & compliance?",
    description:
      "Get a guided demo or start a pilot on one site — we will help you migrate in under a week and align it to your existing processes.",
    primaryButtonLabel: "Request a demo",
    primaryButtonSubject: "Safety Platform Demo",
    secondaryButtonLabel: "View documentation",
    secondaryButtonHref: "#",
  },
};

export default About;
