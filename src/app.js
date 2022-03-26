import { getRandomWord, getWordDefinition } from "./api/data.js";
import { checkLetter, displayLetter } from "./game.js";
import { getWord } from "./utils.js";

const buttons = document.querySelectorAll("#keyboard button");
const figureParts = document.querySelectorAll(".figure-part");
const wordEl = document.querySelector("#word");
const category = document.querySelector("#category");
const keyboard = document.getElementById("keyboard");
const endGameContainer = document.querySelector("#end-game-container");
document.querySelector("#play-again").addEventListener("click", restartGame);
keyboard.addEventListener("click", onGuess);

function onGuess(event) {
    if (event.target.tagName == "BUTTON") {
        checkLetter(event.target);
        event.target.disabled = true;
        
        const letterArr = Array.from(wordEl.children).map(e => e.textContent);
        const written = letterArr.join("");
        if (getWord() == written) {
            onWin();
        }
        if (document.querySelector(".figure-part.hidden") == null) {
            onLose();
        }
    
    }
}

function onWin() {
    displayWord("green");
    disableButtons();
    showMessage("You won");
}
function onLose() {
    displayWord("red");
    showMessage("You lost");
    disableButtons();
}

async function restartGame() {
    resetButtons();
    resetFigure();
    category.textContent = await getRandomWord();
    wordEl.innerHTML = "";
    for (let i = 0; i < getWord().length; i++) {
        const span = document.createElement("span");
        if (getWord()[i] == " ") {
            span.classList.add("space");
        } else {
        span.classList.add("letter");
        }
        span.textContent = " ";
        wordEl.appendChild(span);
    }
    endGameContainer.style.display = "none";
    
}

function resetButtons() {
    for(const button of buttons){
        button.className = "";
        button.disabled = false;
    }
}

function resetFigure() {
    for (const part of figureParts) {
        part.classList.add("hidden");
        part.style.display = "none";
    }
}

function disableButtons() {
    for (const button of buttons) {
        button.disabled = true;
    }
}

function displayWord(color){
    for (const letter of [...getWord()]) {
        displayLetter(letter, color);
    }
}

function showMessage(message) {
    endGameContainer.style.display = "block";
    endGameContainer.querySelector("#message").textContent = message;
}

restartGame();