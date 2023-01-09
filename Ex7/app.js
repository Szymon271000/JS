let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

const cities = [];

function showCities() {
    console.log(cities);
    document.querySelectorAll(".city").forEach(city => city.remove());
    cities.forEach((city) => {
        let cityToDisplay = 
        
        `<div class="city">
        <h2>${city.name}</h2>
        <h4 class="weather">${city.weather}</h4>
        <h4 class="weather">${city.description}</h4>
        <img src="https://openweathermap.org/img/w/${city.icon}.png">
        <h1>${city.mainTemp} &#176;C</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${city.minTemp}</h4>
            </div>
            <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${city.maxTemp}</h4>
            </div>
        </div>
        </div>`;
        result.insertAdjacentHTML("afterend", cityToDisplay);
    })
}

showCities();

//Function to fetch weather details from api and display them
let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length === 0) {
        result.innerHTML=`<h3 class="msg">Please enter a city name</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        cityRef.value = "";
        fetch(url).then((resp) => resp.json())
        .then(data => {
            let cityName = data.name;
            let cityWeather = data.weather[0].main;
            let cityDescription = data.weather[0].description;
            let cityIconSrc = data.weather[0].icon;
            let cityDataMainTemp = data.main.temp;
            let cityDataMainTempMin = data.main.temp_min;
            let cityDataMainTempMax = data.main.temp_max;

            let city = {
                name: cityName,
                weather: cityWeather,
                description: cityDescription,
                icon: cityIconSrc,
                mainTemp: cityDataMainTemp,
                minTemp: cityDataMainTempMin,
                maxTemp: cityDataMainTempMax
            };
            const found = cities.some(el => el.name === city.name);
            if(found === true)
            {
                result.innerHTML = '<h3 class="msg">You already have this city</h3>'
                return; 
            }
            if(found === false){
                result.innerHTML = '';
                cities.push(city);
                localStorage.setItem("cities", JSON.stringify(cities));
                if (cities.length > 10) {
                    result.innerHTML = '<h3 class="msg">Max 10 cities</h3>'
                    return;
                }
                showCities();
            }
        })
        .catch(() => {
            result.innerHTML = '<h3 class="msg">City not found</h3>'
        })
    }
    
}

searchBtn.addEventListener("click", getWeather);




