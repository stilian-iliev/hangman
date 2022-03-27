import { post, get, put, del } from "./api.js";

let playable = [0,3,4,7,10,11,12,16,17,18,20,22,24];

export function setPlayable(newCategories) {
    playable = newCategories;
}

export async function getRandomWord() {
    const req = await get("https://www.hangmanwords.com/_next/data/J2wi8mWpYsUem3T8ydTLL/words.json");
    const index = Math.floor(Math.random() * playable.length);
    const category = req.pageProps.allGames[playable[index]];
    const word = category.words[Math.floor(Math.random() * category.words.length)];
    return { "category":category.h1, "word":word.toUpperCase() };
}

export async function getWordDefinition(word) {  
    let def = await get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    return def[0].meanings[0].definitions[0].definition;
}