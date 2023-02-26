import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
      }
    
      trigger() {
          let count = 20
        const timer = document.createElement('div')
        timer.className = 'timer'        
        timer.innerText = count
        document.body.prepend(timer)
        let newTimer  = setInterval(()=>{
            timer.innerText = `${--count}`
            if(count === 0){
                clearInterval(newTimer)
                timer.innerText = 'End'
                setTimeout(()=>
                timer.remove(), 2000)
            }
        },1000)
      }
}