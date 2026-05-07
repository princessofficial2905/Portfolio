document.body.classList.add("has-js");

const data = window.portfolioData || {
  certificates: [],
  writings: [],
  designs: [],
  projects: [],
  tools: [],
  featuredLinks: [],
  proofLibrary: [],
  assetScanSummary: { externalChecks: [] }
};

const libraryFilterLabels = [
  "All",
  "Certificates",
  "Writings",
  "Designs",
  "AI Data",
  "QA Testing",
  "Salesforce",
  "Automation",
  "Documentation",
  "Content",
  "Engineering"
];

let activeProjectFilter = "All";
let activeLibraryFilter = "All";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getItemHref(item) {
  return item.file || item.link || "";
}

function isExternalUrl(href) {
  return /^https?:\/\//i.test(href);
}

function matchesCategory(item, category) {
  if (category === "All") return true;
  const haystack = [
    item.category,
    item.libraryType,
    ...(item.tags || []),
    ...(item.tools || [])
  ].join(" ").toLowerCase();
  return haystack.includes(category.toLowerCase());
}

function makeTags(tags = []) {
  return tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
}

function hashString(value = "") {
  return [...String(value)].reduce((hash, char) => (
    ((hash << 5) - hash) + char.charCodeAt(0)
  ), 0);
}

