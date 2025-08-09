
let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 

}
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

const nav = document.querySelector("#nav");
const open = document.querySelector("#menu"); 
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("nav-visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("nav-visible"); 
});