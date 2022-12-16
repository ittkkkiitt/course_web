document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#sort-to-max').addEventListener('click', sortToMax);
document.querySelector('#sort-to-min').addEventListener('click', sortToMin);
document.querySelector('#reset').addEventListener('click', reset);

function sortToMax(){
    let items = document.querySelector('.item-container');
    for (let i = 0; i<items.children.length; i++){
        for (let j = i; j<items.children.length; j++){
            if (+items.children[i].getAttribute('data-sort') > +items.children[j].getAttribute('data-sort')){
                replaceNode = items.replaceChild(items.children[j], items.children[i]);
                pushElem(replaceNode, items.children[i]);
            }

        }
    }
}

function sortToMin() {
    let items = document.querySelector('.item-container');
    for (let i = 0; i<items.children.length; i++){
        for (let j = i; j<items.children.length; j++){
            if (+items.children[i].getAttribute('data-sort') < +items.children[j].getAttribute('data-sort')){
                replaceNode = items.replaceChild(items.children[j], items.children[i]);
                pushElem(replaceNode, items.children[i]);
            }
        }
    }

}

function reset()  {
    let items = document.querySelector('.item-container');
    for (let i = 0; i<items.children.length; i++){
        for (let j = i; j<items.children.length; j++){
            if (+items.children[i].getAttribute('id') > +items.children[j].getAttribute('id')){
                replaceNode = items.replaceChild(items.children[j], items.children[i]);
                pushElem(replaceNode, items.children[i]);
            }

        }
    }
}


let optBarSelect = document.querySelector('.option-bar__form--gender');
let optBarSelectSale = document.querySelector('.option-bar__form--sale');

optBarSelect.addEventListener('click',  filterGoodsForGender);
optBarSelectSale.addEventListener('click',  filterGoodsForSale);

function filterGoodsForGender() {
    let chooseGenderElem = document.querySelector('input[name="gender"]:checked').value;
    let it = document.getElementsByClassName("item-container")[0];
    for (let i = 0; i<it.children.length; i++) {
        if (chooseGenderElem == 'all') {
                it.children[i].classList.remove('item--hide-gender');
        }
        else if (it.children[i].dataset.gender!=chooseGenderElem) {
                it.children[i].classList.add('item--hide-gender');
        } else {
            it.children[i].classList.remove('item--hide-gender');
        }
    }
}
function filterGoodsForSale() {
    let chooseSaleElem = document.querySelector('input[name="sale"]:checked').value;
    let it = document.getElementsByClassName("item-container")[0];
    for (let i = 0; i<it.children.length; i++){
        if (chooseSaleElem == 'all') {
            it.children[i].classList.remove('item--hide-sale');
        }
        else if (+it.children[i].dataset.sale==0) {
                it.children[i].classList.add('item--hide-sale');
            }
        }
}
    function pushElem(elem, repElem) {
        return repElem.parentNode.insertBefore(elem, repElem.nextSibling);
    }

});