function getInitials(value = "") {
  const words = String(value).match(/[A-Za-z0-9]+/g) || ["P"];
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function shouldGenerateVisual(image = "") {
  return !image || image.includes("placeholder-");
}

function getGeneratedVisualType(item) {
  const text = `${item.title} ${item.category} ${(item.tags || []).join(" ")} ${(item.tools || []).join(" ")}`.toLowerCase();
  if (text.includes("trailhead") || text.includes("salesforce")) return "trailhead";
  if (text.includes("python")) return "code";
  if (text.includes("excel") || text.includes("spreadsheet")) return "sheet";
  if (text.includes("emotional") || text.includes("communication")) return "people";
  if (text.includes("fundraising") || text.includes("nonprofit")) return "impact";
  if (text.includes("engineering job")) return "blueprint";
  if (text.includes("six sigma") || text.includes("quality")) return "quality";
  if (text.includes("business analysis") || text.includes("process")) return "flow";
  if (text.includes("marketing") || text.includes("seo")) return "growth";
  if (text.includes("blog collection")) return "editorial";
  if (text.includes("blog writing")) return "writing";
  if (text.includes("carousel") || text.includes("content concepts")) return "carousel";
  if (text.includes("branding portfolio")) return "brand";
  if (text.includes("logo design")) return "logo";
  if (text.includes("visual portfolio") || text.includes("presentation")) return "moodboard";
  return "portfolio";
}

function makeGeneratedArt(type) {
  const art = {
    trailhead: `
      <path class="art-stroke gold" d="M190 310c78-105 172-142 286-98 90 35 164 18 220-48" />
      <circle class="art-node" cx="188" cy="310" r="18" /><circle class="art-node pale" cx="476" cy="212" r="24" /><circle class="art-node" cx="696" cy="164" r="18" />
      <path class="art-line" d="M260 404h296M260 452h210M260 500h330" />
      <path class="art-badge" d="M520 285l80 46v92l-80 46-80-46v-92z" />
      <path class="art-mark" d="M485 378l28 28 62-75" />
    `,
    code: `
      <rect class="art-panel light" x="160" y="150" width="500" height="310" rx="42" />
      <circle class="art-dot" cx="220" cy="206" r="12" /><circle class="art-dot pale" cx="258" cy="206" r="12" /><circle class="art-dot" cx="296" cy="206" r="12" />
      <path class="art-code" d="M230 286h150M230 342h250M230 398h112M445 286h108M520 398h72" />
      <path class="art-stroke gold" d="M654 238c-86 14-102 86-36 112 72 28 16 120-102 104" />
      <circle class="art-node" cx="620" cy="350" r="22" />
    `,
    sheet: `
      <rect class="art-panel light" x="156" y="124" width="520" height="388" rx="38" />
      <path class="art-grid-lines" d="M156 220h520M156 304h520M156 388h520M286 124v388M416 124v388M546 124v388" />
      <path class="art-stroke gold" d="M210 438c62-98 118-82 164-132 48-52 112 24 178-82 26-42 50-55 82-68" />
      <rect class="art-chip" x="224" y="164" width="116" height="34" rx="17" />
      <rect class="art-chip pale" x="374" y="164" width="180" height="34" rx="17" />
    `,
    people: `
      <circle class="art-face" cx="318" cy="250" r="76" /><circle class="art-face pale" cx="502" cy="250" r="76" />
      <path class="art-stroke" d="M210 458v-54c0-70 58-126 128-126h0c70 0 128 56 128 126v54" />
      <path class="art-stroke gold" d="M390 458v-54c0-70 58-126 128-126h0c70 0 128 56 128 126v54" />
      <path class="art-line" d="M266 250h42M482 250h42M360 330c34 30 84 30 118 0" />
      <path class="art-bubble" d="M620 150h110v74h-54l-28 34v-34h-28z" />
    `,
    impact: `
      <path class="art-hand" d="M210 396c90 8 128 72 210 72h94c54 0 90-28 132-76" />
      <path class="art-hand pale" d="M674 292c-80 18-120 68-182 68h-96c-54 0-90-30-132-76" />
      <path class="art-heart" d="M430 220c-42-62-130-24-130 46 0 74 130 134 130 134s130-60 130-134c0-70-88-108-130-46z" />
      <path class="art-line" d="M650 432h110M650 480h72" />
    `,
    blueprint: `
      <path class="art-cube-top" d="M414 128l206 92-206 104-206-104z" />
      <path class="art-cube-left" d="M208 220l206 104v210L208 430z" />
      <path class="art-cube-right" d="M414 324l206-104v210L414 534z" />
      <path class="art-grid-lines pale" d="M170 158h500M170 272h500M170 386h500M280 116v450M414 116v450M548 116v450" />
      <circle class="art-node" cx="414" cy="324" r="24" />
    `,
    quality: `
      <circle class="art-ring" cx="410" cy="300" r="152" /><circle class="art-ring pale" cx="410" cy="300" r="104" />
      <path class="art-mark large" d="M332 304l58 58 112-142" />
      <path class="art-ribbon" d="M342 438l-44 128 112-52 112 52-44-128" />
      <path class="art-line" d="M618 218h124M618 270h82M618 322h134" />
    `,
    flow: `
      <rect class="art-box" x="158" y="152" width="170" height="112" rx="28" />
      <rect class="art-box pale" x="476" y="152" width="170" height="112" rx="28" />
      <rect class="art-box" x="314" y="390" width="170" height="112" rx="28" />
      <path class="art-stroke" d="M328 208h148M520 264l-88 126M250 264l102 126" />
      <circle class="art-node" cx="402" cy="208" r="18" /><circle class="art-node pale" cx="432" cy="390" r="18" />
      <path class="art-line" d="M184 208h76M508 208h86M346 446h106" />
    `,
    growth: `
      <path class="art-megaphone" d="M190 338l252-110v224L190 342z" />
      <path class="art-megaphone pale" d="M442 228l92 40v144l-92 40z" />
      <path class="art-stroke gold" d="M594 444c46-84 92-72 136-162" />
      <path class="art-bar" d="M594 480h38V370h-38zM664 480h38V318h-38zM734 480h38V244h-38z" />
      <circle class="art-node" cx="730" cy="282" r="18" />
    `,
    editorial: `
      <path class="art-page" d="M174 144h240c56 0 102 46 102 102v288H276c-56 0-102-46-102-102z" />
      <path class="art-page pale" d="M516 144h146v390H516z" />
      <path class="art-line dark" d="M250 244h172M250 300h128M250 356h190M570 244h56M570 300h56M570 356h56" />
      <path class="art-stroke gold" d="M232 474c112-72 226-72 344 0" />
    `,
    writing: `
      <rect class="art-panel light" x="174" y="126" width="470" height="360" rx="40" />
      <path class="art-line dark" d="M246 220h270M246 278h220M246 336h300M246 394h170" />
      <path class="art-pen-shape" d="M596 410l126-126 48 48-126 126-76 28z" />
      <path class="art-stroke gold" d="M214 534c130-74 260-74 390 0" />
    `,
    carousel: `
      <rect class="art-card pale" x="170" y="160" width="220" height="300" rx="34" />
      <rect class="art-card" x="320" y="122" width="220" height="338" rx="34" />
      <rect class="art-card dark" x="470" y="190" width="220" height="270" rx="34" />
      <path class="art-line dark" d="M220 236h120M220 292h92M370 206h120M370 262h86M520 276h112M520 332h80" />
      <circle class="art-node" cx="626" cy="404" r="24" />
    `,
    brand: `
      <circle class="art-ring" cx="280" cy="260" r="110" /><rect class="art-box pale" x="430" y="150" width="210" height="210" rx="48" />
      <path class="art-mark large" d="M242 260l38 38 80-100" />
      <path class="art-line" d="M190 468h450M190 520h280" />
      <path class="art-stroke gold" d="M512 258c58-76 124-76 182 0" />
    `,
    logo: `
      <path class="art-logo" d="M406 136l204 118v236L406 608 202 490V254z" />
      <path class="art-logo-hole" d="M406 252l104 60v120l-104 60-104-60V312z" />
      <path class="art-grid-lines pale" d="M134 254h544M134 372h544M134 490h544M202 108v520M406 108v520M610 108v520" />
      <circle class="art-node" cx="406" cy="372" r="22" />
    `,
    moodboard: `
      <rect class="art-photo" x="146" y="138" width="214" height="160" rx="28" />
      <rect class="art-photo pale" x="408" y="138" width="250" height="210" rx="32" />
      <rect class="art-photo dark" x="184" y="352" width="200" height="180" rx="30" />
      <rect class="art-photo" x="438" y="402" width="170" height="130" rx="28" />
      <path class="art-stroke gold" d="M208 246c68-52 120-44 166 18M452 478c52-42 94-38 128 8" />
    `,
    portfolio: `
      <rect class="art-panel light" x="170" y="140" width="500" height="350" rx="46" />
      <path class="art-line dark" d="M245 242h260M245 306h180M245 370h300" />
      <circle class="art-node" cx="586" cy="390" r="42" />
    `
  };
  return art[type] || art.portfolio;
}

function makeGeneratedVisual(item) {
  const category = item.category || item.libraryType || "Portfolio";
  const hue = Math.abs(hashString(`${item.title}-${category}`)) % 360;
  const visualType = getGeneratedVisualType(item);
  return `
    <div class="card-media generated-media visual-${escapeHtml(visualType)}" style="--visual-hue: ${hue};">
      <div class="generated-grid" aria-hidden="true"></div>
      <svg class="generated-art" viewBox="0 0 820 620" aria-hidden="true" focusable="false">
        ${makeGeneratedArt(visualType)}
      </svg>
      <span class="generated-label">${escapeHtml(category)}</span>
    </div>
  `;
}

function makeAction(item) {
  const href = getItemHref(item);
  const label = item.buttonText || "Open";
  if (!href) {
    return `<span class="card-action is-disabled" aria-disabled="true">${escapeHtml(label)}</span>`;
  }

  const target = isExternalUrl(href) ? ' target="_blank" rel="noopener"' : "";
  return `<a class="card-action" href="${escapeHtml(href)}"${target}>${escapeHtml(label)}</a>`;
}

function makeMedia(item, useIframe = false) {
  const href = getItemHref(item);
  const canPreviewHtml = useIframe && item.file && item.file.endsWith(".html");

  if (canPreviewHtml) {
    return `
      <div class="card-media">
        <iframe src="${escapeHtml(item.file)}" title="${escapeHtml(item.title)} preview" loading="lazy"></iframe>
      </div>
    `;
  }

  const image = item.image || "assets/images/placeholder-project.svg";
  if (shouldGenerateVisual(image)) {
    return makeGeneratedVisual(item);
  }

  const wrapped = href ? `<a href="${escapeHtml(href)}"${isExternalUrl(href) ? ' target="_blank" rel="noopener"' : ""}>` : "";
  const wrappedClose = href ? "</a>" : "";
  return `
    <div class="card-media">
      ${wrapped}<img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)}" loading="lazy">${wrappedClose}
    </div>
  `;
}

function cardTemplate(item, options = {}) {
  const classes = options.classes || "project-card";
  const showMedia = options.showMedia !== false;
  const showStatus = options.showStatus !== false;
  const showAction = options.showAction === true;
  return `
    <article class="${classes} reveal">
      ${showMedia ? makeMedia(item, options.useIframe) : ""}
      <div class="card-body">
        <span class="category-pill">${escapeHtml(item.category || item.libraryType || "Portfolio")}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        ${item.tools?.length ? `<div class="tag-row">${makeTags(item.tools)}</div>` : ""}
        ${showStatus && item.status ? `<p class="card-status">${escapeHtml(item.status)}</p>` : ""}
        ${showAction ? makeAction(item) : ""}
      </div>
    </article>
  `;
}

function renderProjectFilters() {
  const mount = document.getElementById("projectFilters");
  if (!mount) return;

  const filters = ["All", ...new Set(data.projects.map((item) => item.category))];
  mount.innerHTML = filters.map((filter) => (
    `<button type="button" class="${filter === activeProjectFilter ? "is-active" : ""}" data-project-filter="${escapeHtml(filter)}">${escapeHtml(filter)}</button>`
  )).join("");

  mount.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectFilter = button.dataset.projectFilter;
      renderProjectFilters();
      renderProjects();
      initReveal();
    });
  });
}

