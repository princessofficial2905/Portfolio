const assetScanSummary = {
  scannedOn: "2026-05-06",
  localAssetsDetectedBeforeBuild: 0,
  repositoryStatus: "Fresh folder; not a Git repository at scan time.",
  notes: [
    "No existing certificates, writings, PDFs, images, HTML project files, or design assets were found before this portfolio was created.",
    "Placeholder cards are intentionally marked so they can be replaced with real files later.",
    "External platforms may block automated previews, so all important public links are preserved as direct link cards."
  ],
  externalChecks: [
    {
      title: "GitHub Pages Writings",
      url: "https://princessofficial2905.github.io/Writings/",
      status: "HTTP 404 during automated check; keep link and update after deployment or path fix."
    },
    {
      title: "Behance",
      url: "https://www.behance.net/princess2905",
      status: "HTTP 400 during automated preview check; direct visitor link retained."
    },
    {
      title: "Salesforce Trailhead",
      url: "https://www.salesforce.com/trailblazer/princessadmin",
      status: "HTTP 500 during automated preview check; direct visitor link retained."
    },
    {
      title: "GitHub Pages Root",
      url: "https://princessofficial2905.github.io/Portfolio/",
      status: "Project Pages URL; should work after publishing the Portfolio repository."
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/princess2905",
      status: "HTTP 999 automated access blocked by LinkedIn; direct visitor link retained."
    }
  ]
};

