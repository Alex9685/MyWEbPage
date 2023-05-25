 // Agregar interactividad a los botones desplegables
 const accordions = document.querySelectorAll('.accordion');
 accordions.forEach(accordion => {
     accordion.addEventListener('click', function() {
         this.classList.toggle('active');
         const panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
             panel.style.maxHeight = null;
         } else {
             panel.style.maxHeight = panel.scrollHeight + 'px';
         }
     });
 });

 // Agregar animaciones al desplazarse hacia abajo en la página
 function checkScroll() {
     const fadeElements = document.querySelectorAll('.fade-in');
     const slideElements = document.querySelectorAll('.slide-in-left');
     const zoomElements = document.querySelectorAll('.zoom-in');

     fadeElements.forEach(element => {
         if (isElementVisible(element)) {
             element.classList.add('active');
         }
     });

     slideElements.forEach(element => {
         if (isElementVisible(element)) {
             element.classList.add('active');
         }
     });

     zoomElements.forEach(element => {
         if (isElementVisible(element)) {
             element.classList.add('active');
         }
     });
 }

 function isElementVisible(element) {
     const rect = element.getBoundingClientRect();
     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
     return rect.top <= windowHeight * 0.8;
 }
 // Función para alternar el modo oscuro
 function pestaña1(){
      // URL del enlace
      var url = "https://github.com/Alex9685";
    
      // Abrir nueva pestaña con el enlace
      window.open(url, "_blank");
 }

 window.addEventListener('scroll', checkScroll);
 window.addEventListener('load', checkScroll);