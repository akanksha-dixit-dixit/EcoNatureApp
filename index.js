import { sum, userAction } from './utility.js';

//Weather Icon Functionality

const toolBar = document.querySelector('.ToolBar');
const weatherDetails = document.querySelector('.weatherDetails');
const headerIcons = document.querySelector('.header-icons');

// Api hit  on windowonload

window.addEventListener('load', async (event) => {
  userAction();
});
