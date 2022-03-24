export function getWord() {
    return JSON.parse(sessionStorage.getItem("currentWord")).currentWord;
}