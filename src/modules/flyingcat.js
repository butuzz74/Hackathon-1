import { Module } from "../core/module";
import img from '../assets/cat1.png'

export class FlyingCat extends Module{
  constructor(type, text){
    super(type, text)
    this.image = new Image(100, 100)
    this.image.src = img
    this.image.className = 'cat'
    this.image.style.position = 'absolute'
    if (!document.querySelector('.cat')) {
      document.body.append(this.image)
    }
   

   
  }


  removeCat(event){
    if (event.target.classList.contains('cat')) {
      event.target.remove()
    }
  }

  trigger(){
    this.catElement = document.querySelector('.cat')
    this.catElement.addEventListener('click', this.removeCat)
    document.body.addEventListener('mousemove', (event) => {
      this.catElement.style.left = event.clientX + "px";
      this.catElement.style.top = event.clientY + "px";
    })
  }
}
