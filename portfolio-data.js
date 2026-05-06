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
    status: "Public Trailhead profile linked.",
    buttonText: "View Trailhead"
  },
  {
    title: "Python: Beyond the Basics",
    category: "Programming",
    description: "Learning credential connected to Python fundamentals, programming confidence, and technical workflow building.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Python"],
    tags: ["Certificate", "Programming"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Excel Training",
    category: "Data & Productivity",
    description: "Spreadsheet learning signal connected to reporting, data cleaning, Excel analysis, and operations workflows.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Excel", "Data Analysis"],
    tags: ["Certificate", "Excel"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Emotional Intelligence in the Workplace",
    category: "Professional Skills",
    description: "Professional learning signal connected to workplace communication, collaboration, empathy, and team readiness.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Communication", "Workplace Skills"],
    tags: ["Certificate", "Professional Skills"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Fundraising Internship",
    category: "Nonprofit",
    description: "Fundraising learning and internship signal connected to crowdfunding, donor communication, campaign support, and NGO operations exposure.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Fundraising", "Outreach"],
    tags: ["Certificate", "NGO"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Explore Engineering Job Simulation",
    category: "Engineering",
    description: "Engineering career-readiness learning connected to simulation thinking, technical exposure, and project communication.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Engineering", "Simulation"],
    tags: ["Certificate", "Engineering"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Lean Six Sigma & Quality Management",
    category: "Quality",
    description: "Quality-management learning signal connected to process improvement, structured problem solving, and QA-adjacent thinking.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Quality", "Process Improvement"],
    tags: ["Certificate", "Quality"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Business Analysis & Process Improvement",
    category: "Business Analysis",
    description: "Business-analysis learning signal connected to process mapping, requirement thinking, and operational improvement.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Business Analysis", "Process Mapping"],
    tags: ["Certificate", "Business Analysis"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  },
  {
    title: "Digital Marketing & SEO",
    category: "Content Operations",
    description: "Digital marketing and SEO learning connected to content systems, search visibility, online publishing, and portfolio growth.",
    image: "assets/images/placeholder-certificate.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["SEO", "Content"],
    tags: ["Certificate", "Marketing"],
    status: "Listed in the master resume; certificate file can be attached later.",
    buttonText: "View Resume"
  }
];

