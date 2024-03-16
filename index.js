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

// //scroll nav bar

const nav = document.getElementsByTagName('nav')[0];
let curPos = window.scrollY;
let countdownShowbg = document.querySelector('.countdownShow')
window.addEventListener('scroll', () => {
  let position = window.scrollY;
  countdownShowbg.style.backgroundPosition = `50% ${curPos}px`
  if (curPos > position) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-30%';
    nav.style.background = '#209c3bf7';
    nav.children[0].style.height = '5rem';
  }
  if (position === 0) {
    nav.children[0].style.height = '3.6rem';
    nav.style.background =
      'linear-gradient(to bottom left, rgb(17 26 26), transparent)';
  }
  curPos = position;
});

//services Submenu

// const services = document.querySelector('.services');
// services.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (event.currentTarget.children[2].style.display === 'block') {
//     event.currentTarget.children[2].style.display = 'none';
//   } else {
//     event.currentTarget.children[2].style.display = 'block';
//   }
// });

// Counter getter

let countdownShow = document.querySelector('.countdownShow');
let counter = document.querySelectorAll('counter');
let countdowNumber = document.querySelectorAll('.countdown-number');
console.log(countdowNumber);
let countervalue1 = 0;
let countervalue2 = 0;
let countervalue3 = 0;
let countervalue4 = 0;
window.addEventListener('load', (e) => {
  setInterval(() => {
    if (countervalue1 < 3600) {
      countervalue1++;
      countdowNumber[0].innerHTML = countervalue1;
    }
  }, 5);

  setInterval(() => {
    if (countervalue2 < 12000) {
      countervalue2++;
      countdowNumber[1].innerHTML = countervalue2;
    }
  }, 5);

  setInterval(() => {
    if (countervalue3 < 680) {
      countervalue3++;
      countdowNumber[2].innerHTML = countervalue3;
    }
  }, 50);

  setInterval(() => {
    if (countervalue4 < 460) {
      countervalue4++;
      countdowNumber[3].innerHTML = countervalue4;
    }
  }, 100);
});

//Advantages section getter

let tabLinkContainer = document.querySelectorAll('.tab_link_container');
let mode = document.querySelectorAll('.mode');
tabLinkContainer.forEach((tablink) => {
  tablink.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target.getAttribute('data-target');
    mode.forEach((el) => {
      let clickTabId = el.getAttribute('id');
      el.classList.add('hide-tab');
      if (clickTabId === target) {
        el.classList.remove('hide-tab')      
      }
    });
  });
});
