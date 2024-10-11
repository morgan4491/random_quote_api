// Add an input to the page that the user can type a city into

// When they submit or hit a button, you should grab the city they typed and make a request to the weather api to get the current weather by that city name

// Once you have the weather data, output the current temp, wind speed and humidity
const cityForm = document.querySelector('#city-form');

function outputWeatherData(weatherData) {
    const cityOutput = document.querySelector('#city-name');
    const tempOutput = document.querySelector('#temp');
    const windOutput = document.querySelector('#wind');
    const humidityOutput = document.querySelector('#humidity');

    cityOutput.textContent = weatherData.name;
    tempOutput.textContent = `Temperature: ${Math.round(weatherData.main.temp)}°F`;
    windOutput.textContent = weatherData.wind.speed;
    humidityOutput.textContent = weatherData.main.humidity;

    console.log(weatherData);
}

async function getWeatherData(eventObj) {
    eventObj.preventDefault();

    const apiKey = '01b957818c63901e03654fe7ca33d042';

    const cityInput = document.querySelector<HTMLInputElement>('#city');


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=` + apiKey;

    const resObject = await fetch(url);
    const data = await resObject.json();

    outputWeatherData(data);
}

cityForm.addEventListener ('submit', getWeatherData)

// getWeatherData();


async function getStarWarsData() {
    const resObject = await fetch('https://swapi.dev/api/people');

    const data = await resObject.json();

    console.log(data);
}

// getStarWarsData();