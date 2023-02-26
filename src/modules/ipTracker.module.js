import { Module } from "../core/module";
import { validateIP } from "../utils";

export class IPTracer extends Module {
  #template;
  constructor(type, text) {
    super(type, text)

    this.#template = this.renderTemplate();
    document.body.insertAdjacentHTML("afterbegin", this.#template);

    this.ipInput = document.querySelector(".search-bar__input");
    this.btn = document.querySelector(".search-bar__btn");
    this.ipInfo = document.querySelector("#ip");
    this.locationInfo = document.querySelector("#location");
    this.timezoneInfo = document.querySelector("#timezone");
    this.ispInfo = document.querySelector("#isp");
    this.close = document.querySelector(".close");
    this.finder = document.querySelector(".finder");

  }


  setInfo(data) {
    
      this.ipInfo.textContent = data.ip;
      this.ispInfo.textContent = data.isp;
      this.locationInfo.textContent = data.country_name + " " + data.city;
      this.timezoneInfo.textContent = data.time_zone.current_time;
    
  }


  getData() {
    const isValidIP = validateIP(this.ipInput.value)
    if (isValidIP) {
      try {
        const getResponse = async () => {
          const response = await fetch(
            `https://api.ipgeolocation.io/ipgeo?apiKey=c80339b91d1c472e9712e18465878ce0&ip=${this.ipInput.value}`
          );
          if(!response.ok){
            throw new Error ('Ошибка загрузки')
          }
          const result = await response.json();              
          this.setInfo(result);
        };
        getResponse();            

      } catch (error) {
        console.error('Error', error)
      }
    }
      
    
  };
   
  handleKey(event) {
    if (event.key === "Enter") {
      this.getData();
    }
  }
  
  handleClose() {
    this.finder.remove();
    this.close.remove();
    this.btn.removeEventListener("click", this.getData);
    this.ipInput.removeEventListener("keydown", this.handleKey);
    this.close.removeEventListener("click", this.handleClose);
  }

  trigger() {
  

   
    this.ipInput.addEventListener("keydown", this.handleKey.bind(this));
    this.btn.addEventListener("click", this.getData.bind(this));
    this.close.addEventListener("click", this.handleClose.bind(this));

  
    
   
  }
  
  renderTemplate() {
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
}
