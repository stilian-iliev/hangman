import { getWord } from "./utils.js";

const wordEl = document.querySelector("#word");
const figureParts = document.querySelectorAll(".figure-part");

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