document.addEventListener('DOMContentLoaded', function() {

    // --- Activar links de navegación al hacer scroll ---
    // (Esto es lo que activa el "data-bs-spy" en el body del HTML)
    // No requiere código JS extra gracias a Bootstrap.

    // --- Efecto de scroll suave para los links de la navegación ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir el comportamiento por defecto del ancla
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcular la posición del elemento, ajustando por la altura de la navbar
                const navHeight = document.querySelector('#navbar-main').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Para móviles, cerrar el menú después de hacer clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        });
    });

    // --- Mostrar/Ocultar botón de "Volver Arriba" ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Mostrar después de 300px de scroll
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll suave para el botón de "Volver Arriba"
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
