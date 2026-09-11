// DATA: each record is one finished workspace project and one learning checkpoint.
const projects = [
  { id: "recipe-page", title: "Recipe page", folder: "recipe-page-main", language: "HTML + CSS", level: "Foundations", image: "./reference-images/omelette.jpeg", alt: "Omelette on a plate", summary: "A content-first recipe layout for learning semantic sections, typography, spacing, and responsive composition.", concepts: ["semantic HTML", "CSS layout", "responsive design"], link: "../recipe-page-main/index.html" },
  { id: "dessert-shop", title: "Dessert shop cart", folder: "product-list-with-cart-main", language: "HTML + CSS + JavaScript", level: "Interactive UI", image: "./reference-images/waffle.jpg", alt: "Waffle with berries", summary: "A product grid and cart workflow for learning responsive images, cards, data, events, and persistent interface states.", concepts: ["product cards", "cart state", "forms"], link: "../product-list-with-cart-main/index.html" },
  { id: "testimonials", title: "Testimonials grid", folder: "testimonials-concord", language: "HTML + CSS", level: "Layout systems", image: "./reference-images/daniel.jpg", alt: "Testimonial author portrait", summary: "A dense editorial grid for practicing CSS Grid areas, Flexbox alignment, contrast, and mobile layout changes.", concepts: ["CSS Grid", "Flexbox", "accessibility"], link: "../testimonials-concord/index.html" },
  { id: "social-profile", title: "Social links profile", folder: "social-links-profile-main", language: "HTML + CSS", level: "Component styling", image: "./reference-images/brian.jpg", alt: "Profile portrait", summary: "A focused profile surface for learning reusable card structure, buttons, hover states, and visual hierarchy.", concepts: ["cards", "states", "typography"], link: "../social-links-profile-main/index.html" },
  { id: "react-studio", title: "React Product Studio", folder: "react-product-studio", language: "React", level: "Application thinking", image: "./reference-images/daniel.jpg", alt: "Learning studio visual", summary: "A real React learning product that demonstrates components, state, filtering, checklists, UX states, and product documents.", concepts: ["components", "useState", "product UX"], link: "../react-product-studio/index.html" },
  { id: "frontend-foundry", title: "Frontend Foundry", folder: "frontend-foundry", language: "Vite + Tailwind + JavaScript", level: "Meta project", image: "./reference-images/omelette.jpeg", alt: "Recipe project reference image", summary: "This learning library itself: a maintained index for turning every new workspace project into a documented lesson.", concepts: ["Vite", "Tailwind", "progress tracking"], link: "index.html" },
];

// STATE: search, language, and completion survive navigation through this page session.
let activeLanguage = "All";
let searchTerm = "";
const completedProjects = new Set(JSON.parse(localStorage.getItem("frontend-foundry-projects") || "[]"));

// DOM REFERENCES: these nodes are the stable interface between data and the page.
const projectGrid = document.querySelector("#project-grid");
const languageFilters = document.querySelector("#language-filters");
const searchInput = document.querySelector("#project-search");
const emptyLibrary = document.querySelector("#empty-library");
const progressCount = document.querySelector("#progress-count");
const progressTotal = document.querySelector("#progress-total");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector("[role=progressbar]");
const progressMessage = document.querySelector("#progress-message");

// DERIVED DATA: language filters are collected from the same records that render cards.
function getLanguages() {
  return ["All", ...new Set(projects.flatMap((project) => project.language.split(" + ")))];
}

// RENDER: filters are generated so a new language appears automatically when a project is added.
function renderLanguageFilters() {
  languageFilters.innerHTML = getLanguages().map((language) => `
    <button class="filter-button ${activeLanguage === language ? "filter-button--active" : ""}" data-language="${language}">${language}</button>
  `).join("");
  languageFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeLanguage = button.dataset.language;
      renderLanguageFilters();
      renderProjects();
    });
  });
}

// DERIVED DATA: one function owns the catalog query so search and filters remain predictable.
function getVisibleProjects() {
  const normalizedSearch = searchTerm.toLowerCase();
  return projects.filter((project) => {
    const matchesLanguage = activeLanguage === "All" || project.language.includes(activeLanguage);
    const searchableText = [project.title, project.folder, project.language, project.level, project.summary, ...project.concepts].join(" ").toLowerCase();
    return matchesLanguage && searchableText.includes(normalizedSearch);
  });
}

// RENDER: cards expose a project, its language coverage, its real asset, and its completion control.
function renderProjects() {
  const visibleProjects = getVisibleProjects();
  projectGrid.innerHTML = visibleProjects.map((project) => {
    const isComplete = completedProjects.has(project.id);
    return `
      <article class="project-card ${isComplete ? "project-card--complete" : ""}">
        <a class="project-card__image" href="${project.link}" aria-label="Open ${project.title}">
          <img src="${project.image}" alt="${project.alt}" />
          <span class="project-card__level">${project.level}</span>
        </a>
        <div class="project-card__body">
          <div class="project-card__meta"><span>${project.language}</span><span>${project.folder}</span></div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-card__concepts">${project.concepts.map((concept) => `<span>${concept}</span>`).join("")}</div>
          <div class="project-card__actions">
            <a class="text-link" href="${project.link}">Open project ↗</a>
            <button class="complete-button" data-project="${project.id}" aria-pressed="${isComplete}">${isComplete ? "Completed" : "Mark complete"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  emptyLibrary.hidden = visibleProjects.length !== 0;
  projectGrid.hidden = visibleProjects.length === 0;
  projectGrid.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => toggleProject(button.dataset.project));
  });
}

// EVENT: completion is a learner action, persisted so the library remains useful over time.
function toggleProject(projectId) {
  completedProjects.has(projectId) ? completedProjects.delete(projectId) : completedProjects.add(projectId);
  localStorage.setItem("frontend-foundry-projects", JSON.stringify([...completedProjects]));
  renderProjects();
  renderProgress();
}

// RENDER: progress is derived from project records, so the total grows with the library.
function renderProgress() {
  const completed = projects.filter((project) => completedProjects.has(project.id)).length;
  const percentage = Math.round((completed / projects.length) * 100);
  progressCount.textContent = completed;
  progressTotal.textContent = projects.length;
  progressPercent.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", percentage);
  progressMessage.textContent = completed === 0 ? "Choose a project and make the first pass." : `${projects.length - completed} project${projects.length - completed === 1 ? "" : "s"} left in this library.`;
}

// EVENT: the search field updates the visible project query as the learner types.
searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProjects();
});

// INITIALIZE: render the library from data on the first page load.
renderLanguageFilters();
renderProjects();
renderProgress();
