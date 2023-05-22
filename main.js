'use strict';

let searchBar = document.querySelector('.search-bar');
const weather = {
  apiKey: 'a963500af338b65e104bb20a03f25eea',

  async fetchWeather(city) {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    );

    const data = await resp.json();
    this.displayWeather(data);
  },
  displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector('.city').innerText = `Weather in ${name}`;

    // prettier-ignore
    document.querySelector('.icon').src = 
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // prettier-ignore
    const tempEl = (document.querySelector('.temp').innerText = 
    `${temp.toFixed(1)} °C`);

    // prettier-ignore
    document.querySelector('.description').innerText = 
    `${description}`

    // prettier-ignore
    document.querySelector('.humidity').innerText = 
    `Humidity: ${humidity}%`;

    // prettier-ignore
    document.querySelector('.wind').innerText = 
    `Wind speed: ${speed.toFixed(2)} km/h`;

    // prettier-ignore
    document.querySelector('.weather').classList.remove('loading')
  },
  search() {
    if (searchBar.value) {
      weather.fetchWeather(document.querySelector('.search-bar').value);
    } else {
      alert('Type city in the search field!');
    }
  },
};

function loadBg() {
  const APIurl = `https://api.unsplash.com/photos/random/?client_id=b-crA5JSwx4vt7vCL6Nq7Qq2Ml00XkYHHM9Cva-lC1E`;

  async function getRandomWallpaper(APIurl, ...topic) {
    const resp = await fetch(`${APIurl}&query=${topic}`);
    const data = await resp.json();

    document.body.style.backgroundImage = `url(${data.urls.full})`;
  }

  window.addEventListener('load', getRandomWallpaper(APIurl, 'nature'));
}

loadBg();

document.querySelector('button').addEventListener('click', () => {
  weather.search();
});

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    weather.search();
  }
});
