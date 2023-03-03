const menuEmail     =   document.querySelector('.navbar-email');
const menuHamb      =   document.querySelector('.menu');
const menuCarrito   =   document.querySelector('.navbar-shopping-cart');


const desktopMenu   =   document.querySelector('.desktop-menu');
const menuMobile    =   document.querySelector('.mobile-menu');
const asaide   =   document.querySelector('.product-detail');

// ' '

menuEmail.addEventListener('click', toggledesktopMenu);
menuHamb.addEventListener('click', togglemenuMobile);
menuCarrito.addEventListener('click', togglemenuCarrito);

function toggledesktopMenu(){
    const isAsaideClosed = asaide.classList.contains('inactive');
    if (!isAsaideClosed){
        asaide.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
    console.log("click")
}



function togglemenuMobile(){
    const isAsaideClosed = asaide.classList.contains('inactive');
    if (!isAsaideClosed){
        asaide.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
    console.log("click")
}

function togglemenuCarrito(){
    const isMenuMobileclosed = menuMobile.classList.contains('inactive');
    if (!isMenuMobileclosed){
        menuMobile.classList.add('inactive');
    }
    asaide.classList.toggle('inactive');
    console.log("click")
    const isdesktopMenu = desktopMenu.classList.contains('inactive');
    if (!isdesktopMenu){
        desktopMenu.classList.add('inactive');
    }
}



console.log("conectado")