import * as helper from './utility.js';

//Weather Icon Functionality

// const toolBar = document.querySelector('.ToolBar');
// const weatherDetails = document.querySelector('.weatherDetails');
// const headerIcons = document.querySelector('.header-icons');

// Api hit  on windowonload

window.addEventListener('load', (event) => {
  helper.getWeather();
});

//getter for weather icon

const detailsOfweather = document.querySelector('.detailsOfweather');
const detailsOfLocation = document.querySelector('.detailsOfLocation');
const rotateIcons = document.querySelector('#rotateArrow');

rotateIcons.addEventListener('click', () => {
  helper.getWeather();
});

//getter for refresh icon

let rotateArrow = document.querySelector('#rotateArrow');
rotateArrow.addEventListener('click', () => {
  rotateArrow.classList.toggle('refresh');
});

//getter for theme mode
let body = document.body;
let theme = document.querySelector('.theme');
theme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

let day = document.querySelector('#day');
let night = document.querySelector('#night');

day.addEventListener('click', () => {
  night.classList.add('show');
  day.classList.remove('show');
  day.classList.add('hide');
  night.classList.remove('hide');

  // day.style.display = 'none'
  // night.style.display = 'block';
});
night.addEventListener('click', () => {
  night.classList.add('hide');
  day.classList.remove('hide');
  day.classList.add('show');
  night.classList.remove('show');
  //  night.style.display = 'none'
  //   day.style.display ='block';
});

//scroll nav bar

const nav = document.getElementsByTagName('nav')[0];
let curPos = window.scrollY;

window.addEventListener('scroll', () => {
  let position = window.scrollY;

  if (curPos > position) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-30%';
  }

  curPos = position;
});
