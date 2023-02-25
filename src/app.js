import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";

const myContextMenu = new ContextMenu(".menu");
myContextMenu.open();
myContextMenu.close();
myContextMenu.add("background", "Изменить цвет фона");
myContextMenu.add("countclick", "Аналитика кликов");
myContextMenu.add("timer", "Таймер отсчета")


function hhh(){
    const h = document.querySelector('.menu')
    h.addEventListener("click", handlClick);
    function handlClick(event) {
      const f = event.target.dataset.type;
    
      const v = event.target.textContent;
    
      if (f === "background") {
        const a = new BackgroundModule(f, v);
        a.trigger();
      } else if (f === "countclick") {
        const a = new ClicksModule(f, v);
        a.trigger();
      } else if(f === "timer" ){
        const a = new TimerModule(f,v)
        a.trigger()
      }
    }
} 
hhh()
