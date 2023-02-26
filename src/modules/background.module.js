import { Module } from "../core/module";
import { generateRandomColor } from "../utils";


export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const startGradientColor = generateRandomColor().replace(/'/g, "")
    const endGradientColor = generateRandomColor().replace(/'/g, "")
    document.body.style.background = `linear-gradient(${startGradientColor}, ${endGradientColor})`
  }
}
