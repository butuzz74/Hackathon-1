import { Module } from "../core/module";

export class WeatherModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.weatherBox = document.createElement("div");
    this.weatherBox.classList.add("weatherBox");
    if (document.querySelector(".weatherBox")) {
      document.querySelector(".weatherBox").remove();
    }
    this.weatherBox.style.position = "absolute";
    this.weatherBox.style.left = "50px";
    this.weatherBox.style.top = "50px";
    document.body.append(this.weatherBox);
  }

  getWeather(API_response) {
    const latitude = API_response.coords.latitude;
    const longitude = API_response.coords.longitude;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not valid");
        }
        return response.json();
      })
      .then((weatherData) => {
        const currentDay = new Date().getHours();
        const currentWeather =
          weatherData.hourly.temperature_2m[currentDay - 1];
        document.querySelector(
          ".weatherBox"
        ).textContent = `В Вашем городе ${currentWeather} градусов(-а) по Цельсию сейчас`;
      })
      .catch((error) => console.error(error))
      .finally((onFinally) => console.log("finally"));
  }

  removeWeatherBox() {
    document.querySelector(".weatherBox").remove();
  }

  geoPositionHandleError(error){
    document.querySelector('.weatherBox').textContent =`Вы не предоставили доступ`
    console.error('Произошла ошибка при определении геопозиции', error)
  }

  trigger() {
    navigator.geolocation.getCurrentPosition(
      this.getWeather,
      this.geoPositionHandleError
    );
    setTimeout(() => {
      this.removeWeatherBox();
    }, 4000);
  }
}
