import "./style.css";
import { sins } from "./sins";

const app = document.querySelector<HTMLDivElement>("#app");

function getRandomSin(): string {
  const randomIndex = Math.floor(Math.random() * sins.length);
  return sins[randomIndex];
}

if (app) {
  const randomSin = getRandomSin();

  app.innerHTML = `
    <div class="container">
      <h1>The Naughty Pope</h1>
      <div class="pope-image">👴✝️👑</div>
      <p class="tagline">Caught in the act of...</p>
      <p class="sin">${randomSin}</p>
      <button id="new-sin-btn" class="confess-btn">Confess Another Sin</button>
    </div>
  `;

  // Add event listener after DOM is loaded
  setTimeout(() => {
    const newSinBtn = document.getElementById("new-sin-btn");
    if (newSinBtn) {
      newSinBtn.addEventListener("click", () => {
        const sinElement = document.querySelector<HTMLParagraphElement>(".sin");
        if (sinElement) {
          sinElement.textContent = getRandomSin();
          // Add a little animation
          sinElement.classList.add("sin-reveal");
          setTimeout(() => sinElement.classList.remove("sin-reveal"), 500);
        }
      });
    }
  }, 0);
}
