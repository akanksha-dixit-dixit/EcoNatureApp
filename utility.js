export const sum = (a, b) => {
  return a + b;
};

//Fetching weather
const APIKey = '34ea5b767fd0a6b704c9b976a2b57631';
const APIUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const userAction = async (lat, lon) => {
  const response = await fetch(
    `${APIUrl}&appid=${APIKey}?lat=${lat}?lon=${lon}`
  );
  const myJson = await response.json(); //extract JSON from the http response
};

const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
const success = (pos) => {
  const crd = pos.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;

  userAction(lat, lon);
};
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
navigator.geolocation.getCurrentPosition(success, error, options);
