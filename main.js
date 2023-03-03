const menuEmail     =   document.querySelector('.navbar-email');
const desktopMenu   =   document.querySelector('.desktop-menu');
const menuHamb      =   document.querySelector('.menu');
const menuMobile    =   document.querySelector('.mobile-menu');
// ' '

menuEmail.addEventListener('click', toggledesktopMenu);

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    console.log("click")
}

menuHamb.addEventListener('click', togglemenuMobile);

function togglemenuMobile(){
    menuMobile.classList.toggle('inactive');
    console.log("click")
}


console.log("conectado")