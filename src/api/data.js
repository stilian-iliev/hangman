import { post, get, put, del } from "./api.js";
import { getWord } from "../utils.js";

export async function getRandomWord() {
    const req = await get("https://www.hangmanwords.com/_next/data/J2wi8mWpYsUem3T8ydTLL/words.json");
    const category = req.pageProps.allGames[Math.floor(Math.random() * req.pageProps.allGames.length)];
    const word = category.words[Math.floor(Math.random() * category.words.length)];
    sessionStorage.setItem('currentWord', JSON.stringify({ currentWord: word }));
    console.log(category.h1);
    return category.h1;
}

export async function getWordDefinition() {  
    let def = await get("https://api.dictionaryapi.dev/api/v2/entries/en/" + getWord());
    return def[0].meanings[0].definitions[0].definition;
}