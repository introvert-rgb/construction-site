let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

window.onscroll = position;

function position() {


    if (window.pageYOffset > 40) {
        nav.classList.add('shadow');
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('bg-white');
        nav.classList.remove('shadow');
    }

}
// console.log(offset);

let header = document.querySelector('.header');
let menuBtn = document.querySelector('.menu-hamburger');
let scrollLock = document.querySelector('.header');
menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.add('close');
        scrollLock.classList.add('fixed');


    } else {
        menu.classList.add('open');
        menuBtn.classList.remove('close');
        scrollLock.classList.remove('fixed');

    }
})