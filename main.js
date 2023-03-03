const menuEmail     =   document.querySelector('.navbar-email');
const menuHamb      =   document.querySelector('.menu');
const menuCarrito   =   document.querySelector('.navbar-shopping-cart');


const desktopMenu   =   document.querySelector('.desktop-menu');
const menuMobile    =   document.querySelector('.mobile-menu');
const asaide   =   document.querySelector('.product-detail');
const cardsContainder = document.querySelector('.cards-container');     

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

const productList = []
productList.push ({
    name: "bici",
    precio: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
    name: "pc",
    precio: 1220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
    name: "tele",
    precio: 1543,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

 function renderProductos (arr){
    for(product of arr){
        // creamos el div cpon su clase
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    // creamos la imagen y tomamos su ubacion del atributo ya puesto en la clase
        const imagenProducto = document.createElement("img");
        imagenProducto.setAttribute ("src", product.image);
    
        // creamos el div cpon su clase
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText= "$" + product.precio;
    
        const productName = document.createElement("p");
        productName.innerText= product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement("figure");
    
            // acá la imagen no es dinámica como la anterior 
            // ya que es la imagen del carrito para ser agregado
        const productImgFigure = document.createElement("img");
        productImgFigure.setAttribute ("src", "./icons/bt_add_to_cart.svg");
    
        // con los appenchild colocamos etiqueta dentro de etiqueta simulando el html donde así sucede    
    
        productFigure.appendChild(productImgFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
     
    
        productCard.appendChild(imagenProducto);
        productCard.appendChild(productInfo);
    
    
         cardsContainder.appendChild(productCard);
    
    
    
    }
    
 }
 renderProductos(productList);