const writings = [
  {
    title: "Emotional Essays Collection",
    category: "Emotional Essays",
    description: "Reflective essays, identity writing, emotional storytelling, and first-person editorial pieces linked through the writing portfolio.",
    image: "assets/images/placeholder-writing.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["Writing", "Storytelling", "GitHub Pages"],
    tags: ["Writing", "Content", "Storytelling"],
    status: "Writing hub linked for visitors.",
    buttonText: "Read Writings"
  },
  {
    title: "Blog Writing & Article Pages",
    category: "Blog",
    description: "Blog pages, article drafts, HTML editorial pages, and portfolio writing samples collected into a writing showcase.",
    image: "assets/images/placeholder-writing.svg",
    file: "",
    link: "https://princessofficial2905.github.io/Writings/",
    tools: ["HTML", "CSS", "Medium", "GitHub Pages"],
    tags: ["Writing", "Blog", "HTML"],
    status: "Writing hub linked for visitors.",
    buttonText: "Open Blog"
  },
  {
    title: "Instagram Carousel & Storytelling Concepts",
    category: "Content Writing",
    description: "Carousel scripts, hooks, captions, quotes, storytime formats, and visual content concepts for platform-ready storytelling.",
    image: "assets/images/placeholder-writing.svg",
    file: "MASTER_RESUME_PRINCESS.html",
    link: "",
    tools: ["Canva", "ChatGPT", "Claude", "Gemini"],
    tags: ["Content", "Creative", "Storytelling"],
    status: "Content systems are documented in the master resume.",
    buttonText: "View Resume"
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
    status: "Public Behance profile linked.",
    buttonText: "Open Behance"
  },
  {
    title: "Logo Design Concepts",
    category: "Logo Design",
    description: "Logo design concepts, branding boards, marks, color explorations, and visual identity systems linked through Behance.",
    image: "assets/images/placeholder-design.svg",
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
    description: "Portfolio boards, thumbnails, documentation covers, social post visuals, and visual storytelling systems linked through Behance.",
    image: "assets/images/placeholder-design.svg",
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
    buttonText: "View Details"
  },
  {
    title: "Personal Trading Assistant Bot",
    category: "Automation Bot",
    description: "Personal automation workflow for intraday scanning, breakout filters, risk-reward calculations, ranked candidates, reports, and email-alert concepts.",
    image: "assets/images/cover-qa.svg",
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
    image: "assets/images/cover-docs.svg",
    file: "",
    link: "#proof-library",
    tools: ["MS Word", "Google Docs", "ChatGPT", "Claude"],
    tags: ["Documentation", "NGO"],
    status: "Self-directed documentation system.",
    buttonText: "View Details"
  },
  {
    title: "Advocate Documentation Support Pack",
    category: "Documentation System",
    description: "Legal-admin documentation concept for intake, client communication, hearing notes, matter tracking, checklists, and responsible-use templates.",
    image: "assets/images/cover-docs.svg",
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
    image: "assets/images/cover-docs.svg",
    file: "",
    link: "#proof-library",
    tools: ["Google Sheets", "Prospeo", "Apollo", "Reoon"],
    tags: ["Content", "Lead Generation"],
    status: "Client-ready toolkit concept documented as a portfolio project.",
    buttonText: "View Details"
  },
  {
    title: "Creator Content Planning Toolkit",
    category: "Content System",
    description: "Content workflow for carousels, captions, storytime scripts, emotional essays, blog outlines, hooks, calendars, and repurposing.",
    image: "assets/images/cover-creative.svg",
    file: "",
    link: "#proof-library",
    tools: ["Canva", "Medium", "GitHub Pages", "AI Writing"],
    tags: ["Content", "Writing"],
    status: "Portfolio content system.",
    buttonText: "View Details"
  },
  {
    title: "Smart Home Automation using NodeMCU",
    category: "Engineering",
    description: "IoT automation prototype using NodeMCU ESP8266, relay circuits, Wi-Fi setup, Sinric Pro API, Alexa, and Google Assistant.",
    image: "assets/images/cover-engineering.svg",
    file: "",
    link: "#proof-library",
    tools: ["NodeMCU", "Arduino IDE", "Sinric Pro", "Alexa"],
    tags: ["Engineering", "Automation"],
    status: "Academic and portfolio engineering project.",
    buttonText: "View Details"
  },
  {
    title: "VR Emergency Landing Simulation",
    category: "Engineering Simulation",
    description: "AR/VR simulation concept around emergency airplane landing and parachute deployment using Unity, WebVR, and A-Frame.",
    image: "assets/images/cover-engineering.svg",
    file: "",
    link: "#proof-library",
    tools: ["Unity", "A-Frame", "WebVR"],
    tags: ["Engineering", "Simulation"],
    status: "Internship and portfolio simulation exposure.",
    buttonText: "View Details"
  },
  {
    title: "Hybrid Composite Materials Research",
    category: "Engineering",
    description: "Academic research-oriented work connecting mechanical analysis, material behavior, CAD/CAE thinking, and technical documentation.",
    image: "assets/images/cover-engineering.svg",
    file: "",
    link: "#proof-library",
    tools: ["Research", "CAD/CAE", "Technical Documentation"],
    tags: ["Engineering", "Research"],
    status: "Academic research-oriented project.",
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
    title: "Original Mega Master Resume PDF",
    category: "Resume",
    description: "Detailed resume bank used as the source for this portfolio and future targeted applications.",
    image: "",
    file: "assets/docs/Princess_Mega_Master_Resume.pdf",
    link: "",
    tools: ["PDF", "Resume"],
    tags: ["Resume"],
    status: "Original PDF included in this repository.",
    buttonText: "Open PDF",
    icon: "PDF"
  },
  {
    title: "Compact Resume PDF",
    category: "Resume",
    description: "Shorter resume version with key Salesforce, QA, engineering, and project details.",
    image: "",
    file: "assets/docs/Resume_Princess.pdf",
    link: "",
    tools: ["PDF", "Resume"],
    tags: ["Resume"],
    status: "Original PDF included in this repository.",
    buttonText: "Open PDF",
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
    description: "Carousel of certificates, credentials, learning signals, and public profiles.",
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
    image: "assets/images/cover-qa.svg",
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
    image: "assets/images/cover-salesforce.svg",
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
