import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
      }
    
      trigger() {
        let countDownInSec = 20
        const timer = document.createElement('div')
        timer.className = 'timer'        
        timer.innerText = countDownInSec
        document.body.prepend(timer)
        const newTimer  = setInterval(()=>{
            countDownInSec--
            timer.innerText = countDownInSec
            if(countDownInSec === 0){
                clearInterval(newTimer)
                timer.innerText = 'End'
                setTimeout(()=>
                timer.remove(), 2000)
            }
        },1000)
      }
}