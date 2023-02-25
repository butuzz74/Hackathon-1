import { Module } from "../core/module";
import { generatorRandomColor } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    generatorRandomColor();
  }
}
