import { getRandomWord } from "./api/data.js";
import { checkLetter } from "./game.js";

const buttons = document.querySelectorAll("button");
const keyboard = document.getElementById("keyboard");
keyboard.addEventListener("click", onGuess);

function onGuess(event) {
    if (event.target.tagName == "BUTTON") {
        const correct = checkLetter(event.target.textContent);
        if (correct) {
            event.target.classList.add("letter-correct");
        } else {
            event.target.classList.add("letter-absent");
        }
        event.target.disabled = true;
    }
        
}

async function restartGame() {
    resetButtons();
    document.querySelector("#category").textContent = await getRandomWord();
}

function resetButtons() {
    for(const button of buttons){
        button.className = "";
        button.disabled = false;
    }
}

restartGame();