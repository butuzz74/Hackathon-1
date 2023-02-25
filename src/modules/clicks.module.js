import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let count = 0;
    const s = document.createElement("div");
    s.innerText = count;
    let count1 = 0;
    const ss = document.createElement("div");
    ss.innerText = count1;
    document.body.addEventListener("click", countClick);
    function countClick() {
      ss.innerText = `${count1++}`;
    }
    document.body.prepend(s, ss);

    let idTimer = setInterval(function () {
      s.innerText = `${count++}`;

      if (count > 10) {
        clearInterval(idTimer);
        document.body.removeEventListener("click", countClick);
      }
    }, 1000);
  }
}
