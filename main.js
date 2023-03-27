const navEmail = document.querySelector('.navbar-email');    
const desktopmenu = document.querySelector('.desktop-menu');
const menuDesplegable = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const iconcarrito = document.querySelector('.navbar-shopping-cart');
const menucarrito = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');

const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'PC',
    price: 1100,
    image: "https://www.vichaunter.org/wp-content/uploads/2016/03/pc-sobremesa.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Mobile',
    price: 320,
    image: "https://www.vodafone.com.au/images/devices/oppo/oppo-a57-4g/oppo-a57-glowing-black-tile.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Desktop',
    price: 400,
    image: "https://prodisplay.com/wp-content/uploads/2022/02/transparent-oled-screen-retail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

navEmail.addEventListener('click', toggleDesktopMenu);
menuDesplegable.addEventListener('click', toggleMobileMenu);
iconcarrito.addEventListener('click', togglecarrito);

function toggleDesktopMenu(){
    mobilemenu.classList.add('inactive');
    menucarrito.classList.add('inactive');
    desktopmenu.classList.toggle('inactive');    
}
function toggleMobileMenu(){
    desktopmenu.classList.add('inactive');
    menucarrito.classList.add('inactive');
    mobilemenu.classList.toggle('inactive');  
}
function togglecarrito(){
    desktopmenu.classList.add('inactive');
    mobilemenu.classList.add('inactive');
    menucarrito.classList.toggle('inactive');
}

function generatedProduct(arr) {
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
   
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('div');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('div');
        productName.innerText = product.name;

        productInfoDiv.append(productName, productPrice);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.append(productImgCard);

        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard);
    }
}
generatedProduct(productList);