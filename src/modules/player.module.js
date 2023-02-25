import { Module } from "../core/module";


export class PlayerModule extends Module {
  
  trigger() {
    const player = {    
        video1: "./src/video/Code_flythough_loop_01_Videvo_preview.mp4",
        video2: "./src/video/Code_flythough_loop_01_Videvo_preview.mp4",
        video3: "./src/video/Code_flythough_loop_01_Videvo_preview.mp4"
        }
    
    const playerLink = document.createElement('div')
    playerLink.className = 'player-link'
const createTemplatePlayer = function (options){
    return `<div class="player-window">
    <video class="video" src="${options}"></video>
</div>`
 }

 for(let key in player){
    playerLink.insertAdjacentHTML('afterbegin', createTemplatePlayer(player[key]))
 }
 document.body.prepend(playerLink)

 const videos = document.querySelectorAll('.video')
 
videos.forEach((elem)=>{
    elem.addEventListener('mouseover', event=>
    event.target.setAttribute('controls', true))
    elem.addEventListener('mouseout', event=>
    event.target.removeAttribute('controls'))
}
)
  }
}