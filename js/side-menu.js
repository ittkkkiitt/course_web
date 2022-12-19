const sideMenu = document.querySelector('.aside');
const btnClose = document.querySelector('.header__btn--close');
btnClose.addEventListener('click', () => {
    sideMenu.classList.toggle('hide');
});
