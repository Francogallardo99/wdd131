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
    name: "The Legend of Zelda: Breath of the Wild",
    averagerating: 4.5
  },
  {
    name: "Red Dead Redemption 2",
    averagerating: 4.7
  },
  {
    name: "The Last of Us Parte II",
    averagerating: 3.5
  },
  {
    name: "God of War (2018)",
    averagerating: 3.9
  },
  {
    name: "Uncharted 4: El Desenlace del Ladrón",
    averagerating: 5.0
  },
  {
    name: "DOOM Eternal",
    averagerating: 4.0
  },
  {
    name: "Call of Duty: Modern Warfare (2019)",
    averagerating: 4.5
  },
  {
    name: "Titanfall 2",
    averagerating: 3.5
  },
  {
    name: "Overwatch 2",
    averagerating: 5.0
  },
  {
    name: "Apex Legends",
    averagerating: 5.0
  },
  {
    name: "Resident Evil 7: Biohazard",
    averagerating: 5.0
  },
  {
    name: "Alien: Isolation",
    averagerating: 5.0
  },
  {
    name: "Outlast",
    averagerating: 5.0
  },
  {
    name: "Amnesia: The Dark Descent",
    averagerating: 5.0
  },
  {
    name: "Dead Space (Remake)",
    averagerating: 5.0
  },
  {
    name: "EA Sports FC 24",
    averagerating: 5.0
  },
  {
    name: "NBA 2K24",
    averagerating: 5.0
  },
  {
    name: "Gran Turismo 7",
    averagerating: 5.0
  },
  {
    name: "MLB The Show 23",
    averagerating: 5.0
  },
  {
    name: "Tony Hawk's Pro Skater 1 + 2",
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
    reviewCounterElement.textContent = `Total Recomendations: ${counter}`;
}

