import { Module } from "../core/module";

export class CustomMessageModule extends Module {
  trigger() {
    const getRandomMessage = async () => {
      const messageConrainer = document.createElement("div");
      messageConrainer.className = "message";
      try {
        const response = await fetch("https://catfact.ninja/fact");       
        if(!response.ok){
          throw new Error ('Произошла ошибка при получении данных...')
        }
        const result = await response.json();
        document.body.prepend(messageConrainer);        
        messageConrainer.textContent = `${result.fact})`;
      } catch (error) {
        console.error("Error", error)
      } finally {        
        setTimeout(() => messageConrainer.remove(), 3000);
      }
    };
    getRandomMessage();
  }
}
