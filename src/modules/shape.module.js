import {Module} from '../core/module'
import { generateRandomPosition } from '../utils'
import { generatorRandomColor } from '../utils'



export class ShapeModule extends Module {
  shapeTypeList = ['shadowedbox', 'triangle', 'leaf', 'circle']
  shapeElement
  shapeType
  shapeSize
  shapeColor
  shapeX
  shapeY

  constructor(type, text) {
    super(type, text)
    if (document.querySelector('.custom-shape')) {
      document.querySelector('.custom-shape').remove() 
    }
    this.shapeElement = document.createElement('div')
    this.setType()
    this.setSize()
    this.setColor()
    this.setCoordinates()
     
  }
  setType() {
    const typeId = Math.floor(Math.random()*this.shapeTypeList.length)
    this.shapeType = this.shapeTypeList[typeId]
    this.shapeElement.classList.add(this.shapeType) 
    this.shapeElement.classList.add('custom-shape')
  }
  
  setSize() {
    this.shapeSize = `${Math.floor(Math.random() * 200 + 20)}px`
    if (this.shapeType == "triangle") { 
      this.shapeElement.style.borderBottomWidth = this.shapeSize
    } else {
      
      this.shapeElement.style.width = this.shapeSize
      this.shapeElement.style.height = this.shapeSize
    }
    
  }

  

  setColor() {
    if (this.shapeType == 'leaf') {
       return
    } 
    this.shapeColor = generatorRandomColor()
    if (this.shapeType == 'triangle') {
        this.shapeElement.style.borderBottomColor = this.shapeColor
    } else {
        this.shapeElement.style.backgroundColor = this.shapeColor
    }
    
   
  }

  setCoordinates() {
    const coordinates = generateRandomPosition(window.screen.availWidth, window.screen.availHeight)
    this.shapeX = coordinates.x
    this.shapeY = coordinates.y
    this.shapeElement.style.position = 'absolute'
    this.shapeElement.style.left = this.shapeX + 'px'
    this.shapeElement.style.top = this.shapeY+ 'px'
  }

  remove(event) {
    if (event.target.classList.contains('custom-shape')) {
      event.target.remove()}
  }

  trigger() {
    
    document.body.append(this.shapeElement)
    document.querySelector('.custom-shape').addEventListener('click', this.remove, {
      once: true
    })
  }
  
}

