let currentCategory; 
let categoryTitle = document.querySelector("[category-name]");

function setCategory(categoryName, id) {

    if(currentCategory == undefined) {
        currentCategory = document.querySelector(id);
        currentCategory.setAttribute('current','');
        categoryTitle.textContent = categoryName;
        return;
    }

    currentCategory.removeAttribute('current','');
    currentCategory = document.querySelector(id);
    currentCategory.setAttribute('current','')
    categoryTitle.textContent = categoryName;
}