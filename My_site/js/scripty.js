// Rolagem suave para navegação (usado na página de comunicação)
function smoothScroll() {
  const anchors = document.querySelectorAll('nav a');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Chama a função smoothScroll quando a página é carregada (se estiver na página de comunicação)
window.onload = function() {
  if (document.querySelector('body').classList.contains('pagina-comunicacao')) {
    smoothScroll();
  }
};

