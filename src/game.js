import { getWord } from "./utils.js";

export function checkLetter(letter) {
    if(getWord().includes(letter.toLowerCase())){
        displayLetter(letter);
        return true;
    } else {
        displayBodyPart();
    }
}

function displayLetter(letter) {

}

function displayBodyPart() {

}