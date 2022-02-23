let myLeads = []
const buttonEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const unorderedListEl = document.getElementById("ul-el");
const deleteBtnEl = document.getElementById("delete-el")

const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) //string to array

if (myLeadsFromLocalStorage) {
    myLeads = myLeadsFromLocalStorage   
    render(myLeads)
};

function render(leads) {
let listItem = ""
for (i = 0; i < leads.length; i++) {

    listItem += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
    </li>`
    
}   //target='_blank' to open link in a new tab
unorderedListEl.innerHTML = listItem //dom minupulation outside for loop is better
}

buttonEl.addEventListener("click", () => { // this way is cleaner on HTML file
    console.log("clicked")
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

deleteBtnEl.addEventListener("dblclick", () => {
    console.log("dbclicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})







