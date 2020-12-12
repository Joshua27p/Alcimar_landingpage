 const menu = document.querySelector('.menu');
 const button_hamburguer = document.querySelector('.hamburguer_menu')

 button_hamburguer.addEventListener('click', showHidden);
 function showHidden() {
     if(menu.classList.contains('menu_active')){
        menu.classList.remove('menu_active')   
     }
     else{
         menu.classList.add('menu_active')
     }
 }