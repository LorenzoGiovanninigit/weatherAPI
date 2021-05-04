//selctor and variables
const cont = document.getElementById("container");
const city = document.getElementById("cityInput");
const sub = document.getElementById("btn");
const display = document.getElementById("box-temp");
const weather = document.getElementById("box-weather");

//get meteo function
async function getMeteo() {
  let cityInput = city.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=312ec4308b49eb2608b97eb87fc8f9c6`
  );
  const fettched = await response.json();
  const desc = fettched.weather[0].description;
  const temps = fettched.main.feels_like;
  display.textContent = `${temps} C`;
  weather.textContent = `${desc}`;
}

//calling the function on submit

sub.onclick = getMeteo;
