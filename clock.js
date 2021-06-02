let title = document.querySelector("#title");

let CLICKED_CLASS = 'clicked';

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

let clockContainer = document.querySelector(".js-clock");
let clockTitle = clockContainer.querySelector("h3");

function getDay() {
  let d = new Date();
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = 
  [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
  ];
  let day = new String(d.getDate());
  day = day >= 10 ? day:'0' + day;
  document.write(week[d.getDay()] + '  ' + monthNames[d.getMonth()] + '  ', day + '<br />' );
}

function getTime() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  title.addEventListener("click", handleClick);
  getDay();
  getTime();
  setInterval(getTime, 1000);
}
init();

