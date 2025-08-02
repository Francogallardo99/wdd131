let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 
}

let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectElement = document.getElementById("products");

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        
        option.textContent = product.name;
        
        option.value = product.id;
        
        selectElement.appendChild(option);
    });
} else {
    console.error("No se pudo encontrar el elemento con ID 'products'.");
}
let counter = localStorage.getItem('reviewCounter');
if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}
counter++;

localStorage.setItem('reviewCounter', counter);
const reviewCounterElement = document.getElementById('reviewCounter');
if (reviewCounterElement) {
    reviewCounterElement.textContent = `Total Reviews: ${counter}`;
}