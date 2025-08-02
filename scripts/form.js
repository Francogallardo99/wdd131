let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 
}

let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

const products = ["Laptop", "Mouse", "Mousepad", "PenDrive", "Webcam" , "Headset", "Monitor", "Keyboard", "Printer", "Speakers" , "Smartphone", "Tablet", "Smartwatch", "External Hard Drive", "USB Hub", "Graphics Card", "Motherboard", "RAM", "Power Supply", "Cooling System"];

const selectElement = document.getElementById("products");

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        
        option.textContent = product;
        
        option.value = product;
        
        selectElement.appendChild(option);
    });
} else {
    console.error("No se pudo encontrar el elemento con ID 'products'.");
}