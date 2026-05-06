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
  return `
    <article class="${classes} reveal">
      ${showMedia ? makeMedia(item, options.useIframe) : ""}
      <div class="card-body">
        <span class="category-pill">${escapeHtml(item.category || item.libraryType || "Portfolio")}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        ${item.tools?.length ? `<div class="tag-row">${makeTags(item.tools)}</div>` : ""}
        ${showStatus && item.status ? `<p class="card-status">${escapeHtml(item.status)}</p>` : ""}
        ${makeAction(item)}
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
    const target = isExternalUrl(href) ? ' target="_blank" rel="noopener"' : "";
    return `
      <article class="link-card reveal">
        <div class="link-icon" aria-hidden="true">${escapeHtml(item.icon || "Go")}</div>
        <div>
          <span class="category-pill">${escapeHtml(item.category)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          ${href ? `<a class="card-action" href="${escapeHtml(href)}"${target}>${escapeHtml(item.buttonText || "Open")}</a>` : ""}
        </div>
      </article>
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
  initReveal();
}

init();
