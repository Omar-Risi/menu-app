let currentCategory; 
const categoryTitle = document.querySelector("[category-name]");

const modalElm =  document.querySelector("#modal")
const modalTitle =  document.querySelector("[item-name]");

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

function openModal (title) {
    modalElm.setAttribute("open", '');
    modalTitle.textContent = title;
}

function closeModal() {
    modalElm.removeAttribute("open");
}

window.onload = () => {setCategory('Burgers','#burgers')}