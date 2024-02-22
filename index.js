import * as helper from './utility.js';

//Weather Icon Functionality

// const toolBar = document.querySelector('.ToolBar');
// const weatherDetails = document.querySelector('.weatherDetails');
// const headerIcons = document.querySelector('.header-icons');

// Api hit  on windowonload

window.addEventListener('load', async (event) => {
  helper.getWeather();
});

//getter for weather icon

const detailsOfweather = document.querySelector('.detailsOfweather');
const detailsOfLocation = document.querySelector('.detailsOfLocation');
const rotateIcons = document.querySelector('#rotateArrow');

rotateIcons.addEventListener('click', () => {
  helper.getWeather();
});



