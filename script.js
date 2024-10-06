document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada correctamente");
});

document.addEventListener('DOMContentLoaded', function () {
    
    let currentExperience = 0;
    const experiences = document.querySelectorAll('.carousel-item');

    function showExperience(index) {
        experiences.forEach((experience, i) => {
            experience.classList.remove('active');
            if (i === index) {
                experience.classList.add('active');
            }
        });
    }

    function nextExperience() {
        currentExperience = (currentExperience + 1) % experiences.length;
        showExperience(currentExperience);
    }

    function previousExperience() {
        currentExperience = (currentExperience - 1 + experiences.length) % experiences.length;
        showExperience(currentExperience);
    }

    
    showExperience(currentExperience);

    
    document.querySelector('.carousel-button.next').addEventListener('click', nextExperience);
    document.querySelector('.carousel-button.prev').addEventListener('click', previousExperience);

    
    let currentProject = 0;
    const projects = document.querySelectorAll('.proyecto-item');

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.remove('active');
            if (i === index) {
                project.classList.add('active');
            }
        });
    }

    function nextProject() {
        currentProject = (currentProject + 1) % projects.length;
        showProject(currentProject);
    }

    function previousProject() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(currentProject);
    }

    
    showProject(currentProject);

    
    document.querySelector('#proyectos .carousel-button.next').addEventListener('click', nextProject);
    document.querySelector('#proyectos .carousel-button.prev').addEventListener('click', previousProject);
});
