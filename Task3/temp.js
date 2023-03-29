let celsiusContainer = document.getElementById("celsiusContainer");
let fahrenheitContainer = document.getElementById("fahrenheitContainer");
let kelvinContainer = document.getElementById("kelvinContainer");

function celsiusConverter() {
    celsiusContainer.classList.remove("d-none");
    fahrenheitContainer.classList.add("d-none");
    kelvinContainer.classList.add("d-none");

    let celsiusInputValue = document.getElementById("celsiusInputValue");
    let fahrenheitSpan = document.getElementById("fahrenheitSpan");
    let kelvinSpan = document.getElementById("kelvinSpan");
    let numValue = parseFloat(celsiusInputValue.value);
    fahrenheitSpan.textContent = ((numValue * 1.8) + 32).toFixed(2);
    kelvinSpan.textContent = (numValue + 273.15).toFixed(2);
}

function fahrenheitConverter() {
    celsiusContainer.classList.add("d-none");
    fahrenheitContainer.classList.remove("d-none");
    kelvinContainer.classList.add("d-none");

    let fahrenheitInputValue = document.getElementById("fahrenheitInputValue");
    let celsiusSpan = document.getElementById("celsiusSpan");
    let kelvinSpan2 = document.getElementById("kelvinSpan2");
    let numValue = parseFloat(fahrenheitInputValue.value);
    celsiusSpan.textContent = ((numValue - 32) * (5 / 9)).toFixed(2);
    kelvinSpan2.textContent = ((numValue + 459.67) * (5 / 9)).toFixed(2);
}

function kelvinConverter() {
    celsiusContainer.classList.add("d-none");
    fahrenheitContainer.classList.add("d-none");
    kelvinContainer.classList.remove("d-none");

    let kelvinInputValue = document.getElementById("kelvinInputValue");
    let celsiusSpan2 = document.getElementById("celsiusSpan2");
    let fahrenheitSpan2 = document.getElementById("fahrenheitSpan2");

    let numValue = parseFloat(kelvinInputValue.value);
    celsiusSpan2.textContent = (numValue - 273.15).toFixed(2);
    fahrenheitSpan2.textContent = ((numValue - 273.15) * (9 / 5) + 32).toFixed(2);
}

let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
console.log(Celsius.ischecked);

function temperatureConverter() {
    if (Celsius.ischecked === true) {
        console.log("Celsius is clicked");
    }
}