import { Module } from "../core/module";

export class PlayerModule extends Module {
  #playerLink;
  #body;

  constructor(type, text) {
    super(type, text);
    this.#body = document.body;
  }

  trigger() {
    const player = {
      video1: "./src/video/Code_flythough_loop_01_Videvo_preview.mp4",
      video2: "./src/video/NO MR_STOCK FOOTAGE NO MR (290)_preview.mp4",
      video3: "./src/video/NO MR_STOCK FOOTAGE NO MR (2098)_preview.mp4",
    };
    this.#playerLink = this.#createTemplatePlayerLink();
    this.#body.prepend(this.#playerLink);
    this.#fillPlayerLink(player);
    this.#setControlForPlayer();
    this.#close();
  }

  #createTemplatePlayerLink() {
    const playerLink = document.createElement("div");
    playerLink.className = "player-link";
    const span = document.createElement("span");
    span.className = "span";
    span.innerHTML = "&times;";
    playerLink.prepend(span);
    return playerLink;
  }

  #createTemplatePlayer(options) {
    return `<div class="player-window">
      <video class="video" src="${options}"></video>
      </div>`;
  }

  #fillPlayerLink(objWithScreen) {
    for (let key in objWithScreen) {
      this.#playerLink.insertAdjacentHTML(
        "afterbegin",
        this.#createTemplatePlayer(objWithScreen[key])
      );
    }
  }

  #setControlForPlayer() {
    const videos = document.querySelectorAll(".video");
    videos.forEach((elem) => {
      elem.addEventListener("mouseover", (event) =>
        event.target.setAttribute("controls", true)
      );
      elem.addEventListener("mouseout", (event) =>
        event.target.removeAttribute("controls")
      );
    });
  }

  #close() {
    this.#playerLink.addEventListener("click", (event) => {
      if (event.target.classList.contains("span")) {
        this.#playerLink.remove();
      }
    });
  }
}
