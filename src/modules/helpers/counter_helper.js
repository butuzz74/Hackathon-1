export class Counter {
  counter
  clicks = 0

  constructor() {
    this.counter = document.createElement('div')
    this.counter.textContent = `Clicks`
    this.counter.className = 'counter'
    document.body.append(this.counter)
    document.body.addEventListener('click', this.add.bind(this))
  }


  add(){
    this.clicks++
    this.counter.textContent = `Clicks ${this.clicks}`
  }

  delete(){
    document.body.removeEventListener('click', this.add.bind(this))
    this.counter.remove()
    
  }
  
}