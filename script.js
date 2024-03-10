AOS.init();
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.header-menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})