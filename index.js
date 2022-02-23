// function saveInput() {
//     console.log("button clicked")
// }

let myLeads = []

// localStorage.setItem("herLead","Amazon.com")  
// console.log(localStorage.getItem("herLead"))
// localStorage.clear

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.newwebsite.com")

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

const buttonEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const unorderedListEl = document.getElementById("ul-el");

const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(myLeadsFromLocalStorage)
if (myLeadsFromLocalStorage) {
    myLeads = myLeadsFromLocalStorage   
    renderLeads()
};

buttonEl.addEventListener("click", () => { // this way is cleaner on HTML file
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
let listItem = ""
for (i = 0; i < myLeads.length; i++) {
    // unorderedListEl.innerHTML += "<li>" + myLeads[i] + "</li> " // add html tags in JS
    // can also be done: 1. Create element, 2. set text content, 3. append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // unorderedListEl.append(li)
    //refactor the list items: 1. let listItem, 2. Add items to listItem as strings, and 3. render

    //listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    //use backticks for string literals for cleaner look

    listItem += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
    </li>`
    
}   //target='_blank' to open link in a new tab
unorderedListEl.innerHTML = listItem //dom minupulation outside for loop is better
}





