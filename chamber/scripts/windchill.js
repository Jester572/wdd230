let temperature = document.querySelector("#temp");
const windSpeed = document.querySelector("#windSpeed");
const chillDiv = document.querySelector("#windChill");

let windChill = 35.74 + (0.6215 * temperature.innerHTML) - (35.755 * windSpeed.innerHTML ** 0.16) + 0.4275 * temperature.innerHTML * windSpeed.innerHTML ** 0.16;
console.log(windChill);
if (temperature.innerHTML <= 50 && windSpeed.innerHTML > 3) {
    chillDiv.textContent = windChill.toFixed(1) + " °F";
} else {
    chillDiv.textContent = "N/A";
}


