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

//modal
let reference = document.querySelectorAll('.grid-item-img');
let refImg = document.querySelectorAll('.refImg');
let fullImg = document.querySelector('.full-img');
let display = document.querySelector('.photo-full');
let closeBtn = document.querySelector('.close');
let photoContainer = document.querySelector('.photo-container');
let textInput = document.querySelector('.text-input');
let picText = document.querySelector('.pic-text');
for (let i = 0; i < reference.length; i++) {
    reference[i].addEventListener('click', () => {
        display.style.display = 'flex';
        fullImg.setAttribute('src', refImg[i].src);
        textInput.innerHTML = picText.innerHTML;

    })
}
closeBtn.addEventListener('click', () => {
    display.style.display = 'none';
})
window.addEventListener('click', (e) => {
    if (e.target == display || e.target == photoContainer) {
        display.style.display = 'none';

    }
})