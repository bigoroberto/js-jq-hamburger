$(document).ready(function(){
  
  //creo le mie referenze
  var listHamburgerMenu = $(".hamburger-menu");
  var menuBurger = $(".header > a ");
  var closeMenuBurger = $(".close");
  
  //do il comando click al menuburger per far apparire il suo contenuto
  menuBurger.click(function(){
    listHamburgerMenu.show();
  });

  //do il comando click al menuburger per far chiudere il suo contenuto
  closeMenuBurger.click(function(){
    listHamburgerMenu.close();
  });

});