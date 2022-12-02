const option_bar  = document.querySelector('.option-bar');
const option_bar_h = option_bar.offsetHeight;
let lastScroll = 0;

const my_offset =main_image_h-header_h;
const scroll_pos = () => window.pageYOffset || document.documentElement.scrollTop;
const contain_fix = () => option_bar.classList.contains('fix');
window.addEventListener('scroll', () => {
    if (scroll_pos() > my_offset && !contain_fix()) {
        option_bar.classList.add('fix');
       
    } else if (scroll_pos() < my_offset && contain_fix()) {
        option_bar.classList.remove('fix');
       
    }
    lastScroll = scroll_pos();
    }
);
