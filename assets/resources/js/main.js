document.addEventListener("scroll", () => {
    // Verifica se a largura da tela é maior que 1200px
    if (window.innerWidth > 1200) {
      const navbar = document.getElementById("nav-red");
      const links = document.getElementsByClassName("a"); // Retorna uma coleção de elementos
      
      if (window.scrollY > 50) { // Ativa a classe após 50px de scroll
        navbar.classList.add("scrolled");
  
        // Adiciona a classe "a-scrolled" a cada link
        for (let link of links) {
          link.classList.add("a-scrolled");
        }
      } else {
        navbar.classList.remove("scrolled");
  
        // Remove a classe "a-scrolled" de cada link
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
        menuIcon.src = "assets/resources/images/svg/menu.svg"; // Ícone de menu
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "assets/resources/images/svg/close.svg"; // Ícone de close
    }
}

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Verifica se o clique foi fora do menu e do ícone
    if (
        !menuMobile.contains(event.target) && // Clique fora da `mobile-menu`
        !menuIcon.contains(event.target)     // Clique fora do ícone do menu
    ) {
        menuMobile.classList.remove('open');
        menuIcon.src = "assets/resources/images/svg/menu.svg"; // Volta para o ícone de menu
    }
});
