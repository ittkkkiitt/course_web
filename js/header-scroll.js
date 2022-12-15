
let mediaQueryTablet = '(min-width: 768px)';
let mediaQueryIsTablet = window.matchMedia(mediaQueryTablet);

document.addEventListener('DOMContentLoaded',mergeHeaderBar);
window.addEventListener('scroll', mergeHeaderBar);
mediaQueryIsTablet.addEventListener('change', mergeHeaderBar);

let lastScroll = 0;

function mergeHeaderBar() {
    const header = document.querySelector('.header');
    const mainImage = document.querySelector('.main-image');

    const headerHeight = header.offsetHeight;
    const mainImageHeight = mainImage.offsetHeight;
    const offset = mainImageHeight - headerHeight;
    const optionBar  = document.querySelector('.option-bar');

    const isScroll = () => optionBar.classList.contains('header--scroll');
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const isFixed = () => optionBar.classList.contains('fix');

    let scrollDistance = window.scrollY;

    if (scrollDistance > 30) {
        header.style.borderBottom = '1.5px solid white';
    }
    else {
        header.style.borderBottom = 'none';
    }
    if (scrollPosition() > offset && !isFixed()) {
        optionBar.classList.add('fix');

    }
    if (scrollPosition() < offset && isFixed()) {
        optionBar.classList.remove('fix');
    }
    if (scrollDistance >= mainImageHeight - headerHeight && !isScroll()) {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
    lastScroll = scrollPosition();
}

