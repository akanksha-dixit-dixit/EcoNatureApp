export const sum = (a, b) => {
  return a + b;
};

//Fetching weather
const detailsOfweather = document.querySelector('.detailsOfweather');
const detailsOfLocation = document.querySelector('.detailsOfLocation');
const rotateIcons = document.querySelector('#rotateArrow');
const APIKey = '34ea5b767fd0a6b704c9b976a2b57631';
const APIUrl = 'https://api.openweathermap.org/data/2.5/weather';


const fetchWeather = async (lat, lon) => {
  const response = await fetch(
    `${APIUrl}?appid=${APIKey}&lat=${lat}&lon=${lon}&units=metric`
  );
  const data= await response.json();
  // console.log(rest);
  detailsOfLocation.innerHTML = data.name;
  detailsOfweather.innerHTML =  `${data.main.temp} &deg;C`;

};

export const getWeather = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    fetchWeather(lat, lon);
  });
};
