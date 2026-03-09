const statusClosed = document.getElementById("status-closed");
const statusOpen = document.getElementById("status-open");

const openBtn = document.getElementById("open");
const closedBtn = document.getElementById("closed");
const allBtn = document.getElementById("all");

const issueContainer = document.getElementById("All-Issues-Contenar");
const totalCount = document.getElementById("all-count");

const loader = document.getElementById("loader");
const searchInput = document.getElementById("search-input");


// Modal Elements

const modal = document.getElementById("issue-modal");
const modalTitle = document.getElementById("modal-title");
const modalStatus = document.getElementById("modal-status");
const modalAuthor = document.getElementById("modal-author");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");
const modalAssignee = document.getElementById("modal-assignee");
const modalPriority = document.getElementById("modal-priority");
const modalLabels = document.getElementById("modal-labels");


let allIssuesData = [];



function fetchIssues(){

loader.classList.remove("hidden");

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res=>res.json())
.then(data=>{

loader.classList.add("hidden");

allIssuesData = data.data;

renderIssues(allIssuesData);

});

}



function renderIssues(issueArray){

issueContainer.innerHTML = "";

totalCount.innerText = issueArray.length;

const openIssues = issueArray.filter(issue=>issue.status==="open");
const closedIssues = issueArray.filter(issue=>issue.status==="closed");

statusOpen.innerText = `Open: ${openIssues.length}`;
statusClosed.innerText = `Closed: ${closedIssues.length}`;

issueArray.forEach(issue=>{

const div = document.createElement("div");

div.innerHTML = `

<div onclick="openModal(${issue.id})"
class="w-80 h-full bg-white rounded-lg shadow-md border-t-4 
${issue.status==="open"?"border-green-500":"border-purple-500"} p-4 cursor-pointer">

<div class="flex justify-between items-center mb-3">

<img src="${
issue.status==="open"
?"./assets/Open-Status.png"
:"./assets/Closed- Status .png"
}" class="w-6 h-6"/>

<span class="px-3 py-1 rounded-full bg-red-100 text-red-500 text-xs font-semibold">
${issue.priority}
</span>

</div>

<h2 class="font-semibold text-sm mb-1 text-blue-600">
${issue.title}
</h2>

<p class="text-xs text-gray-500 mb-3">
${issue.description}
</p>

<div class="flex gap-2 mb-4">

${issue.labels.map(label=>`
<span class="px-2 py-1 text-xs rounded-full border bg-gray-100">
${label}
</span>
`).join("")}

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



openBtn.addEventListener("click",()=>{

const openIssues = allIssuesData.filter(issue=>issue.status==="open");

renderIssues(openIssues);

});


closedBtn.addEventListener("click",()=>{

const closedIssues = allIssuesData.filter(issue=>issue.status==="closed");

renderIssues(closedIssues);

});


allBtn.addEventListener("click",()=>{

renderIssues(allIssuesData);

});



document.getElementById("button-con")
.addEventListener("click",function(event){

const btn = event.target;

openBtn.classList.remove("btn-primary");
closedBtn.classList.remove("btn-primary");
allBtn.classList.remove("btn-primary");

btn.classList.add("btn-primary");

});



function handleSearch(){

const text = searchInput.value.trim();

fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
.then(res=>res.json())
.then(data=>{

renderIssues(data.data);

});

}



function openModal(id){

fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
.then(res=>res.json())
.then(data=>{

const issue = data.data;

modalTitle.innerText = issue.title;

modalStatus.innerText =
issue.status==="open"?"Opened":"Closed";

modalAuthor.innerText =
"Opened by "+issue.author;

modalDate.innerText =
new Date(issue.createdAt).toLocaleDateString();

modalDescription.innerText =
issue.description;

modalAssignee.innerText =
issue.assignee || "Unassigned";

modalPriority.innerText =
issue.priority;

modalLabels.innerHTML="";

issue.labels.forEach(label=>{

const span=document.createElement("span");

span.className="px-2 py-1 text-xs border rounded";

span.innerText=label;

modalLabels.append(span);

});

modal.classList.remove("hidden");

});

}


function closeModal(){

modal.classList.add("hidden");

}



fetchIssues();