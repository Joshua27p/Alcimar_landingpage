const changes = window.matchMedia('screen and (max-width:932px)')
 
 const menu = document.querySelector('.menu');
 const button_hamburguer = document.querySelector('.hamburguer_menu')
 const button_close = document.querySelector('.close_menu')

 changes.addListener(validation);
 function validation(event){
     if(event.matches){
         button_hamburguer.addEventListener('click', showHidden);
         button_close.addEventListener('click', showHidden);
     }
     else{
         button_hamburguer.removeEventListener('click', showHidden);
         
     }
 }
 validation(changes)

 function showHidden() {
     if(menu.classList.contains('menu_active')){
        menu.classList.remove('menu_active')
        button_hamburguer.classList.remove('menu-hamburger_display') 
        button_close.classList.remove('close_menu_active')
     }
     else{
         menu.classList.add('menu_active')
         button_hamburguer.classList.add('menu-hamburger_display')
         button_close.classList.add('close_menu_active')
         
     }
 }