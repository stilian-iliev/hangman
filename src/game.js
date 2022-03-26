import { getWord } from "./utils.js";
import { getRandomWord, getWordDefinition } from "./api/data.js";

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

export function checkLetter(key) {
    const letter = key.textContent;
    if(getWord().includes(letter)){
        key.classList.add("letter-correct");
        displayLetter(letter);
        return true;
    } else {
        key.classList.add("letter-absent");
        displayBodyPart();
    }
}

export function displayLetter(letter, color) {
    let temp = getWord();
    
    while (temp.indexOf(letter) != -1) {
        const index = temp.indexOf(letter);
        const container = wordEl.children[index];
        container.textContent = letter;
        container.style.color = color;
        temp = temp.replace(letter, "#");
    }
}

function displayBodyPart() {
    const part = document.querySelector(".figure-part.hidden");
    part.style.display = "block";
    part.classList.remove("hidden");
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

export async function restartGame() {
    resetButtons();
    resetFigure();
    category.textContent = await getRandomWord();
    wordEl.innerHTML = "";
    for (let i = 0; i < getWord().length; i++) {
        const span = document.createElement("span");
        span.textContent = " ";
        if (getWord()[i].match(/[a-z]/i)){
            span.classList.add("letter");
        } else {
            span.classList.add("space");
            span.textContent = getWord()[i];
        }
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