function renderProjects() {
  const mount = document.getElementById("projectGrid");
  if (!mount) return;

  const items = data.projects.filter((item) => matchesCategory(item, activeProjectFilter));
  mount.innerHTML = items.length
    ? items.map((item) => cardTemplate(item, { classes: "project-card", showStatus: false })).join("")
    : '<div class="empty-state">No projects match this filter yet.</div>';
}

function renderCarousel(trackId, items) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const carouselItems = [...items, ...items];
  track.innerHTML = carouselItems.map((item) => cardTemplate(item, {
    classes: "proof-card",
    showStatus: false
  })).join("");
}

function renderWritings() {
  const mount = document.getElementById("writingGrid");
  if (!mount) return;

  mount.innerHTML = data.writings.map((item) => cardTemplate(item, {
    classes: "writing-card",
    showStatus: false
  })).join("");
}

function renderLivePreviews() {
  const mount = document.getElementById("livePreviewGrid");
  if (!mount) return;

  mount.innerHTML = data.projects.map((item) => cardTemplate(item, {
    classes: "preview-card",
    useIframe: true,
    showStatus: false
  })).join("");
}

function renderTools() {
  const mount = document.getElementById("toolsGrid");
  if (!mount) return;

  mount.innerHTML = data.tools.map((group) => `
    <article class="tool-card reveal">
      <h3>${escapeHtml(group.category)}</h3>
      <p class="note">${escapeHtml(group.note)}</p>
      <div class="tool-list">
        ${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderLibraryFilters() {
  const mount = document.getElementById("libraryFilters");
  if (!mount) return;

  mount.innerHTML = libraryFilterLabels.map((filter) => (
    `<button type="button" class="${filter === activeLibraryFilter ? "is-active" : ""}" data-library-filter="${escapeHtml(filter)}">${escapeHtml(filter)}</button>`
  )).join("");

  mount.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeLibraryFilter = button.dataset.libraryFilter;
      renderLibraryFilters();
      renderLibrary();
      initReveal();
    });
  });
}

function renderLibrary() {
  const mount = document.getElementById("libraryGrid");
  const search = document.getElementById("librarySearch");
  if (!mount) return;

  const query = (search?.value || "").trim().toLowerCase();
  const items = data.proofLibrary.filter((item) => {
    const searchable = [
      item.title,
      item.category,
      item.description,
      item.status,
      ...(item.tags || []),
      ...(item.tools || [])
    ].join(" ").toLowerCase();

    return matchesCategory(item, activeLibraryFilter) && (!query || searchable.includes(query));
  });

  mount.innerHTML = items.length
    ? items.map((item) => cardTemplate(item, { classes: "proof-card", showMedia: false })).join("")
    : '<div class="empty-state">No proof items match this search yet. Try a broader keyword or another filter.</div>';
}

function renderFeaturedLinks() {
  const mount = document.getElementById("featuredLinksGrid");
  if (!mount) return;

  mount.innerHTML = data.featuredLinks.map((item) => {
    const href = getItemHref(item);
    const target = href && isExternalUrl(href) ? ' target="_blank" rel="noopener"' : "";
    const tagName = href ? "a" : "article";
    const linkAttrs = href ? ` href="${escapeHtml(href)}"${target}` : "";
    return `
      <${tagName} class="link-card reveal"${linkAttrs}>
        <div class="link-icon" aria-hidden="true">${escapeHtml(item.icon || "Go")}</div>
        <div>
          <span class="category-pill">${escapeHtml(item.category)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </${tagName}>
    `;
  }).join("");
}

function renderAssetStatus() {
  const mount = document.getElementById("assetStatusList");
  if (!mount) return;

  mount.innerHTML = (data.assetScanSummary.externalChecks || []).map((item) => `
    <div class="status-item">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.status)}</span>
    </div>
  `).join("");
}

function initCarouselControls() {
  document.querySelectorAll("[data-carousel-prev], [data-carousel-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.carouselPrev || button.dataset.carouselNext;
      const track = document.getElementById(id);
      const windowEl = track?.parentElement;
      if (!windowEl || !track) return;

      track.style.animationPlayState = "paused";
      const direction = button.dataset.carouselPrev ? -1 : 1;
      windowEl.scrollBy({ left: direction * Math.min(420, windowEl.clientWidth * 0.82), behavior: "smooth" });
      window.setTimeout(() => {
        track.style.animationPlayState = "";
      }, 2200);
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

let revealObserver;

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}

function initSearch() {
  const search = document.getElementById("librarySearch");
  if (!search) return;
  search.addEventListener("input", renderLibrary);
}

function initFloatingArt() {
  const art = [...document.querySelectorAll(".float-art[data-depth]")];
  if (!art.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    const y = window.scrollY || 0;
    art.forEach((item, index) => {
      const depth = Number(item.dataset.depth || 0);
      const drift = y * depth;
      const rotate = Math.sin((y / 420) + index) * 4;
      item.style.setProperty("--scroll-drift", `${drift.toFixed(2)}px`);
      item.style.setProperty("--scroll-rotate", `${rotate.toFixed(2)}deg`);
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function init() {
  renderProjectFilters();
  renderProjects();
  renderCarousel("certificateTrack", data.certificates);
  renderCarousel("designTrack", data.designs);
  renderWritings();
  renderLivePreviews();
  renderTools();
  renderLibraryFilters();
  renderLibrary();
  renderFeaturedLinks();
  renderAssetStatus();
  initCarouselControls();
  initMobileNav();
  initSearch();
  initFloatingArt();
  initReveal();
}

init();
