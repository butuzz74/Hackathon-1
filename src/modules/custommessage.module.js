import { Module } from "../core/module";

export class CustomMessageModule extends Module {
  trigger() {
    const a = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      const message = document.createElement("div");
      message.className = "message";
      document.body.prepend(message);
      message.textContent = `${result.fact})`;
      setTimeout(() => message.remove(), 2000);
    };
    a();
  }
}
