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

        if(menu[index].style.display=='flex'){

            menu[index].style.display='none';
        }
        else{
            menu[index].style.display='flex';
        }
    }
    

}
//document.addEventListener('DOMContentLoaded', myfunction());



