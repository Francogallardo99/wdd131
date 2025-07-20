
let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 

}
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;


const staticTemperatureC = 5;
const staticWindSpeedKmh = 15;
const staticCondition = "Cloudy"; 

const temperatureElement = document.getElementById('temperatureValue');
const conditionElement = document.getElementById('conditionValue');
const windSpeedElement = document.getElementById('windSpeedValue');
const windChillElement = document.getElementById('windChillValue');

temperatureElement.textContent = `${staticTemperatureC}°C`;

conditionElement.textContent = staticCondition;

windSpeedElement.textContent = `${staticWindSpeedKmh} Km/h`;

if (windChillElement) {

    const windChillResult = calculateWindChill(staticTemperatureC, staticWindSpeedKmh);
        
    console.log("Wind Chill calculation result:", windChillResult);

    if (windChillResult !== null) { 
        windChillElement.textContent = `${windChillResult}°C`;
    } else { 
        windChillElement.textContent = `N/A`;
    }
} 

function calculateWindChill(tempC, windKmh) {

    if (tempC <= 10 && windKmh > 4.8) {

        const windChillC = 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKmh, 0.16)) + (0.3965 * tempC * Math.pow(windKmh, 0.16));

        return windChillC.toFixed(1);
    } else {
        return null; 
    }
}