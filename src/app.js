console.log("hello, world");
const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("click", onGuess);
const word = "";
function onGuess(event) {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);
    }
    // console.log(event.target.tagName == "BUTTON");
}

function restartGame() {
    word = "";
}