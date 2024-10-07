document.addEventListener('DOMContentLoaded', function () {
    const experienciaCarousel = document.getElementById('experienciaCarousel');
    const proyectosCarousel = document.getElementById('proyectosCarousel');

    // Evento para cuando se activa un elemento del carrusel de experiencia
    experienciaCarousel.addEventListener('slid.bs.carousel', function () {
        toggleArrowVisibility(experienciaCarousel);
    });

    // Evento para cuando se activa un elemento del carrusel de proyectos
    proyectosCarousel.addEventListener('slid.bs.carousel', function () {
        toggleArrowVisibility(proyectosCarousel);
    });

    // Función para mostrar u ocultar las flechas del carrusel según si está en la parte activa
    function toggleArrowVisibility(carousel) {
        const prevControl = carousel.querySelector('.carousel-control-prev');
        const nextControl = carousel.querySelector('.carousel-control-next');
        const activeItem = carousel.querySelector('.carousel-item.active');

        if (activeItem) {
            prevControl.classList.add('show-arrows');
            nextControl.classList.add('show-arrows');
        } else {
            prevControl.classList.remove('show-arrows');
            nextControl.classList.remove('show-arrows');
        }
    }
});
