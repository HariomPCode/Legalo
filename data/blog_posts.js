const BLOG_POSTS = [
  {
    id: "blog-001",

    slug: "ai-contract-analysis",

    title: "How AI is Transforming Contract Analysis",

    excerpt:
      "Artificial Intelligence is revolutionizing how legal teams analyze contracts, detect risks, and improve compliance workflows.",

    coverImage: "/blog/ai-contract-analysis.jpg",

    category: "Legal AI",

    tags: ["AI", "Contracts", "LegalTech"],

    author: {
      name: "Shiwanshu Pandey",
      avatar: "/authors/shiwanshu.jpg",
      role: "Founder, LegaloAI",
    },

    publishedAt: "2026-04-10",

    readingTime: "6 min read",

    featured: true,

    status: "published",

    seo: {
      metaTitle: "AI Contract Analysis | LegaloAI",
      metaDescription:
        "Learn how AI is transforming contract analysis and legal workflows.",
      keywords: ["AI contract review", "legal AI", "contract automation"],
    },

    content: [
      {
        type: "paragraph",
        text: "Legal teams traditionally spend hours reviewing contracts. AI can automate large parts of this process.",
      },

      {
        type: "heading",
        level: 2,
        text: "Why AI Matters in Legal Workflows",
      },

      {
        type: "paragraph",
        text: "Artificial intelligence can identify clauses, detect anomalies, and flag risks much faster than manual review.",
      },

      {
        type: "image",
        src: "/blog/contract-ai-diagram.png",
        alt: "AI contract analysis workflow",
      },

      {
        type: "list",
        items: [
          "Clause extraction",
          "Risk detection",
          "Compliance monitoring",
          "Automated summaries",
        ],
      },
    ],
  },

  {
    id: "blog-002",

    slug: "compliance-automation",

    title: "Compliance Automation for Modern Enterprises",

    excerpt:
      "Compliance automation tools help organizations stay audit-ready and reduce regulatory risks.",

    coverImage: "/blog/compliance-automation.jpg",

    category: "Compliance",

    tags: ["Compliance", "Automation"],

    author: {
      name: "LegaloAI Team",
      avatar: "/authors/team.jpg",
      role: "Editorial Team",
    },

    publishedAt: "2026-04-05",

    readingTime: "5 min read",

    featured: false,

    status: "published",

    seo: {
      metaTitle: "Compliance Automation Guide",
      metaDescription:
        "How enterprises automate compliance and reduce regulatory risk.",
      keywords: ["compliance automation", "legal compliance tools"],
    },

    content: [
      {
        type: "paragraph",
        text: "Compliance requirements continue to grow across industries.",
      },
    ],
  },
];

export default BLOG_POSTS;
