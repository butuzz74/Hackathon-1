import { Module } from "../core/module";
import { Timer } from "./helpers/timer_helper"
import { Counter } from "./helpers/counter_helper"
import { validateTimeEntered } from "../utils";



export class ClicksModule extends Module {
  
  constructor(type, text) {
    super(type, text)
    
  }


  trigger() 
  {
    const seconds = Math.floor(+prompt('Введите время для счета в секундах. Max 30 секунд'))
    validateTimeEntered(seconds)
    
      if (!document.querySelector('.seconds')) {
        const timer = new Timer(seconds)
        const clicker = new Counter()
        timer.run()
  
        setTimeout(() => {
          timer.stop()
          alert(`Your result is ${clicker.clicks} clicks`)
          timer.delete()
          clicker.delete()
          
        }, seconds*1000)
      }
      
      
      
      
    
  }
}
   
  
