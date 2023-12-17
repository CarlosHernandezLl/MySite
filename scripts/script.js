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


function myfunction(){
    var menu = document.getElementsByClassName('navbar');
    for (let index = 0; index < menu.length; index++) {

        if(menu[index].style.display=='none'){

            menu[index].style.display='flex';
        }
        else{
            menu[index].style.display='none';
        }
    }
    

}
document.addEventListener('DOMContentLoaded', myfunction());



