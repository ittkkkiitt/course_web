
class Shop {
    closeCart(){
        let cartContainer = document.querySelector('.cart-container');
        cartContainer.style.display = 'none';
        ROOT_SHOP.innerHTML = ``;
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = `<button class = 'close-cart-btn' onclick = shoppingCart.closeCart();>╳</button>`;
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

        const html = `
        <div class = 'cart-container__inner'>${htmlCatalog}
            <div class = 'cart-container__total'>total: € ${sumCatalog}</div
           </div> `;
        ROOT_SHOP.innerHTML = html;
    }
}
        
const shoppingCart = new Shop();