const certificates = [
  {
    title: "Salesforce Trailhead - 227+ Badges | Double Star Ranger",
    category: "Salesforce",
    description: "Public Trailhead achievement profile for Salesforce learning, admin workflows, CRM concepts, and continued skill-building.",
    image: "assets/images/cover-cert-salesforce.svg",
    file: "",
    link: "https://www.salesforce.com/trailblazer/princessadmin",
    tools: ["Trailhead", "Salesforce", "CRM"],
    tags: ["Salesforce", "Credential", "Learning"],
    status: "Public Trailhead profile linked.",
    buttonText: "View Trailhead"
  },
  {
    title: "Python: Beyond the Basics",
    category: "Programming",
    description: "Learning credential connected to Python fundamentals, programming confidence, and technical workflow building.",
    image: "assets/images/cover-cert-python.svg",
    file: "",
    link: "",
    tools: ["Python"],
    tags: ["Certificate", "Programming"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Excel Training",
    category: "Data & Productivity",
    description: "Spreadsheet learning signal connected to reporting, data cleaning, Excel analysis, and operations workflows.",
    image: "assets/images/cover-cert-excel.svg",
    file: "",
    link: "",
    tools: ["Excel", "Data Analysis"],
    tags: ["Certificate", "Excel"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Emotional Intelligence in the Workplace",
    category: "Professional Skills",
    description: "Professional learning signal connected to workplace communication, collaboration, empathy, and team readiness.",
    image: "assets/images/cover-cert-emotional.svg",
    file: "",
    link: "",
    tools: ["Communication", "Workplace Skills"],
    tags: ["Certificate", "Professional Skills"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Fundraising Internship",
    category: "Nonprofit",
    description: "Fundraising learning and internship signal connected to crowdfunding, donor communication, campaign support, and NGO operations exposure.",
    image: "assets/images/cover-cert-fundraising.svg",
    file: "",
    link: "",
    tools: ["Fundraising", "Outreach"],
    tags: ["Certificate", "NGO"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Explore Engineering Job Simulation",
    category: "Engineering",
    description: "Engineering career-readiness learning connected to simulation thinking, technical exposure, and project communication.",
    image: "assets/images/cover-cert-engineering-job.svg",
    file: "",
    link: "",
    tools: ["Engineering", "Simulation"],
    tags: ["Certificate", "Engineering"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Lean Six Sigma & Quality Management",
    category: "Quality",
    description: "Quality-management learning signal connected to process improvement, structured problem solving, and QA-adjacent thinking.",
    image: "assets/images/cover-cert-quality.svg",
    file: "",
    link: "",
    tools: ["Quality", "Process Improvement"],
    tags: ["Certificate", "Quality"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Business Analysis & Process Improvement",
    category: "Business Analysis",
    description: "Business-analysis learning signal connected to process mapping, requirement thinking, and operational improvement.",
    image: "assets/images/cover-cert-business-analysis.svg",
    file: "",
    link: "",
    tools: ["Business Analysis", "Process Mapping"],
    tags: ["Certificate", "Business Analysis"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  },
  {
    title: "Digital Marketing & SEO",
    category: "Content Operations",
    description: "Digital marketing and SEO learning connected to content systems, search visibility, online publishing, and portfolio growth.",
    image: "assets/images/cover-cert-marketing-seo.svg",
    file: "",
    link: "",
    tools: ["SEO", "Content"],
    tags: ["Certificate", "Marketing"],
    status: "Certificate file can be attached later.",
    buttonText: "View Credential"
  }
];

const writings = [
  {
    title: "Blog Collection",
    category: "Blogs",
    description: "Blog writing, personal writing, and editorial pages linked through the writing portfolio.",
    image: "assets/images/cover-writing-collection.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["Writing", "Editorial", "GitHub Pages"],
    tags: ["Writing", "Content", "Editorial"],
    status: "Writing hub linked for visitors.",
    buttonText: "Read Writings"
  },
  {
    title: "Blog Writing",
    category: "Blogs",
    description: "Blog pages, article drafts, HTML editorial pages, and portfolio writing samples collected into a writing showcase.",
    image: "assets/images/cover-writing-blog.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["HTML", "CSS", "Medium", "GitHub Pages"],
    tags: ["Writing", "Blog", "HTML"],
    status: "Writing hub linked for visitors.",
    buttonText: "Open Blog"
  },
  {
    title: "Instagram Carousel & Content Concepts",
    category: "Content Writing",
    description: "Carousel scripts, hooks, captions, quotes, post formats, and visual content concepts.",
    image: "assets/images/cover-writing-carousel.svg",
    file: "",
    link: "",
    tools: ["Canva", "ChatGPT", "Claude", "Gemini"],
    tags: ["Content", "Creative", "Social Media"],
    status: "Portfolio content system; add direct sample links when ready.",
    buttonText: "Open"
  }
];

const designs = [
  {
    title: "Behance Logo & Branding Portfolio",
    category: "Branding",
    description: "Direct Behance portfolio link for visual design, logo, branding, and creative presentation work.",
    image: "assets/images/cover-design-branding.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Behance", "Canva", "Visual Direction"],
    tags: ["Design", "Branding", "Behance"],
    status: "Public Behance profile linked.",
    buttonText: "Open Behance"
  },
  {
    title: "Logo Design Concepts",
    category: "Logo Design",
    description: "Logo design concepts, branding boards, marks, color explorations, and visual identity systems linked through Behance.",
    image: "assets/images/cover-design-logo.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Canva", "Branding", "Design"],
    tags: ["Design", "Logo"],
    status: "Behance portfolio linked for visitors.",
    buttonText: "View Design"
  },
  {
    title: "Visual Portfolio & Presentation Boards",
    category: "Visual Design",
    description: "Portfolio boards, thumbnails, documentation covers, social post visuals, and visual design systems linked through Behance.",
    image: "assets/images/cover-design-boards.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Canva", "Behance", "Layout"],
    tags: ["Design", "Portfolio"],
    status: "Behance portfolio linked for visitors.",
    buttonText: "Open Behance"
  }
];

const projects = [
  {
    title: "AI Scene & Object Image Dataset Project",
    category: "AI Data",
    description: "Self-directed image dataset workflow using base scenes, isolated objects, final scene references, visual QA, and metadata-style notes.",
    image: "assets/images/cover-ai.svg",
    file: "",
    link: "#proof-library",
    tools: ["AI Data", "Visual QA", "Metadata", "Google Drive"],
    tags: ["AI Data", "Documentation"],
    status: "Self-directed AI data portfolio project.",
    buttonText: "Open"
  },
  {
    title: "Personal Trading Assistant Bot",
    category: "Automation Bot",
    description: "Personal automation workflow for intraday scanning, breakout filters, risk-reward calculations, ranked candidates, reports, and email-alert concepts.",
    image: "assets/images/cover-trading.svg",
    file: "",
    link: "#proof-library",
    tools: ["Python", "Codex", "PowerShell", "CSV/Excel"],
    tags: ["Automation", "Python"],
    status: "Personal workflow; not financial advice or a commercial trading product.",
    buttonText: "Open"
  },
  {
    title: "NGO Operations Documentation System",
    category: "Documentation System",
    description: "Client-ready operations helpkit concept for governance, HR, volunteers, fundraising, grants, compliance, impact reporting, and risk management.",
    image: "assets/images/cover-ngo.svg",
    file: "",
    link: "#proof-library",
    tools: ["MS Word", "Google Docs", "ChatGPT", "Claude"],
    tags: ["Documentation", "NGO"],
    status: "Self-directed documentation system.",
    buttonText: "Open"
  },
  {
    title: "Advocate Documentation Support Pack",
    category: "Documentation System",
    description: "Legal-admin documentation concept for intake, client communication, hearing notes, matter tracking, checklists, and responsible-use templates.",
    image: "assets/images/cover-advocate.svg",
    file: "",
    link: "#proof-library",
    tools: ["MS Word", "PDF", "Checklist Design"],
    tags: ["Documentation", "Legal Admin"],
    status: "Administrative support pack; not legal advice.",
    buttonText: "Open"
  },
  {
    title: "Freelancer Operations Toolkit",
    category: "Content System",
    description: "Practical service operations toolkit for onboarding, pricing, proposals, delivery checklists, revision tracking, invoicing, and lead research.",
    image: "assets/images/cover-freelancer.svg",
    file: "",
    link: "#proof-library",
    tools: ["Google Sheets", "Prospeo", "Apollo", "Reoon"],
    tags: ["Content", "Lead Generation"],
    status: "Client-ready toolkit concept documented as a portfolio project.",
    buttonText: "Open"
  },
  {
    title: "Creator Content Planning Toolkit",
    category: "Content System",
    description: "Content workflow for carousels, captions, scripts, essays, blog outlines, hooks, calendars, and repurposing.",
    image: "assets/images/cover-creator.svg",
    file: "",
    link: "#proof-library",
    tools: ["Canva", "Medium", "GitHub Pages", "AI Writing"],
    tags: ["Content", "Writing"],
    status: "Portfolio content system.",
    buttonText: "Open"
  },
  {
    title: "Smart Home Automation using NodeMCU",
    category: "Engineering",
    description: "IoT automation prototype using NodeMCU ESP8266, relay circuits, Wi-Fi setup, Sinric Pro API, Alexa, and Google Assistant.",
    image: "assets/images/cover-iot.svg",
    file: "",
    link: "#proof-library",
    tools: ["NodeMCU", "Arduino IDE", "Sinric Pro", "Alexa"],
    tags: ["Engineering", "Automation"],
    status: "Academic and portfolio engineering project.",
    buttonText: "Open"
  },
  {
    title: "VR Emergency Landing Simulation",
    category: "Engineering Simulation",
    description: "AR/VR simulation concept around emergency airplane landing and parachute deployment using Unity, WebVR, and A-Frame.",
    image: "assets/images/cover-vr.svg",
    file: "",
    link: "#proof-library",
    tools: ["Unity", "A-Frame", "WebVR"],
    tags: ["Engineering", "Simulation"],
    status: "Internship and portfolio simulation exposure.",
    buttonText: "Open"
  },
  {
    title: "Hybrid Composite Materials Research",
    category: "Engineering",
    description: "Academic research-oriented work connecting mechanical analysis, material behavior, CAD/CAE thinking, and technical documentation.",
    image: "assets/images/cover-composite.svg",
    file: "",
    link: "#proof-library",
    tools: ["Research", "CAD/CAE", "Technical Documentation"],
    tags: ["Engineering", "Research"],
    status: "Academic research-oriented project.",
    buttonText: "Open"
  }
];

const tools = [
  {
    category: "AI Research & Writing",
    note: "Tools I have used, explored, or built workflows around.",
    items: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity", "Microsoft Copilot", "Notion AI"]
  },
  {
    category: "AI Coding & Development",
    note: "Used for code understanding, project iteration, GitHub workflows, and portfolio development.",
    items: ["Codex", "GitHub Copilot", "Replit", "VS Code", "GitHub", "GitHub Pages"]
  },
  {
    category: "AI Design & Creative",
    note: "Used or explored for visual systems, portfolio presentation, and creative workflow support.",
    items: ["Canva", "Adobe Firefly", "Behance", "Medium", "Gamma", "Ideogram", "Leonardo AI"]
  },
  {
    category: "QA, Security & Bug Review",
    note: "Used, explored, or researched for testing, issue review, and safer technical workflows.",
    items: ["Tester Work", "GitHub Issues", "Pull Requests", "Bug Bounty Platforms", "Algora-style Bounties", "VirusTotal", "Postman Basic", "Selenium Basic", "Jira"]
  },
  {
    category: "Lead Generation & Outreach",
    note: "Used or explored for buyer research, manual lead checks, and outreach workflow planning.",
    items: ["LinkedIn Search", "Apollo", "Prospeo", "Reoon Email Verifier", "Google Sheets", "Gmail", "Email Outreach", "Cold Email Research"]
  },
  {
    category: "Documentation & Productivity",
    note: "Used for documentation systems, process maps, templates, notes, and content operations.",
    items: ["MS Word", "Google Docs", "Google Drive", "Google Sheets", "Excel", "Loom", "Notion", "PDF Tools", "Canva Docs"]
  },
  {
    category: "Salesforce & CRM",
    note: "Used or learned across internship work, Trailhead, CRM data governance, reporting, and admin workflows.",
    items: ["Salesforce Lightning", "Trailhead", "SOQL", "Data Loader", "Reports & Dashboards", "Process Builder", "Workflow Rules", "Validation Rules"]
  },
  {
    category: "Engineering & Simulation",
    note: "Used across academic, internship, IoT, AR/VR, and mechanical simulation contexts.",
    items: ["Unity", "A-Frame", "WebVR", "Arduino IDE", "NodeMCU ESP8266", "Sinric Pro API", "Creo", "SolidWorks", "Ansys APDL"]
  }
];

const featuredLinks = [
  {
    title: "LinkedIn Profile",
    category: "Professional Profile",
    description: "Career profile, professional networking, and role-facing identity.",
    image: "",
    file: "",
    link: "https://www.linkedin.com/in/princess2905",
    tools: ["LinkedIn"],
    tags: ["Profile"],
    status: "Automated preview blocked; direct link retained.",
    buttonText: "Open LinkedIn",
    icon: "in"
  },
  {
    title: "Behance Portfolio",
    category: "Creative Portfolio",
    description: "Visual design, branding, creative projects, and portfolio boards.",
    image: "",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Behance"],
    tags: ["Design"],
    status: "Public Behance profile linked.",
    buttonText: "Open Behance",
    icon: "Be"
  },
  {
    title: "Blog / Writings Website",
    category: "Writing",
    description: "Writing portfolio and editorial pages. Update the link if the GitHub Pages path changes.",
    image: "",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["GitHub Pages", "Writing"],
    tags: ["Writing"],
    status: "Writing portfolio link retained for visitors.",
    buttonText: "Read Writings",
    icon: "Wr"
  },
  {
    title: "Salesforce Trailhead Profile",
    category: "Salesforce",
    description: "Salesforce learning profile with badges and Double Star Ranger achievement.",
    image: "",
    file: "",
    link: "https://www.salesforce.com/trailblazer/princessadmin",
    tools: ["Trailhead"],
    tags: ["Salesforce"],
    status: "Automated preview returned server error; direct link retained.",
    buttonText: "View Trailhead",
    icon: "SF"
  },
  {
    title: "GitHub Profile",
    category: "Code Profile",
    description: "GitHub account for repositories, project pages, and technical work.",
    image: "",
    file: "",
    link: "https://github.com/princessofficial2905",
    tools: ["GitHub"],
    tags: ["Profile"],
    status: "Public GitHub profile linked.",
    buttonText: "Open GitHub",
    icon: "GH"
  }
];

const proofLibrary = [
  ...certificates.map((item) => ({ ...item, libraryType: "Certificates" })),
  ...writings.map((item) => ({ ...item, libraryType: "Writings" })),
  ...designs.map((item) => ({ ...item, libraryType: "Designs" })),
  ...projects.map((item) => ({ ...item, libraryType: item.category })),
  {
    title: "Tester Work Platform-Based QA Experience",
    category: "QA Testing",
    description: "Manual, exploratory, usability, functional, regression, cross-browser, and cross-device testing experience with structured bug reports and evidence.",
    image: "assets/images/cover-qa.svg",
    file: "",
    link: "",
    tools: ["Manual Testing", "Bug Reporting", "Regression Testing"],
    tags: ["QA Testing", "Platform Testing"],
    status: "Platform-based testing experience summary.",
    buttonText: "Open",
    libraryType: "QA Testing"
  },
  {
    title: "Keysight Salesforce & CRM Data Governance Internship",
    category: "Salesforce",
    description: "Salesforce Lightning, SOQL, reports, dashboards, data cleaning, import/export files, CRM data governance, and testing exposure.",
    image: "assets/images/cover-salesforce.svg",
    file: "",
    link: "",
    tools: ["Salesforce Lightning", "SOQL", "Excel"],
    tags: ["Salesforce", "CRM"],
    status: "Internship experience summary.",
    buttonText: "Open",
    libraryType: "Salesforce"
  }
];

window.portfolioData = {
  assetScanSummary,
  certificates,
  writings,
  designs,
  projects,
  tools,
  featuredLinks,
  proofLibrary
};
