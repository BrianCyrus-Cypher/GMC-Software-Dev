// DATA: one object describes one pantry item and gives the UI something to render.
const defaultItems = [
  { id: 1, name: "Oats", category: "Pantry", complete: false },
  { id: 2, name: "Beans", category: "Pantry", complete: false },
  { id: 3, name: "Tea", category: "Pantry", complete: false },
];

// STATE: localStorage lets the project remember the same array after refresh.
let items = JSON.parse(localStorage.getItem("everyday-pantry-items")) || defaultItems;
// STATE: activeFilter controls which objects are visible.
let activeFilter = "All";

// DOM REFERENCES: querySelector connects JavaScript to named HTML elements.
const itemForm = document.querySelector("#item-form");
const itemName = document.querySelector("#item-name");
const itemCategory = document.querySelector("#item-category");
const pantryList = document.querySelector("#pantry-list");
const filterButtons = document.querySelector("#filter-buttons");
const itemCount = document.querySelector("#item-count");
const emptyMessage = document.querySelector("#empty-message");
const statusMessage = document.querySelector("#status-message");

// PERSIST: saveItems centralizes the browser storage operation.
function saveItems() {
  localStorage.setItem("everyday-pantry-items", JSON.stringify(items));
}

// RENDER: createFilterButtons maps category names into interactive buttons.
function createFilterButtons() {
  const categories = ["All", ...new Set(items.map((item) => item.category))];
  filterButtons.innerHTML = categories.map((category) => `
    <button class="rounded border border-[#f7f4ed]/50 px-3 py-1 text-xs font-bold transition hover:bg-[#f6c85f] hover:text-[#17202a] ${category === activeFilter ? "bg-[#f6c85f] text-[#17202a]" : ""}" data-filter="${category}">
      ${category}
    </button>
  `).join("");
  // EVENTS: each generated button changes the filter and redraws the list.
  filterButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderItems();
      createFilterButtons();
    });
  });
}

// RENDER: filter chooses records, then map turns each record into list markup.
function renderItems() {
  const visibleItems = items.filter((item) => activeFilter === "All" || item.category === activeFilter);
  pantryList.innerHTML = visibleItems.map((item) => `
    <li class="flex items-center justify-between gap-4 py-3">
      <button class="text-left ${item.complete ? "line-through opacity-50" : ""}" data-toggle="${item.id}" aria-label="Mark ${item.name} complete">${item.name}</button>
      <span class="text-xs font-bold uppercase tracking-wider text-[#a9d6c5]">${item.category}</span>
    </li>
  `).join("");
  itemCount.textContent = items.length;
  emptyMessage.classList.toggle("hidden", visibleItems.length !== 0);
  // EVENTS: generated item buttons toggle complete state without reloading the page.
  pantryList.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items.find((entry) => entry.id === Number(button.dataset.toggle));
      item.complete = !item.complete;
      saveItems();
      renderItems();
    });
  });
}

// EVENT: prevent the browser reload, validate the name, append an object, and render.
itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = itemName.value.trim();
  if (!name) return;
  items.push({ id: Date.now(), name, category: itemCategory.value, complete: false });
  saveItems();
  itemForm.reset();
  statusMessage.textContent = `${name} was added to your pantry.`;
  renderItems();
  createFilterButtons();
});

// INITIALIZE: draw the first screen after all functions and references exist.
createFilterButtons();
renderItems();
