
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
    const staticCondition = "cloudy"; 

    const temperatureElement = document.getElementById('temperatureValue');
    const conditionElement = document.getElementById('conditionValue');
    const windSpeedElement = document.getElementById('windSpeedValue');
    const windChillElement = document.getElementById('windChillValue');

    if (temperatureElement) {
        temperatureElement.textContent = `${staticTemperatureC}°C`;
        console.log("Temperature displayed in HTML:", temperatureElement.textContent);
    }
    if (conditionElement) {
        conditionElement.textContent = staticCondition;
        console.log("Condition displayed in HTML:", conditionElement.textContent);
    }
    if (windSpeedElement) {
        windSpeedElement.textContent = `${staticWindSpeedKmh} Km/h`;
        console.log("Wind speed displayed in HTML:", windSpeedElement.textContent);
    }
    if (windChillElement) {

        const windChillResult = calculateWindChill(staticTemperatureC, staticWindSpeedKmh);
        
        console.log("Wind Chill calculation result:", windChillResult);

        if (windChillResult !== null) { 
            windChillElement.textContent = `${windChillResult}°C`;
        } else { 
            windChillElement.textContent = `N/A`;
        }
    } else {
        console.warn("Item with ID 'windChillValue' not found. Wind chill could not be displayed.");
    }

function calculateWindChill(tempC, windKmh) {

    if (tempC <= 10 && windKmh > 4.8) {

        const windChillC = 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKmh, 0.16)) + (0.3965 * tempC * Math.pow(windKmh, 0.16));

        return windChillC.toFixed(1);
    } else {
        return null; 
    }
}