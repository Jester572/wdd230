const day1 = document.querySelector("#day1 p");
const day2 = document.querySelector("#day2 p");
const day3 = document.querySelector("#day3 p");
const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&APPID=f5e4e7aef73807398685e2946650052b";

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


async function threeApiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const threeData = await response.json();
        // console.log(threeData); // this is for testing the call
        newDisplayResults(threeData);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  function  newDisplayResults(weatherData) {
    const days = []
    const temps = []
    const lowTemps = []
    let iter = 0
    let tMax = 0
    let tMin = 0
    let tempIter = 0
    let dayNum = new Date(weatherData.list[0].dt * 1000).getDay()
    
    for (i = 0; i < weatherData.list.length; i++)  {
        if (dayNum === 7) {
            dayNum = 0;
        }
        if (new Date(weatherData.list[i].dt * 1000).getDay() != new Date().getDay()) {
            if (dayNum == new Date(weatherData.list[i].dt * 1000).getDay()) {
                if (tMax < weatherData.list[i].main.temp_max.toFixed(0)) {
                    tMax = weatherData.list[i].main.temp_max.toFixed(0)
                }
                if (tMin > weatherData.list[i].main.temp_min.toFixed(0) || tMin == 0) {
                    tMin = weatherData.list[i].main.temp_min.toFixed(0)
                    // console.log(weatherData.list[i].main.temp_min.toFixed(0))
                }
                days[iter - 1] = new Date(weatherData.list[i].dt * 1000).getDay()             
                
            } else {
                if (tMax == 0 && tMin == 0) {
                    dayNum ++
                    iter ++
                    
                } else {
                    
                    // console.log(tMin)
                    temps[tempIter] = tMax
                    lowTemps[tempIter] = tMin
                    tempIter ++
                    
                }
                tMax = 0
                tMin = 0                         
            }        
        }
    }
    console.log(days)
    // console.log(temps)
    // console.log(lowTemps)
    day1.innerHTML = `<pre><strong>${getDayOfWeek(days[0])} High:${temps[0]}&deg;F  Low:${lowTemps[0]}&deg;F</strong></pre>`
    day2.innerHTML = `<pre><strong>${getDayOfWeek(days[1])} High:${temps[1]}&deg;F  Low:${lowTemps[1]}&deg;F</strong></pre>`
    day3.innerHTML = `<pre><strong>${getDayOfWeek(days[2])} High:${temps[2]}&deg;F  Low:${lowTemps[2]}&deg;F</strong></pre>`


  }
  function getDayOfWeek (dt) {
    let dayOfWeek = daysOfWeek[dt];
    console.log(dayOfWeek);
    return dayOfWeek.padEnd(8);
  }
  
  threeApiFetch();