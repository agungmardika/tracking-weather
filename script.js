const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector("#input-keyword");

searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputKeyword.value +
      "&appid=7589d0b96634ec6c634eca41b16808ca&units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      let result = document.querySelector(".result");

      result.innerHTML = `<h2 class="text-xl font-semibold mb-2" id="location">${response.name}, ${response.sys.country}</h2>
                <p class="text-lg mb-1"><span class="temp text-2xl">${response.main.temp}°С</span> <span class="condition">${response.weather[0].description}</span></p>
                <p class="mb-2">Temperature from <span id="temp-min">${response.main.temp_min}°С</span> to <span id="temp-max">${response.main.temp_max}°С</span></p>
                <p class="mb-1">Wind Speed: <span id="wind-speed">${response.wind.speed}m/s</span></p>
                <p class="mb-1">Clouds: <span id="clouds">${response.clouds.all}%</span></p`;
    });
  inputKeyword.value = null;
});
