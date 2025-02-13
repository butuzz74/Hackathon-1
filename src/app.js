import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import { ShapeModule } from "./modules/shape.module";
import { AudioModule } from "./modules/audionmodule";
import { WeatherModule } from "./modules/weather";
import { FlyingCat } from "./modules/flyingcat";
import { CustomMessageModule } from "./modules/custommessage.module";
import { PlayerModule } from "./modules/player.module";
import { IPTracer } from "./modules/ipTracker.module";

class App {
 #contextMenu
 constructor(){
  this.#contextMenu = new ContextMenu(".menu")
  
    
    this.#contextMenu.add("background", "Изменить цвет фона");
    this.#contextMenu.add("countclick", "Аналитика кликов");
    this.#contextMenu.add("timer", "Таймер отсчета")
    this.#contextMenu.add("shapes", "Создать случайную фигуру")
    this.#contextMenu.add("sounds", "Создать случайный звук")
    this.#contextMenu.add("weather", "Узнать погоду")
    this.#contextMenu.add("flyingCat", "Летающий котик")
    this.#contextMenu.add("message", "О котах")
    this.#contextMenu.add("player", "Мультиплеер")
    this.#contextMenu.add("iptracker", "IP Tracker")

    
    document.querySelector('.menu').addEventListener('click', this.selectModal)
 }

 selectModal(event){
  const moduleType = event.target.dataset.type;
      const moduleText = event.target.textContent;

      if (moduleType === "background") {
        const backGroundModuleInstance = new BackgroundModule(moduleType, moduleText);
        backGroundModuleInstance.trigger();
        document.querySelector('.menu').classList.remove('open')
      } else if (moduleType === "countclick") {
        const countClicksModuleInstance = new ClicksModule(moduleType, moduleText);
        countClicksModuleInstance.trigger();
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "timer" ){
        const timerModuleInstance = new TimerModule(moduleType, moduleText)
        timerModuleInstance.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "shapes") {
        const shapeInstance = new ShapeModule(moduleType, moduleText)
        shapeInstance.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "sounds") {
        const audioInstance = new AudioModule(moduleType, moduleText)
        audioInstance.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "weather") {
        const weatherInstance = new WeatherModule(moduleType, moduleText)
        weatherInstance.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "flyingCat") {
        const flyingCatInstance = new FlyingCat(moduleType, moduleText)
        flyingCatInstance.trigger()
        document.querySelector('.menu').classList.remove('open')        
      } else if(moduleType === "message") {
        const customMessageInstance = new CustomMessageModule(moduleType, moduleText)
        customMessageInstance.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "player") {
        const playerModule = new PlayerModule(moduleType, moduleText)
        playerModule.trigger()
        document.querySelector('.menu').classList.remove('open')
      } else if(moduleType === "iptracker") {
        const ipTracker = new IPTracer(moduleType, moduleText)
        ipTracker.trigger()
        document.querySelector('.menu').classList.remove('open')
      }
    
    }
 }

 const newApp = new App()

 export default newApp