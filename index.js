// Variables globales
let count = 0;
let maxCount = 0;
let minCount = 0;

// Elementos del DOM
const countElement = document.getElementById('count');
const maxElement = document.getElementById('max');
const minElement = document.getElementById('min');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Funciones
function updateDisplay() {
    countElement.textContent = count;
    
    // Actualizar máximo y mínimo
    if (count > maxCount) maxCount = count;
    if (count < minCount) minCount = count;
    
    maxElement.textContent = maxCount;
    minElement.textContent = minCount;
    
    // Efectos visuales basados en el valor
    applyVisualEffects();
}

function applyVisualEffects() {
    // Resetear clases de animación
    countElement.classList.remove('pulse', 'bounce', 'glow');
    
    // Aplicar animación basada en la acción
    setTimeout(() => {
        countElement.classList.add('pulse');
    }, 10);
    
    // Cambiar color basado en el valor (más suaves para tema oscuro)
    if (count > 0) {
        countElement.style.color = '#10b981'; // Verde
        countElement.style.textShadow = '0 0 20px rgba(16, 185, 129, 0.7)';
    } else if (count < 0) {
        countElement.style.color = '#ef4444'; // Rojo
        countElement.style.textShadow = '0 0 20px rgba(239, 68, 68, 0.7)';
    } else {
        countElement.style.color = '#ffffff'; // Blanco
        countElement.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    }
    
    // Efecto en el contenedor con colores más suaves
    const display = document.querySelector('.counter-display');
    if (count > 10) {
        display.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        display.classList.add('glow');
    } else if (count < -10) {
        display.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        display.classList.add('glow');
    } else {
        display.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
        display.classList.remove('glow');
    }
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    maxCount = 0;
    minCount = 0;
    updateDisplay();
    
    // Efecto especial al resetear
    countElement.classList.add('bounce');
    
    // Efecto de reseteo visual
    const display = document.querySelector('.counter-display');
    display.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    display.classList.remove('glow');
}

// Event Listeners
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

// Soporte para teclado
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case '+':
        case 'ArrowUp':
            increase();
            break;
        case '-':
        case 'ArrowDown':
            decrease();
            break;
        case 'r':
        case 'R':
        case '0':
            reset();
            break;
    }
});

// Inicialización
updateDisplay();

// Efecto de carga inicial
window.addEventListener('load', () => {
    countElement.style.transform = 'scale(0)';
    setTimeout(() => {
        countElement.style.transition = 'transform 0.5s ease';
        countElement.style.transform = 'scale(1)';
    }, 100);
});

// Console log divertido
console.log(`
🌙 ¡Contador Oscuro Cargado! 
Controles:
- Clic en botones
- Teclas: + - r
- Flechas: ↑ ↓

✨ Características:
- Tema oscuro elegante
- Efectos de brillo y sombras
- Animaciones suaves
- Diseño responsive
`);