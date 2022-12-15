const sideMenu = document.querySelector('.aside');
const btnClose = document.querySelector('.header__btn--close');
btnClose.addEventListener('click', () => {
    sideMenu.classList.toggle('hide');
});

const asideLinksContainer  = document.querySelector('.aside__nav');
let selectedNavLink = document.querySelector('.aside__item--active');

