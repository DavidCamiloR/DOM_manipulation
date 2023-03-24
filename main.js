const navEmail = document.querySelector('.navbar-email');    
const desktopmenu = document.querySelector('.desktop-menu');
const menuDesplegable = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const iconcarrito = document.querySelector('.navbar-shopping-cart');
const menucarrito = document.querySelector('.product-detail')

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