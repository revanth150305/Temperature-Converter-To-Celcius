const celsiusElem = document.querySelector("#celsius");
const fahrenheitElem = document.querySelector("select #fahrenheit");
const kelvinElem = document.querySelector("select #kelvin");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#type");

window.addEventListener("load", () => {
  degree.value = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getCelsiusValue();
});

function getCelsiusValue() {
  let inputValue = degree.value;

  if (tempType.value == "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(4)} &deg;c`;
  } else if (tempType.value == "kelvin") {
    const KelvinToCelsius = inputValue - 273;
    celsiusElem.innerHTML = `${KelvinToCelsius} &deg;c`;
  }
}
