import { post, get, put, del } from "./api.js";

export async function getRandomWord() {
    const word = await get("/random/noun");
    sessionStorage.setItem('currentWord', JSON.stringify({ currentWord: word }));
}