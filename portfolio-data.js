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
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "https://www.salesforce.com/trailblazer/princessadmin",
    tools: ["Trailhead", "Salesforce", "CRM"],
    tags: ["Salesforce", "Credential", "Learning"],
    status: "External profile link retained; automated preview unavailable.",
    buttonText: "View Trailhead"
  },
  {
    title: "Python: Beyond the Basics",
    category: "Programming",
    description: "Certificate placeholder. Add the actual PDF or image file to assets/certificates and update this item.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Python"],
    tags: ["Certificate", "Programming"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Excel Training",
    category: "Data & Productivity",
    description: "Certificate placeholder for spreadsheet, reporting, data cleaning, and analysis learning.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Excel", "Data Analysis"],
    tags: ["Certificate", "Excel"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Emotional Intelligence in the Workplace",
    category: "Professional Skills",
    description: "Certificate placeholder for workplace communication, collaboration, and emotional intelligence learning.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Communication", "Workplace Skills"],
    tags: ["Certificate", "Professional Skills"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Fundraising Internship",
    category: "Nonprofit",
    description: "Credential placeholder connected to crowdfunding, donor communication, campaign support, and NGO operations exposure.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Fundraising", "Outreach"],
    tags: ["Certificate", "NGO"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Explore Engineering Job Simulation",
    category: "Engineering",
    description: "Certificate placeholder for engineering simulation and career-readiness learning.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Engineering", "Simulation"],
    tags: ["Certificate", "Engineering"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Lean Six Sigma & Quality Management",
    category: "Quality",
    description: "Certificate placeholder for quality management, process improvement, and structured problem-solving learning.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Quality", "Process Improvement"],
    tags: ["Certificate", "Quality"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Business Analysis & Process Improvement",
    category: "Business Analysis",
    description: "Certificate placeholder for process mapping, business analysis thinking, and operational improvement learning.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["Business Analysis", "Process Mapping"],
    tags: ["Certificate", "Business Analysis"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  },
  {
    title: "Digital Marketing & SEO",
    category: "Content Operations",
    description: "Certificate placeholder for digital marketing, search visibility, content systems, and online publishing workflows.",
    image: "assets/images/placeholder-certificate.svg",
    file: "",
    link: "",
    tools: ["SEO", "Content"],
    tags: ["Certificate", "Marketing"],
    status: "Placeholder - certificate file needed.",
    buttonText: "Add Certificate"
  }
];

const writings = [
  {
    title: "Emotional Essays Collection",
    category: "Emotional Essays",
    description: "Placeholder collection for reflective essays, identity writing, emotional storytelling, and first-person editorial pieces.",
    image: "assets/images/placeholder-writing.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["Writing", "Storytelling", "GitHub Pages"],
    tags: ["Writing", "Content", "Storytelling"],
    status: "External writing link retained; local writing files not found during scan.",
    buttonText: "Read Writings"
  },
  {
    title: "Blog Writing & Article Pages",
    category: "Blog",
    description: "Placeholder for blog pages, article drafts, HTML editorial pages, and portfolio writing samples.",
    image: "assets/images/placeholder-writing.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["HTML", "CSS", "Medium", "GitHub Pages"],
    tags: ["Writing", "Blog", "HTML"],
    status: "Placeholder - add local HTML files when available.",
    buttonText: "Open Blog"
  },
  {
    title: "Instagram Carousel & Storytelling Concepts",
    category: "Content Writing",
    description: "Placeholder for carousel scripts, hooks, captions, quotes, storytime formats, and visual content concepts.",
    image: "assets/images/placeholder-writing.svg",
    file: "",
    link: "",
    tools: ["Canva", "ChatGPT", "Claude", "Gemini"],
    tags: ["Content", "Creative", "Storytelling"],
    status: "Placeholder - add writing or design samples later.",
    buttonText: "Add Sample"
  }
];

