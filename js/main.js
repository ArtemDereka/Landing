let mobileMenu = document.querySelector('.mobile__menu');
let mobileBtn = document.querySelector('.menu__btn')
let headerMenu = document.querySelector('.header__menu')
let headerWraper = document.querySelector('.header__menu-holder')
let a1 = document.querySelector('.a1')
let a2 = document.querySelector('.a2')
let a3 = document.querySelector('.a3')


mobileMenu.addEventListener('click', function () {
    event.preventDefault()
    mobileBtn.classList.toggle('menu__active')
    headerMenu.classList.toggle('menu__active')
    headerWraper.classList.toggle('menu__active')
    
})

a3.addEventListener('click', function () {
    event.preventDefault()
    mobileBtn.classList.toggle('menu__active')
    headerMenu.classList.toggle('menu__active')
    headerWraper.classList.toggle('menu__active')
    
})

a2.addEventListener('click', function () {
    event.preventDefault()
    mobileBtn.classList.toggle('menu__active')
    headerMenu.classList.toggle('menu__active')
    headerWraper.classList.toggle('menu__active')
   
})

a1.addEventListener('click', function () {
    event.preventDefault()
    mobileBtn.classList.toggle('menu__active')
    headerMenu.classList.toggle('menu__active')
    headerWraper.classList.toggle('menu__active')
    
})


let body = document.querySelector('body');

let nightBtn = document.querySelector('.nightshift');

nightBtn.addEventListener('click', function () {
    body.classList.toggle('night')
})
