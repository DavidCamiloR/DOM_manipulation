const navEmail= document.querySelector('.navbar-email');    
const desktopmenu= document.querySelector('.desktop-menu');
const menuDesplegable= document.querySelector('.menu');
const mobilemenu= document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
menuDesplegable.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');    
}
function toggleMobileMenu(){
    mobilemenu.classList.toggle('inactive');    
}