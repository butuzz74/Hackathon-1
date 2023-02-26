import { Module } from "../core/module";
import { RANDOM_MUSIC_FUNCTION } from "../utils"



export class AudioModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
      
    const audio = new Audio(RANDOM_MUSIC_FUNCTION())
    audio.play()
     
  }
}