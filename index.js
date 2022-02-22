// function saveInput() {
//     console.log("button clicked")
// }

let myLeads = []
const buttonEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const unorderedListEl = document.getElementById("ul-el");


buttonEl.addEventListener("click", () => { // this way is cleaner on HTML file
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    renderLeads()
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





