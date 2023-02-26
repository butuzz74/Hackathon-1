import { Module } from "../core/module";

const web_url = 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_OGG.ogg'

export class AudioModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {

    const audio = new Audio(web_url)
    audio.play()
     
  }
}