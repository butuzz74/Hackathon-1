import { Module } from "../core/module";

export class GetIPAdress extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    function validateIP(ip) {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          ip
        )
      ) {
        return true;
      }
      alert("You have entered an invalid IP address!");
      return false;
    }
    function render() {
      return `
    <span class="close">&times;</span>
    <div class="finder">
      <h1 class="title">IP Address Tracker</h1>
      <div class="search-bar">
        <input class="search-bar__input" type="text" placeholder="Search for any IP address or domain">
        <button class="search-bar__btn"></button>
      </div>
      <div class="info">
        <div class="info__block">
          <div class="info__block-subtitle">IP Adress</div>
          <div class="info__block-title" id="ip"></div>
        </div>
        <div class="info__block">
          <div class="info__block-subtitle">Location</div>
          <div class="info__block-title" id="location"></div>
        </div>
        <div class="info__block">
          <div class="info__block-subtitle">Timezone</div>
          <div class="info__block-title">UTC <span id="timezone"></span></div>
        </div>
        <div class="info__block">
          <div class="info__block-subtitle">ISP</div>
          <div class="info__block-title" id="isp"></div>
        </div>
      </div>
    </div>
    `;
    }
    document.body.insertAdjacentHTML("afterbegin", render());
    const ipInput = document.querySelector(".search-bar__input");
    const btn = document.querySelector(".search-bar__btn");

    const ipInfo = document.querySelector("#ip");
    const locationInfo = document.querySelector("#location");
    const timezoneInfo = document.querySelector("#timezone");
    const ispInfo = document.querySelector("#isp");
    const close = document.querySelector(".close");
    const finder = document.querySelector(".finder");

    btn.addEventListener("click", getData);
    ipInput.addEventListener("keydown", handleKey);
    close.addEventListener("click", handleClose);

    function getData() {
      console.log(ipInput.value);
      if (validateIP(ipInput.value)) {
        const a = async () => {
          const response = await fetch(
            `https://api.ipgeolocation.io/ipgeo?apiKey=c80339b91d1c472e9712e18465878ce0&ip=${ipInput.value}`
          );
          const result = await response.json();
          setInfo(result);
        };
        a();
      }
    }
    function handleKey(event) {
      if (event.key === "Enter") {
        getData();
      }
    }

    function setInfo(mapData) {
      ipInfo.textContent = mapData.ip;
      ispInfo.textContent = mapData.isp;
      locationInfo.textContent = mapData.country_name + " " + mapData.city;
      timezoneInfo.textContent = mapData.time_zone.current_time;
    }
    function handleClose() {
      finder.remove();
      close.remove();
      btn.removeEventListener("click", getData);
      ipInput.removeEventListener("keydown", handleKey);
      close.removeEventListener("click", handleClose);
    }
  }
}
