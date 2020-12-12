const changes = window.matchMedia('screen and (max-width:932px)')
 
 const menu = document.querySelector('.menu');
 const button_hamburguer = document.querySelector('.hamburguer_menu')

 changes.addListener(validation);
 function validation(event){
     if(event.matches){
         button_hamburguer.addEventListener('click', showHidden);
     }
     else{
         button_hamburguer.removeEventListener('click', showHidden);
     }
 }
 validation(changes)

 function showHidden() {
     if(menu.classList.contains('menu_active')){
        menu.classList.remove('menu_active')   
     }
     else{
         menu.classList.add('menu_active')
     }
 }