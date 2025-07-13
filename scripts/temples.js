let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 

}
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');
if (menuButton && mainNav) {
    menuButton.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    
    if(mainNav.classList.contains('open')) {
        menuButton.textContent= '✖';
    }
    else{
        menuButton.textContent = '☰'; 
    }
});
}