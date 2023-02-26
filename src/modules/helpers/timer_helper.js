export class Timer {
  intervalID
  seconds
  timer

  constructor(seconds) {
    this.seconds = seconds
    this.timer = document.createElement('div')
    this.timer.textContent = `Time left`
    this.timer.className = 'seconds'
    document.body.append(this.timer)
  }
  

  run() {
   this.intervalID = setInterval(() => {
      this.seconds -= 1
      this.timer.textContent = `Time left: ${this.seconds}`
      
    }, 1000)
    
    }



  stop(){
    clearInterval(this.intervalID)
  }


  delete(){
    this.timer.remove()
    
  }
  
}

