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

//getter for top to bottom icons

const TopBottomIcon = document.querySelector('.TopBottomIcon');
const rootElement = document.querySelector('.rootElement');

// TopBottomIcon.addEventListener('click', () => {
// window.scrollTo({
//           top:0,

//           behavior :'smooth'

//   })
// });

// //scroll nav bar

const nav = document.getElementsByTagName('nav')[0];
let curPos = window.scrollY;
let countdownShowbg = document.querySelector('.countdownShow');
window.addEventListener('scroll', () => {
  let position = window.scrollY;

  if (curPos > position) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-30%';
    nav.style.background = '#209c3bf7';
    nav.children[0].style.height = '3.6rem';
  }
  if (position === 0) {
    nav.children[0].style.height = '5rem';
    nav.style.background =
      'linear-gradient(to bottom left, rgb(17 26 26), transparent)';
  }
  curPos = position;
  if (curPos > 100) {
    TopBottomIcon.style.opacity = 1;
  } else {
    TopBottomIcon.style.opacity = 0;
  }
});

// Counter getter

let countdownShow = document.querySelector('.countdownShow');
let counter = document.querySelectorAll('counter');
let countdowNumber = document.querySelectorAll('.countdown-number');
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
let currActiveId = 0;
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
        el.classList.remove('hide-tab');
      }
    });

    mode.forEach((item, index) => {
      if (!item.classList.contains('hide-tab')) currActiveId = index;
    });
  });
});

tabLinkContainer.forEach((tablink) => {
  tablink.addEventListener('click', (event) => {
    tabLinkContainer.forEach((tabs) => tabs.classList.remove('active-tab'));
    tabLinkContainer[currActiveId].classList.add('active-tab');
  });
});

//Stastistics Section getter

let progress = document.querySelectorAll('.progress');
window.addEventListener('load', (event) => {
  let width1 = 0;

  progress.forEach((item) => {
    setInterval(() => {
      if (width1 < 79) {
        width1++;
      }
    }, 1000);
  });
});

window.addEventListener('load', (e) => {
  fetchStatisticData();
});

//stastics getter
//API Hit from
const APIURl = 'https://api.jsonbin.io/v3/b/65fac355266cfc3fde9b198b';
const APIKey = '$2a$10$BMX3qG3z8V.XTPlimkxsv.ksnfKhiro5oXrETqpCcfIqeFKm9pgWC';

const fetchStatisticData = async (lat, lon) => {
  const response = await fetch(`${APIURl}`, {
    method: 'GET',
    headers: {
      'X-Master-Key':
        '$2a$10$BMX3qG3z8V.XTPlimkxsv.ksnfKhiro5oXrETqpCcfIqeFKm9pgWC',
    },
  });
  const data = await response.json();
  const statstics = data.record.statistics;
  const StasticsObj = [];
  const StastisticsName = [];
  for (let item of statstics) {
    StasticsObj.push(item.value);
    StastisticsName.push(
      item.name.charAt(0).toUpperCase() + item.name.slice(1)
    );
  }

  for (let i = 0; i < progress.length; i++) {
    progress[
      i
    ].innerHTML = `<span>${StastisticsName[i]}</span><span>${StasticsObj[i]}%</span>`;
    progress[i].style.width = `${data.record.statistics[i].value}%`;
  }

  // progress[0].innerHTML = `<span>Ecology</span><span>${StasticsObj.ecology}%</span>`
  // progress[0].style.width = `${data.record.statistics[0].value}%`;
  // progress[1].innerHTML = `<span>Recycling</span><span>${StasticsObj.recycling}%</span>`
  // progress[1].style.width = `${data.record.statistics[0].value}%`;
  // progress[1].innerHTML = `<span>Recycling</span><span>${StasticsObj.recycling}%</span>`
  // progress[1].style.width = `${data.record.statistics[0].value}%`;
};

fetchStatisticData();

// const APIURL =
//   'https://newsapi.org/v2/everything?q=pollution&apiKey=220fd804e6b847eb816942cb53cda1b8';
// const APIKEY = '220fd804e6b847eb816942cb53cda1b8';
// let footerNews = document.querySelector('.footerNews');
// let newsList = document.querySelector('.newsList');

// const fetchNewsData = async () => {
//   const articleTitle = [];
//   const response = await fetch(`${APIURL}`);
//   const newsData = await response.json();
//   for (let i = 0; i < 5; i++) {
//     articleTitle.push(newsData.articles[i].title);
//     newsList.innerHTML += `
              
//              <li class='article'>
//                  ${articleTitle[i].slice(0, 35)}...
              
//                 </li>`;
//   }
// };
// fetchNewsData();
