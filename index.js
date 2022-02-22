// function saveInput() {
//     console.log("button clicked")
// }

let myLeads = ["www.google.com", "www.facebook.com", "www.youtube.com"]
const buttonEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const unorderedListEl = document.getElementById("ul-el");


buttonEl.addEventListener("click", () => { // this way is cleaner on HTML file
    for (i = 0; i < myLeads.length; i++) {
        // myLeads.push(inputEl.value)
        console.log(myLeads[i])
        unorderedListEl.innerHTML += "<li>" + myLeads[i] + "</li> " // add html tags in JS
    }
}); 




