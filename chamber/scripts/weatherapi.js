// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon img');
const captionDesc = document.querySelector('figcaption');
const tempHigh = document.querySelector('#tempHigh');
const tempLow = document.querySelector('#tempLow');
const wind = document.querySelector('#windSpeed');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&APPID=f5e4e7aef73807398685e2946650052b";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    tempHigh.innerHTML = `<strong>${weatherData.main.temp_max.toFixed(0)}</strong>`;
    tempLow.innerHTML = `<strong>${weatherData.main.temp_min.toFixed(0)}</strong>`;
    wind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
  
  apiFetch();