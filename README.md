# Princess Portfolio Website

Premium GitHub Pages-ready personal portfolio for Princess, built as a complete proof-of-work hub across QA testing, Salesforce, AI data, automation, documentation systems, writing, visual design, and engineering projects.

## What This Includes

- `index.html` - Main portfolio website.
- `styles.css` - Full responsive visual design, animations, carousels, cards, and mobile layout.
- `script.js` - Dynamic rendering, filters, search, mobile nav, carousel controls, and scroll reveals.
- `portfolio-data.js` - Easy-to-edit data source for certificates, writings, designs, projects, tools, links, and proof-library entries.
- `MASTER_RESUME_PRINCESS.md` - Mega master resume in ATS-friendly Markdown.
- `MASTER_RESUME_PRINCESS.html` - Polished browser and print-ready resume.
- `MASTER_RESUME_PRINCESS.pdf` - PDF version generated from the HTML resume.
- `assets/docs/Princess_Mega_Master_Resume.pdf` - Original mega master resume PDF source.
- `assets/docs/Resume_Princess.pdf` - Original compact resume PDF source.
- `assets/images/` - Placeholder visuals for certificates, designs, writings, and projects.
- `assets/icons/favicon.svg` - Favicon placeholder.

## Folder Structure

```text
Resume_Codex/
  index.html
  styles.css
  script.js
  portfolio-data.js
  README.md
  MASTER_RESUME_PRINCESS.md
  MASTER_RESUME_PRINCESS.html
  MASTER_RESUME_PRINCESS.pdf
  assets/
    certificates/
    docs/
      Princess_Mega_Master_Resume.pdf
      Resume_Princess.pdf
    icons/
      favicon.svg
    images/
      placeholder-certificate.svg
      placeholder-design.svg
      placeholder-project.svg
      placeholder-writing.svg
    projects/
    writings/
```

## How To Preview Locally

Open `index.html` directly in your browser, or run a small local server from this folder:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How To Deploy On GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to the repository on GitHub.
3. Open `Settings`.
4. Open `Pages`.
5. Under `Build and deployment`, select `Deploy from a branch`.
6. Select the `main` branch and `/root`.
7. Save.
8. Open the live URL GitHub gives you.

For this `Portfolio` repository, the expected GitHub Pages URL will usually be:

```text
https://princessofficial2905.github.io/Portfolio/
```

If you ever move the same files into a user profile site repository named `princessofficial2905.github.io`, the live URL would become `https://princessofficial2905.github.io/`.

## How To Edit Public Links

Open `portfolio-data.js` and update the `featuredLinks` array. Each link card supports:

```js
{
  title: "LinkedIn Profile",
  category: "Professional Profile",
  description: "Career profile and professional networking.",
  image: "",
  file: "",
  link: "https://www.linkedin.com/in/princess2905",
  tools: ["LinkedIn"],
  tags: ["Profile"],
  status: "Direct visitor link retained.",
  buttonText: "Open LinkedIn",
  icon: "in"
}
```

## How To Update The Resume

- Edit `MASTER_RESUME_PRINCESS.md` for the master source version.
- Edit `MASTER_RESUME_PRINCESS.html` for the browser/print version.
- Open the HTML resume in a browser and use `Print / Save as PDF` to regenerate the PDF.
- Keep the master resume broad, then create shorter targeted versions for QA, Salesforce Admin, AI Data, Documentation, BA, Content Ops, or IT Ops roles.

## How To Add A New Certificate

1. Add the certificate image or PDF to a folder such as `assets/certificates/`.
2. Open `portfolio-data.js`.
3. Add a new item to the `certificates` array.

Example:

```js
{
  title: "Lean Six Sigma & Quality Management",
  category: "Quality",
  description: "Certificate for process improvement and quality management learning.",
  image: "assets/certificates/lean-six-sigma.png",
  file: "assets/certificates/lean-six-sigma.pdf",
  link: "",
  tools: ["Quality", "Process Improvement"],
  tags: ["Certificate", "Quality"],
  status: "Certificate uploaded.",
  buttonText: "View Certificate"
}
```

## How To Add A New Writing HTML File

1. Add the writing page to a folder such as `assets/writings/`.
2. Add an entry to the `writings` array in `portfolio-data.js`.

Example:

```js
{
  title: "An Essay Title",
  category: "Emotional Essays",
  description: "A short description of the essay or article.",
  image: "assets/images/placeholder-writing.svg",
  file: "assets/writings/an-essay-title.html",
  link: "",
  tools: ["Writing", "HTML", "Storytelling"],
  tags: ["Writing", "Essay"],
  status: "Local HTML writing file.",
  buttonText: "Read Writing"
}
```

## How To Add A New Behance Or Design Image

1. Add the logo, branding board, or design image to `assets/images/` or `assets/projects/`.
2. Add an entry to the `designs` array.

Example:

```js
{
  title: "Brand Identity Concept",
  category: "Branding",
  description: "Logo and visual identity exploration.",
  image: "assets/images/brand-identity-concept.png",
  file: "",
  link: "https://www.behance.net/princess2905",
  tools: ["Canva", "Behance", "Branding"],
  tags: ["Design", "Branding"],
  status: "Visual thumbnail added.",
  buttonText: "View Design"
}
```

## How To Add A New Project

1. Add screenshots, PDFs, or HTML case studies under `assets/projects/`.
2. Add a new item to the `projects` array.
3. If you add a local `.html` file in `file`, the major project preview gallery can show it as an iframe preview.

Example:

```js
{
  title: "AI Dataset Case Study",
  category: "AI Data",
  description: "Case study showing object-scene mapping, visual QA, and metadata notes.",
  image: "assets/projects/ai-dataset-cover.png",
  file: "assets/projects/ai-dataset-case-study.html",
  link: "",
  tools: ["AI Data", "Visual QA", "Metadata"],
  tags: ["AI Data", "Documentation"],
  status: "Case study uploaded.",
  buttonText: "View Project"
}
```

## How To Add A Tool Category

Add a new object to the `tools` array:

```js
{
  category: "Research Tools",
  note: "Tools I have used, explored, or built workflows around.",
  items: ["Perplexity", "Google Search", "GitHub", "Medium"]
}
```

## Placeholder Images

The first repository scan did not find local proof-of-work assets. Placeholder cards were created for:

- Certificates
- Behance/logo/branding designs
- Writings and editorial pages
- Major project previews

Replace the placeholder paths in `portfolio-data.js` when you add real files.

## External Link Notes

Automated preview checks may fail for public platforms even when a normal visitor can open them:

- LinkedIn blocked automated access.
- Behance did not provide an automated preview.
- Salesforce Trailhead returned a server error during the automated check.
- GitHub Pages links may return `404` until the `Portfolio` repository is published from GitHub Pages settings.

The portfolio keeps these links visible as direct visitor links instead of hiding them.
