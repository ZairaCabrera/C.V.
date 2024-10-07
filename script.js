/* General Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Header */
header {
    background-color: #00ab61;
    padding: 20px 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

header .nav-link {
    color: white !important;
    font-size: 1.1rem;
    transition: color 0.3s;
}

header .nav-link:hover {
    color: #e0e0e0 !important;
}

/* Main Container */
main {
    padding-top: 0%; 
}

@media (max-width: 768px) {
    main {
        padding-top: 2%;
    }
}

@media (max-width: 1000px) {
    main {
        padding-top: 2%;
    }
}

/* Logo Styling */
.logo img {
    height: 150px;
    width: auto;
    float: left;
    padding-left: 30px;
    border-radius: 50%;
}

/* Sections Styling */
h1, h2 {
    color: #005e3e;
    margin-bottom: 20px;
}

@media (min-width: 769px) {
    h1, h2 {
        text-align: center;
    }

    /* Align carousel controls to the sides */
    #experienciaCarousel .carousel-control-prev,
    #experienciaCarousel .carousel-control-next,
    #proyectosCarousel .carousel-control-prev,
    #proyectosCarousel .carousel-control-next {
        width: 5%;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: #00ab61;
        border-radius: 50%;
        padding: 10px;
    }
}

#sobre-mi p, #contacto p, #formacion ul, #proyectos p {
    text-align: justify;
    font-size: 1rem;
}

#contacto div p{
    text-align: center;
}

/* Carousel Styling */
#experienciaCarousel .carousel-control-prev,
#experienciaCarousel .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    z-index: 1000;
}

#experienciaCarousel .carousel-control-prev {
    left: 0;
}

#experienciaCarousel .carousel-control-next {
    right: 0;
}

#experienciaCarousel .carousel-inner {
    margin-top: 20px;
}

#experienciaCarousel .carousel-item {
    transition: transform 0.6s ease-in-out;
}

#experienciaCarousel .carousel-control-prev-icon,
#experienciaCarousel .carousel-control-next-icon {
    background-color:#005e3e;
    border-radius: 50%;
    padding: 10px;
}

#experienciaCarousel .carousel-item ul {
    list-style: none; /* Eliminar viñetas o numeración */
    padding: 0; /* Eliminar el padding de la lista */
    margin: 0; /* Eliminar el margen de la lista */
    border: none; /* Eliminar cualquier borde */
}

#experienciaCarousel .carousel-item ul li {
    background: none; /* Eliminar el fondo */
    border: none; /* Eliminar el borde */
    padding: 10px 0; /* Ajustar el espaciado entre elementos de la lista */
    font-size: 1rem; /* Ajustar el tamaño de la fuente si es necesario */
}

@media (max-width: 768px) {
    /* Carrusel de Experiencia en dispositivos móviles */
    #experienciaCarousel .carousel-control-prev,
    #experienciaCarousel .carousel-control-next {
        opacity: 0.5;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 10%;
        z-index: 1000;
    }

    #experienciaCarousel .carousel-control-prev {
        left: 10px;
    }

    #experienciaCarousel .carousel-control-next {
        right: 10px;
    }

    #experienciaCarousel .carousel-control-prev-icon,
    #experienciaCarousel .carousel-control-next-icon {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        padding: 10px;
    }

    #experienciaCarousel .carousel-control-prev:hover,
    #experienciaCarousel .carousel-control-next:hover {
        opacity: 1;
    }
}

/* Chart.js Canvas */
#competenciasChart {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}

/* Project Buttons */
.github-button {
    margin-top: 10px;
    color: #00ab61;
    background-color: white;
    border: 2px solid #00ab61;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 10px 20px;
}

.github-button:hover {
    background-color: #00ab61;
    color: white;
    border-color: #008e4f;
}

/* Footer Styling */
footer {
    background-color: #00ab61;
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 30px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    header .nav-link {
        font-size: 1rem;
    }

    .logo img {
        height: 120px;
    }

    h1, h2 {
        font-size: 2rem;
    }

    #sobre-mi p, #contacto p, #formacion ul, #proyectos p {
        font-size: 0.9rem;
    }

    .carousel-item ul li {
        font-size: 0.9rem;
    }
}

@media (max-width: 576px) {
    header .nav-link {
        font-size: 0.9rem;
    }

    h1, h2 {
        font-size: 1.8rem;
    }

    #sobre-mi, #contacto, #formacion, #experiencia, #proyectos {
        padding: 15px;
    }

    .github-button {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
}
