import {Items} from './catalog.js';

const ROOT_PRODUCTS = document.getElementById('container');
const ROOT_SHOP = document.getElementById('shopping-cart');
const  ROOT_HEADER = document.getElementById('header-content');

class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil();

class Products {
    constructor() {
        this.classNameActive = `shop-item--active`;
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);

        } else {
            element.classList.remove(this.classNameActive);
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        Items.forEach(({ id, name, price, img, gender, sale, aviable }) => {
            let activeClass = '';
            let actualSale = +sale;
            let actualPrice = +price;
            if (!(productsStore.indexOf(String(id)) === -1)) {
                activeClass = ' '+this.classNameActive+' ';
            }
            if (actualSale !== 0 ) {
                actualPrice = Math.floor(+actualPrice - ((+actualPrice * +actualSale)/100)) ;
                htmlCatalog += `
                <div class = 'shop-item' data-sort = '${actualPrice}' data-gender = '${gender}' data-sale = '${actualSale}' data-aviable = '${aviable}' id = '${id}'>
               `
                if (aviable=='true') {
                    htmlCatalog += `<button class = 'shop-inner-text ${activeClass}'></button>`
                }
                htmlCatalog += `<div class = 'shop-item__img' style = "background-image: url('${img}');" ></div>
                <span class = 'shop-item__name'>${name}</span>
                <span class = 'shop-item__price shop-item__sale' ><span class = 'shop-item__old-price'>€ ${price}</span><span class = 'shop-item__new-price'>€ ${actualPrice}</span></span>`;
            } else {
                htmlCatalog +=
                ` <div class = 'shop-item' data-sort = '${price}' data-gender = '${gender}' data-sale = '${actualSale}' id = '${id}'>`
                if (aviable=='true') {
                    htmlCatalog += `<button class = 'shop-inner-text ${activeClass}'></button>`
                }
                htmlCatalog +=`<div class = 'shop-item__img' style = "background-image: url('${img}');"></div>
                <span class = 'shop-item__name'>${name}</span>
                <span class = 'shop-item__price' >€ ${price}</span>`;
            }
             htmlCatalog += `
            </div>
            `;

        });
        let html = htmlCatalog;
        ROOT_PRODUCTS.insertAdjacentHTML('afterbegin', html);
    }
}

const productsPage = new Products();
productsPage.render();

class Header {
    rendCart() {
        let cartContainer = document.querySelector('.cart-container');
        cartContainer.style.display = 'flex';
        shoppingCart.render();
    }
    render() {
        let html = `

        <button class="header__icon btn--cart icon-cart"><svg  width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg"><path d="M3.75879 6.75H21.2588V23.25H3.75879V6.75Z" fill="white" stroke-width="1.5"></path><path d="M16.75 9V5.3105C16.75 4.16729 16.3022 3.07089 15.5052 2.26252C14.7082 1.45414 13.6272 1 12.5 1C11.3728 1 10.2918 1.45414 9.4948 2.26252C8.69777 3.07089 8.25 4.16729 8.25 5.3105L8.25 9" fill="white" stroke-width="1.5"></path></svg></button>
        `;
        if (!document.querySelector('.header__icon')) {
            ROOT_HEADER.insertAdjacentHTML('afterbegin', html);
        }
    }
}
const headerPage = new Header();
headerPage.render();


class Shop {
    closeCart(){
        let cartContainer = document.querySelector('.cart-container');
        cartContainer.style.display = 'none';
        ROOT_SHOP.innerHTML = ``;
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = `<button class = 'close-cart-btn'>╳</button>`;
        let sumCatalog = 0;

        Items.forEach(({ id, name, price, sale, img }) => {
            let actualPrice = +price - Math.floor((+price * +sale)/100);
            if (productsStore.indexOf(String(id)) !== -1) {
                htmlCatalog += `
                <div class="cart-container__item">
                    <div class = 'cart-container__item-img' style = "background-image: url('${img}');"></div>
                    <div class='cart-container__caption-inner'>
                        <span class = 'cart-container__item-name'>${name}</span>
                        <span class = 'cart-container__item-price'>€ ${actualPrice} </span>
                    </div>
                </div>
                `;
                sumCatalog+=+price;
            }
        });

        let html = `
        <div class = 'cart-container__inner'>${htmlCatalog}
            <div class = 'cart-container__total'>total: € ${sumCatalog}</div
           </div> `;
        ROOT_SHOP.insertAdjacentHTML('afterbegin', html);
    }
}

const shoppingCart = new Shop();

const addToCartBtns = document.querySelectorAll('.shop-inner-text');

addToCartBtns.forEach(addBtn => {
    addBtn.addEventListener('click', (e) => {
        productsPage.handleSetLocationStorage(addBtn, String(e.target.closest('.shop-item').id));
    });
})

let btnCloseCart = document.querySelector('.cart-container');

const btnCart = document.querySelector('.btn--cart');
btnCart.addEventListener('click', () => {
    headerPage.rendCart();
})
btnCloseCart.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.close-cart-btn')) {
        shoppingCart.closeCart();
    }
})

document.querySelector('#search-input').oninput = function() {
    let val = this.value.toLowerCase().trim();
    let searchItems = document.querySelectorAll('.shop-item__name');
    if (val != '') {
        searchItems.forEach(function(el){
            if (el.textContent.toLowerCase().search(val) == -1) {
                el.closest('.shop-item').classList.add('item--hide-search');
            }
            else {
                if (el.closest('.shop-item').classList.contains('item--hide-search')) {
                    el.closest('.shop-item').classList.remove('item--hide-search');
                }
            }
        });
    } else {
        searchItems.forEach(function(el){
                if (el.closest('.shop-item').classList.contains('item--hide-search')) {
                    el.closest('.shop-item').classList.remove('item--hide-search');
                }
        });
    }
}

