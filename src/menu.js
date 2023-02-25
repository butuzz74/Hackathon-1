import { Menu } from "./core/menu";
import { Module } from "./core/module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", this.open.bind(this))
  }
  open(event) {
    event.preventDefault()
   
    this.el.style.left = `${event.x}px`
    this.el.style.top =  `${event.y}px`
    this.el.classList.add('open') 
    
    
  }
  close() {
    this.el.classList.remove("open");
  }

  add(type, text) {
    const newModule = new Module(type, text);
    this.el.insertAdjacentHTML("beforeend", newModule.toHTML());
  }
}
