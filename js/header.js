class Header {
    rendCart() {
        let cartContainer = document.querySelector('.cart-container');
        cartContainer.style.display = 'block';
        shoppingCart.render();
    }
    render(count) {
        const html = `
        <button class="header__icon icon-wish"> <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M11.963 5.06722L12.4995 5.61641L13.036 5.0672C13.6211 4.46825 14.9603 3.40625 16.565 2.95829C18.1143 2.52578 19.9109 2.65578 21.623 4.40807C23.3388 6.16415 23.4723 8.01934 23.0448 9.62342C22.6046 11.2752 21.5631 12.6494 20.9787 13.2474C20.3345 13.9066 18.0806 16.2138 15.9879 18.3561L13.1908 21.2194L12.4998 21.9267L11.8089 21.2194L9.01204 18.3561C6.91942 16.2138 4.66568 13.9066 4.02153 13.2474C3.43723 12.6494 2.39557 11.2751 1.95521 9.62314C1.52756 8.01891 1.66095 6.16369 3.3764 4.40781C5.08815 2.65572 6.8847 2.52577 8.434 2.95833C10.0386 3.40633 11.3779 4.46833 11.963 5.06722Z" stroke-width="1.5"></path></svg></button>
        <button class="header__icon icon-cart"><svg onclick = 'headerPage.rendCart();'   width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg"><path d="M3.75879 6.75H21.2588V23.25H3.75879V6.75Z" fill="white" stroke-width="1.5"></path><path d="M16.75 9V5.3105C16.75 4.16729 16.3022 3.07089 15.5052 2.26252C14.7082 1.45414 13.6272 1 12.5 1C11.3728 1 10.2918 1.45414 9.4948 2.26252C8.69777 3.07089 8.25 4.16729 8.25 5.3105L8.25 9" fill="white" stroke-width="1.5"></path></svg></button>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);