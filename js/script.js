const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
});


// Controlador de la barra de progreso

document.addEventListener("DOMContentLoaded", function () {
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const paletteIcon = document.getElementById("paletteIcon");
    const colorPicker = document.getElementById("colorPicker");

    let isDarkMode = true;

    function applyDarkMode() {
        document.documentElement.style.setProperty('--bg-color', '#080808');
        document.documentElement.style.setProperty('--second-bg-color', '#001005');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        moonIcon.style.display = 'none';  // Oculta la luna
        sunIcon.style.display = 'block';  // Muestra el sol
    }

    function applyLightMode() {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--second-bg-color', '#eeeeee');
        document.documentElement.style.setProperty('--text-color', '#000000');
        moonIcon.style.display = 'block';  // Muestra la luna
        sunIcon.style.display = 'none';  // Oculta el sol
    }

    // Cambiar entre modos de tema
    moonIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });

    sunIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });

    // Cambiar el color de los íconos usando el color picker
    colorPicker.addEventListener("input", function () {
        const selectedColor = this.value;
        document.documentElement.style.setProperty('--main-color', selectedColor);
        sunIcon.setAttribute("fill", selectedColor);  // Aplica el color al ícono del sol
        moonIcon.setAttribute("fill", selectedColor);  // Aplica el color al ícono de la luna
        paletteIcon.setAttribute("fill", selectedColor);  // Aplica el color al ícono de la paleta
    });

    // Aplicar el modo oscuro por defecto
    applyDarkMode();
});

// theme control ends here
 // Controlador de la barra de progreso

document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll('.timeline li');

    // Función de observación usando IntersectionObserver
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.6 // 10% del elemento debe estar visible para ser activado
    });

    // Observar cada evento de la timeline
    timelineEvents.forEach(event => {
        observer.observe(event);
    });
});