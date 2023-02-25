import { Menu } from "./core/menu";
import { Module } from "./core/module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.el.classList.add("open");
      this.el.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
  }
  close() {
    this.el.classList.remove("open");
  }

  add(type, text) {
    const newModule = new Module(type, text);
    this.el.insertAdjacentHTML("beforeend", newModule.toHTML());
  }
}
