function ocultar(){
    var menu = document.getElementsByClassName('navbar');
    for (let index = 0; index < menu.length; index++) {
        
        menu[index].style.display='none';
    }
}

function mostrar(){
    var menu = document.getElementsByClassName('navbar');
    for (let index = 0; index < menu.length; index++) {
        
        menu[index].style.display='flex';
    }
}


function myfunction() {
    var menu = document.getElementsByClassName('navbar');

    function toggleMenu() {
        for (let index = 0; index < menu.length; index++) {
            if (menu[index].style.display === 'flex') {
                menu[index].style.display = 'none';
            } else {
                menu[index].style.display = 'flex';
            }
        }
    }

    function resetMenu() {
        for (let index = 0; index < menu.length; index++) {
            if (window.innerWidth > 500) {
                menu[index].style.display = 'flex';
            } else {
                menu[index].style.display = 'none';
            }
        }
    }

    window.addEventListener('resize', resetMenu);
    toggleMenu(); // Ejecuta la función una vez al cargar la página para establecer el estado inicial

}

document.addEventListener('DOMContentLoaded', myfunction);



