import { getRandomWord } from "./api/data.js";

const keyboard = document.getElementById("keyboard");
keyboard.addEventListener("click", onGuess);


let word;
function onGuess(event) {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);

    }
    // console.log(event.target.tagName == "BUTTON");
}

async function restartGame() {
    await getRandomWord();
    console.log(word);
    
}

restartGame();