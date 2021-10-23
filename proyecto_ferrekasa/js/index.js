const menu = document.querySelector('.menu_plegable')

function desplegar(){
    menu.classList.toggle('menu_plegable_visible');
}

function ocultar(){
    if (document.documentElement.scrollTop > 200){
        menu.classList.remove('menu_plegable_visible');
    }
}

window.addEventListener('scroll', ocultar)