const header = document.querySelector('.header');
const main_image = document.querySelector('.main-image');
const header_h = header.offsetHeight;
const main_image_h = main_image.offsetHeight;
const contain_scroll = () => option_bar.classList.contains('header-scroll');
window.addEventListener('scroll', () => {
    let scroll_dist = window.scrollY;
    if (scroll_dist > 30) {
        header.style.borderBottom = '1.5px solid white';
    }
    if (scroll_dist <= 30) { 
        header.style.borderBottom = 'none';
    }
    if (scroll_dist >= main_image_h-header_h && !contain_scroll()) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

//  border-bottom: 1px solid white ;



