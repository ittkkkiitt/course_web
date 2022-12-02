document.querySelector('#sort-to-max').onclick = sortToMax;
document.querySelector('#sort-to-min').onclick = sortToMin;
document.querySelector('#reset').onclick = reset;
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
let optBarSelectSale = document.querySelector('.option-bar__sale-inner');

optBarSelect.addEventListener('click',  sortFunc);
optBarSelectSale.addEventListener('click',  sortFunc);

function sortFunc() {
    let chooseGenderElem = document.querySelector('input[name="gender"]:checked').value;
    let chooseSaleElem = document.querySelector('input[name="sale"]:checked').value;
    console.log(chooseSaleElem);
   let it = document.getElementsByClassName("item-container")[0];
   for (let i = 0; i<it.children.length; i++){
    if (chooseSaleElem == 'all') {
        if (chooseGenderElem == 'all') {
            it.children[i].style.display='inline-block';
        }
        else if (it.children[i].dataset.gender!=chooseGenderElem) {
            it.children[i].style.display='none';
        } 
        else {
            it.children[i].style.display='inline-block';
        }
    }
    else if (+it.children[i].dataset.sale==0) {
                it.children[i].style.display='none';
            }
    else {
        if (chooseGenderElem == 'all') {
            it.children[i].style.display='inline-block';
        }
        else if (it.children[i].dataset.gender!=chooseGenderElem) {
            it.children[i].style.display='none';
        } 
        else {
            it.children[i].style.display='inline-block';
        }
    }
   }
};

function pushElem(elem, repElem) {
    return repElem.parentNode.insertBefore(elem, repElem.nextSibling);
}
