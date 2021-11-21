
// Boton Menu

const menuBtn = document.querySelector('.menu-btn')
const closeMenu = document.querySelector('.close-menu')
const navbarMenu = document.querySelector('.navbar__menu')

const menuAnimation = () => {

    navbarMenu.style.display = 'flex'
    navbarMenu.style.top = '0'
}

const close = () => {
    navbarMenu.style.top = '-100%'
}


menuBtn.addEventListener('click', menuAnimation)
closeMenu.addEventListener('click', close)



