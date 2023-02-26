import {Module} from '../core/module'
import { RANDOM_MUSIC_FUNCTION } from '../utils'

export class TimerModule extends Module {
  #timer
  #seconds
  constructor(type, text) {
    super(type, text);
    this.#timer = document.createElement('div')
    this.#timer.className = 'timer'        
    this.#seconds = Math.floor(+prompt('Установите время для отсчета в секундах'))
    this.#timer.innerText = this.#seconds
      }
    
      trigger() {

        document.body.prepend(this.#timer)
        const timer = document.querySelector('.timer')
        const timerInterval  = setInterval(()=>{
            this.#seconds--
            timer.innerText = this.#seconds
            if(this.#seconds < 0){
                clearInterval(timerInterval)
                timer.innerText = 'Click!'
                timer.addEventListener('click', this.playAudio)
                timer.addEventListener('click', () => timer.remove())
            }
        },1000)
      }

      playAudio() {
        const audio = new Audio(RANDOM_MUSIC_FUNCTION())
        audio.play() 
      }
}