document.addEventListener('DOMContentLoaded', function() {
    // Configuración de rutas a los proyectos
    const rutas = {
        'proyecto1': './Comentarios/index.html',
        'proyecto2': './Mi Primer JS/calculadora.html',
        'proyecto3': './Practica 2 CSS_Sports/Practica 2 CSS_Sports.html',
        'proyecto4': './Practica 3/index.html',
        'proyecto5': './Practica 4/index.html',
        'proyecto6': './Practica 5/index.html',
        'proyecto7': './Practica 6/index.html',
        'proyecto8': './Practica 7/index.html',
        'proyecto9': './Primera práctica/primeraPractica.html',
        'proyecto10': './Segunda práctica/Segunda práctica.html',
        'proyecto11': './Tercera práctica/practica3.html',
        'proyecto12': './Practica 9/index.html'
    };

    // Agregar eventos de clic a todos los botones con efectos elegantes
    for (const id in rutas) {
        const boton = document.getElementById(id);
        if (boton) {
            // Efecto de sonido suave al hacer clic (opcional)
            boton.addEventListener('click', function(e) {
                // Agregar efecto visual de onda al hacer clic
                const rect = boton.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                boton.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                    window.location.href = rutas[id];
                }, 300);
            });
        }
    }

    // Añadir animación de entrada a los botones
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
});