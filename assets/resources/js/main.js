
//menu mobile---------------------------------------------------------
document.addEventListener("scroll", () => {
    if (window.innerWidth > 1200) {
      const navbar = document.getElementById("nav-red");
      const links = document.getElementsByClassName("a"); 
      
      if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
  
        for (let link of links) {
          link.classList.add("a-scrolled");
        }
      } else {
        navbar.classList.remove("scrolled");
  
        for (let link of links) {
          link.classList.remove("a-scrolled");
        }
      }
    }
  });

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.menu-icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "assets/resources/images/svg/menu.svg"; 
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "assets/resources/images/svg/close.svg";
    }
}

document.addEventListener('click', (event) => {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (
        !menuMobile.contains(event.target) && 
        !menuIcon.contains(event.target)     
    ) {
        menuMobile.classList.remove('open');
        menuIcon.src = "assets/resources/images/svg/menu.svg"; 
    }
});



//botões----------------------------------------------------------------

let cardapioButton = document.querySelector('#cardapio-button');

cardapioButton.addEventListener('click', function(){
  window.open('../../pages/cardapio.html', '_self');
})

