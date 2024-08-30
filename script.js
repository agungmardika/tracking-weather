const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector("#input-keyword");
const result = document.querySelector(".result");

searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputKeyword.value +
    "&appid=7589d0b96634ec6c634eca41b16808ca&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == 404 || data.cod == 400) {
        document.querySelector("#errors").innerHTML = data.message;
        result.innerHTML = null;
      }
      result.innerHTML = `<h2 class="text-xl font-semibold mb-2" id="location">${data.name}, ${data.sys.country}</h2>
                <p class="text-lg mb-1"><span class="temp text-2xl">${data.main.temp}°С</span> <span class="condition">${data.weather[0].description}</span></p>
                <p class="mb-2">Temperature from <span id="temp-min">${data.main.temp_min}°С</span> to <span id="temp-max">${data.main.temp_max}°С</span></p>
                <p class="mb-1">Wind Speed: <span id="wind-speed">${data.wind.speed}m/s</span></p>
                <p class="mb-1">Clouds: <span id="clouds">${data.clouds.all}%</span></p`;
      document.querySelector("#errors").innerHTML = null;
    });
  inputKeyword.value = null;
});
