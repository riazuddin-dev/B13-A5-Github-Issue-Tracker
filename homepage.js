// ==========================
// Elements
// ==========================

const statusClosed = document.getElementById("status-closed");
const statusOpen = document.getElementById("status-open");

const openBtn = document.getElementById("open");
const closedBtn = document.getElementById("closed");
const allBtn = document.getElementById("all");

const issueContainer = document.getElementById("All-Issues-Contenar");
const totalCount = document.getElementById("all-count");

const loader = document.getElementById("loader");
const searchInput = document.getElementById("search-input");


// ==========================
// Global Data
// ==========================

let allIssuesData = [];


// ==========================
// Fetch All Issues
// ==========================

function fetchIssues() {

  loader.classList.remove("hidden");

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => {

      loader.classList.add("hidden");

      allIssuesData = data.data;

      renderIssues(allIssuesData);

    });

}


// ==========================
// Render Issues
// ==========================

function renderIssues(issueArray) {

  issueContainer.innerHTML = "";

  totalCount.innerText = issueArray.length;

  const openIssues = issueArray.filter(issue => issue.status === "open");
  const closedIssues = issueArray.filter(issue => issue.status === "closed");

  statusOpen.innerText = `Open: ${openIssues.length}`;
  statusClosed.innerText = `Closed: ${closedIssues.length}`;

  issueArray.forEach(issue => {

    const div = document.createElement("div");

    div.innerHTML = `

<div class="w-80 h-full bg-white rounded-lg shadow-md border-t-4 
${issue.status === "open" ? "border-green-500" : "border-purple-500"} p-4">

  <div class="flex justify-between items-center mb-3">

     <img src="${
       issue.status === "open"
         ? "./assets/Open-Status.png"
         : "./assets/Closed-Status.png"
     }" class="w-6 h-6" />

    <span class="px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-semibold">
      ${issue.priority}
    </span>

  </div>

  <h2 onclick="openModal(${issue.id})"
  class="font-semibold text-sm mb-1 cursor-pointer hover:underline text-blue-600">
    ${issue.title}
  </h2>

  <p class="text-xs text-gray-500 mb-3">
    ${issue.description}
  </p>

  <div class="flex gap-2 mb-4">

    ${issue.labels
      .map(label => `
      <span class="px-2 py-1 text-xs rounded-full border bg-gray-100">
      ${label}
      </span>
    `)
      .join("")}

  </div>

  <div class="text-xs text-gray-500 space-y-1">
    <p>Author: ${issue.author}</p>
    <p>Created: ${new Date(issue.createdAt).toLocaleDateString()}</p>
  </div>

</div>

`;

    issueContainer.append(div);

  });

}


// ==========================
// Filter Buttons
// ==========================

openBtn.addEventListener("click", () => {

  loader.classList.remove("hidden");

  setTimeout(() => {

    const openIssues = allIssuesData.filter(
      issue => issue.status === "open"
    );

    renderIssues(openIssues);

    loader.classList.add("hidden");

  }, 400);

});


closedBtn.addEventListener("click", () => {

  loader.classList.remove("hidden");

  setTimeout(() => {

    const closedIssues = allIssuesData.filter(
      issue => issue.status === "closed"
    );

    renderIssues(closedIssues);

    loader.classList.add("hidden");

  }, 400);

});


allBtn.addEventListener("click", () => {

  loader.classList.remove("hidden");

  setTimeout(() => {

    renderIssues(allIssuesData);

    loader.classList.add("hidden");

  }, 400);

});


// ==========================
// Active Button Style
// ==========================

document.getElementById("button-con")
.addEventListener("click", function(event){

  const btn = event.target;

  openBtn.classList.remove("btn-primary");
  closedBtn.classList.remove("btn-primary");
  allBtn.classList.remove("btn-primary");

  btn.classList.add("btn-primary");

});


// ==========================
// Search Function
// ==========================

function handleSearch(){

  const searchText = searchInput.value.trim();

  loader.classList.remove("hidden");

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
  .then(res => res.json())
  .then(data => {

    loader.classList.add("hidden");

    renderIssues(data.data);

  });

}


// ==========================
// Start App
// ==========================

fetchIssues();