const designs = [
  {
    title: "Behance Logo & Branding Portfolio",
    category: "Branding",
    description: "Direct Behance portfolio link for visual design, logo, branding, and creative presentation work.",
    image: "assets/images/placeholder-design.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Behance", "Canva", "Visual Direction"],
    tags: ["Design", "Branding", "Behance"],
    status: "External profile link retained; automated preview unavailable.",
    buttonText: "Open Behance"
  },
  {
    title: "Logo Design Concepts",
    category: "Logo Design",
    description: "Placeholder for local logo design images, branding boards, marks, color explorations, and visual identity systems.",
    image: "assets/images/placeholder-design.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Canva", "Branding", "Design"],
    tags: ["Design", "Logo"],
    status: "Placeholder - add logo images to assets/images or assets/projects.",
    buttonText: "View Design"
  },
  {
    title: "Visual Portfolio & Presentation Boards",
    category: "Visual Design",
    description: "Placeholder for portfolio boards, thumbnails, documentation covers, social post visuals, and visual storytelling systems.",
    image: "assets/images/placeholder-design.svg",
    file: "",
    link: "https://www.behance.net/princess2905",
    tools: ["Canva", "Behance", "Layout"],
    tags: ["Design", "Portfolio"],
    status: "Placeholder - replace with real images when available.",
    buttonText: "Open Behance"
  }
];

