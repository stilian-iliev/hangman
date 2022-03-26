import { restartGame } from "./game.js";
import { setPlayable } from "./api/data.js";

const categoryMenu = document.querySelector("#category-filter");

const openCategoryBtn = document.querySelector("#filter-btn");
openCategoryBtn.addEventListener("click", openCategoryMenu);
const closeCategoryBtn = document.querySelector("#close-category-btn");
closeCategoryBtn.addEventListener("click", closeCategoryMenu);

const categoriesBoxes = document.querySelector(".categories-list").children;

const saveBtn = document.querySelector("#apply-categories-btn");
saveBtn.addEventListener("click", saveCategories);

let categoriesList = 
{"Animals":0,
"Chemistry":3,
"Christmas":4,
"Fall":7,
"Geography":10,
"Halloween":11,
"Hard Words":12,
"Math":16,
"Movies":17,
"Music":18,
"Science":20,
"Sports":22,
"Television":24};

function openCategoryMenu() {
    openCategoryBtn.style.display = "none";
    categoryMenu.style.display = "block";
}

function closeCategoryMenu(){
    categoryMenu.style.display = "none";
    openCategoryBtn.style.display = "block";
}

function saveCategories() {
    closeCategoryMenu();
    let categoryIds = [];
    for (const box of categoriesBoxes) {
        if (box.children[0].checked) {
            categoryIds[categoryIds.length] = categoriesList[box.children[1].textContent];
        }
    }
    setPlayable(categoryIds);
    restartGame();
}

restartGame();