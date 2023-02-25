import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import { CustomMessageModule } from "./modules/custommessage.module";
import { PlayerModule } from "./modules/player.module";
import { GetIPAdress } from "./modules/getIPAdress.module";

const myContextMenu = new ContextMenu(".menu");
myContextMenu.open();
myContextMenu.close();
myContextMenu.add("background", "Изменить цвет фона");
myContextMenu.add("countclick", "Аналитика кликов");
myContextMenu.add("timer", "Таймер отсчета")
myContextMenu.add('message', 'Message')
myContextMenu.add('player', "Player")
myContextMenu.add('ipadress', 'Get IPAdress')


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
      } else if(f === "message" ){
        const a = new CustomMessageModule(f,v)
        a.trigger()
      } else if(f === "player" ){
        const a = new PlayerModule(f,v)
        a.trigger()
      } else if(f === "ipadress" ){
        const a = new GetIPAdress(f,v)
        a.trigger()
      }
    }
} 
hhh()