const projects = [
  {
    title: "AI Scene & Object Image Dataset Project",
    category: "AI Data",
    description: "Self-directed image dataset workflow using base scenes, isolated objects, final scene references, visual QA, and metadata-style notes.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["AI Data", "Visual QA", "Metadata", "Google Drive"],
    tags: ["AI Data", "Documentation"],
    status: "Portfolio project; add dataset screenshots or sample sheets later.",
    buttonText: "View Details"
  },
  {
    title: "Personal Trading Assistant Bot",
    category: "Automation Bot",
    description: "Personal automation workflow for intraday scanning, breakout filters, risk-reward calculations, ranked candidates, reports, and email-alert concepts.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["Python", "Codex", "PowerShell", "CSV/Excel"],
    tags: ["Automation", "Python"],
    status: "Personal workflow; not financial advice or a commercial trading product.",
    buttonText: "View Details"
  },
  {
    title: "NGO Operations Documentation System",
    category: "Documentation System",
    description: "Client-ready operations helpkit concept for governance, HR, volunteers, fundraising, grants, compliance, impact reporting, and risk management.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["MS Word", "Google Docs", "ChatGPT", "Claude"],
    tags: ["Documentation", "NGO"],
    status: "Self-directed documentation system; add PDF/demo files later.",
    buttonText: "View Details"
  },
  {
    title: "Advocate Documentation Support Pack",
    category: "Documentation System",
    description: "Legal-admin documentation concept for intake, client communication, hearing notes, matter tracking, checklists, and responsible-use templates.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["MS Word", "PDF", "Checklist Design"],
    tags: ["Documentation", "Legal Admin"],
    status: "Administrative support pack; not legal advice.",
    buttonText: "View Details"
  },
  {
    title: "Freelancer Operations Toolkit",
    category: "Content System",
    description: "Practical service operations toolkit for onboarding, pricing, proposals, delivery checklists, revision tracking, invoicing, and lead research.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["Google Sheets", "Prospeo", "Apollo", "Reoon"],
    tags: ["Content", "Lead Generation"],
    status: "Client-ready toolkit concept; add sample templates later.",
    buttonText: "View Details"
  },
  {
    title: "Creator Content Planning Toolkit",
    category: "Content System",
    description: "Content workflow for carousels, captions, storytime scripts, emotional essays, blog outlines, hooks, calendars, and repurposing.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["Canva", "Medium", "GitHub Pages", "AI Writing"],
    tags: ["Content", "Writing"],
    status: "Portfolio content system; add writing samples later.",
    buttonText: "View Details"
  },
  {
    title: "Smart Home Automation using NodeMCU",
    category: "Engineering",
    description: "IoT automation prototype using NodeMCU ESP8266, relay circuits, Wi-Fi setup, Sinric Pro API, Alexa, and Google Assistant.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["NodeMCU", "Arduino IDE", "Sinric Pro", "Alexa"],
    tags: ["Engineering", "Automation"],
    status: "Academic/portfolio engineering project; add images or demo notes later.",
    buttonText: "View Details"
  },
  {
    title: "VR Emergency Landing Simulation",
    category: "Engineering Simulation",
    description: "AR/VR simulation concept around emergency airplane landing and parachute deployment using Unity, WebVR, and A-Frame.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["Unity", "A-Frame", "WebVR"],
    tags: ["Engineering", "Simulation"],
    status: "Internship/portfolio simulation exposure; add demo page later.",
    buttonText: "View Details"
  },
  {
    title: "Hybrid Composite Materials Research",
    category: "Engineering",
    description: "Academic research-oriented work connecting mechanical analysis, material behavior, CAD/CAE thinking, and technical documentation.",
    image: "assets/images/placeholder-project.svg",
    file: "",
    link: "#proof-library",
    tools: ["Research", "CAD/CAE", "Technical Documentation"],
    tags: ["Engineering", "Research"],
    status: "Research project; add report or poster when available.",
    buttonText: "View Details"
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
    status: "Automated preview unavailable; direct link retained.",
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
    status: "HTTP 404 during check; link retained for future publishing/path correction.",
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
    title: "GitHub Pages Portfolio Website",
    category: "Portfolio",
    description: "Project-site URL for the Portfolio repository. This may show 404 until GitHub Pages finishes publishing.",
    image: "",
    file: "",
    link: "https://princessofficial2905.github.io/Portfolio/",
    tools: ["GitHub Pages"],
    tags: ["Portfolio"],
    status: "Should work after deployment from the Portfolio repository.",
    buttonText: "Open Site",
    icon: "GH"
  },
  {
    title: "Resume HTML",
    category: "Resume",
    description: "Polished browser and print-ready master resume.",
    image: "",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["HTML", "Print CSS"],
    tags: ["Resume"],
    status: "Created locally.",
    buttonText: "Open Resume",
    icon: "CV"
  },
  {
    title: "Master Resume Markdown",
    category: "Resume",
    description: "ATS-friendly mega master resume source file for future targeted versions.",
    image: "",
    file: "MASTER_RESUME_PRINCESS.md",
    link: "",
    tools: ["Markdown"],
    tags: ["Resume"],
    status: "Created locally.",
    buttonText: "Open Markdown",
    icon: "MD"
  },
  {
    title: "Certificates Section",
    category: "Proof Gallery",
    description: "Carousel of certificates and credential placeholders.",
    image: "",
    file: "",
    link: "#certificates",
    tools: ["Portfolio"],
    tags: ["Certificates"],
    status: "Ready for uploaded certificate files.",
    buttonText: "View Section",
    icon: "Ce"
  },
  {
    title: "Writing Gallery",
    category: "Proof Gallery",
    description: "Writing, blog, essay, and editorial HTML showcase.",
    image: "",
    file: "",
    link: "#writings",
    tools: ["Portfolio"],
    tags: ["Writing"],
    status: "Ready for local writing files.",
    buttonText: "View Section",
    icon: "Pg"
  },
  {
    title: "Design Gallery",
    category: "Proof Gallery",
    description: "Behance, logo, branding, and visual design showcase.",
    image: "",
    file: "",
    link: "#designs",
    tools: ["Portfolio"],
    tags: ["Designs"],
    status: "Ready for design thumbnails.",
    buttonText: "View Section",
    icon: "Ds"
  },
  {
    title: "Project Gallery",
    category: "Proof Gallery",
    description: "Featured technical, creative, documentation, automation, and engineering projects.",
    image: "",
    file: "",
    link: "#projects",
    tools: ["Portfolio"],
    tags: ["Projects"],
    status: "Created locally.",
    buttonText: "View Projects",
    icon: "Pr"
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
    image: "assets/images/placeholder-project.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Manual Testing", "Bug Reporting", "Regression Testing"],
    tags: ["QA Testing", "Resume"],
    status: "Documented in master resume.",
    buttonText: "View Resume",
    libraryType: "QA Testing"
  },
  {
    title: "Keysight Salesforce & CRM Data Governance Internship",
    category: "Salesforce",
    description: "Salesforce Lightning, SOQL, reports, dashboards, data cleaning, import/export files, CRM data governance, and testing exposure.",
    image: "assets/images/placeholder-project.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Salesforce Lightning", "SOQL", "Excel"],
    tags: ["Salesforce", "CRM"],
    status: "Documented in master resume.",
    buttonText: "View Resume",
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
