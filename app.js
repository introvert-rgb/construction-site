let menu = document.querySelector('.menu');

let header = document.querySelector('.header');
let menuBtn = document.querySelector('.menu-hamburger');
menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.add('close');
        header.classList.add('fixed');
    } else {
        menu.classList.add('open');
        menuBtn.classList.remove('close');
        header.classList.remove('fixed');

    }
})