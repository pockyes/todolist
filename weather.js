let weather = document.querySelector(".js-weather");


let API_KEY = "623f64a59e11c6535da2ea6c5f5409ff";
let COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
       return response.json();
    }).then(function(json) {
      let temperature = Math.round(json.main.temp);
      let place = json.name;
      weather.innerText = `현재 기온 : ${temperature}°C 
      내 위치 : ${place} `;
    })

}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('error !!');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  let loaedCoords = localStorage.getItem(COORDS);
  if(loaedCoords === null) {
    askForCoords();
  } else {
    let parseCoords = JSON.parse(loaedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();