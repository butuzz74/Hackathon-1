import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";



class App {
 #contextMenu
 constructor(){
  this.#contextMenu = new ContextMenu(".menu")
  
    
    this.#contextMenu.add("background", "Изменить цвет фона");
    this.#contextMenu.add("countclick", "Аналитика кликов");
    this.#contextMenu.add("timer", "Таймер отсчета")
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
      }
    
    }
 }

 const newApp = new App()
