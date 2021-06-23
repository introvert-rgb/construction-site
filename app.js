let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');
window.onscroll = position;

function position() {
    console.log(pageYOffset);

    if (window.pageYOffset > 40) {
        console.log(pageYOffset);
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('bg-white')
    }

}
// console.log(offset);

let header = document.querySelector('.header');
let menuBtn = document.querySelector('.menu-hamburger');
menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuBtn.classList.add('close');

    } else {
        menu.classList.add('open');
        menuBtn.classList.remove('close');


    }
})