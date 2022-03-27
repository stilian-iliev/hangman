import { restartGame } from "./game.js";
import { setPlayable } from "./api/data.js";

const categoryMenu = document.querySelector("#category-filter");

const openCategoryBtn = document.querySelector("#filter-btn");
openCategoryBtn.addEventListener("click", openCategoryMenu);
const closeCategoryBtn = document.querySelector("#close-category-btn");
closeCategoryBtn.addEventListener("click", closeCategoryMenu);

const categoriesBoxes = document.querySelector(".categories-list").children;

function openCategoryMenu() {
    openCategoryBtn.style.display = "none";
    categoryMenu.style.display = "block";
}

function closeCategoryMenu(){
    saveCategories();
    categoryMenu.style.display = "none";
    openCategoryBtn.style.display = "block";
}

function saveCategories() {
    let categoryIds = [];
    for (const box of categoriesBoxes) {
        if (box.children[0].checked) {
            categoryIds[categoryIds.length] = box.children[0].value;
        }
    }
    setPlayable(categoryIds);
    restartGame();
}

restartGame();