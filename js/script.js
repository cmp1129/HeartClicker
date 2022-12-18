/* ARRAY WITH LOVE PHRASES */
const phrases = [
    "Te quiero más que a nada en este mundo.",
    "Eres lo mejor que me ha pasado.",
    "Eres mi todo.",
    "Te amo más allá de las palabras."
];

/* FUNCTIONS */
// Function generate random phrase
function showRandomPhrase() {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("letter-text").innerHTML = phrase;
}

// Function resize heart
function resizeHeart() {
    document.getElementById("heart").style.width = "120px";
    document.getElementById("heart").style.height = "120px";
}

// Function restore heart
function restoreHeart() {
    document.getElementById("heart").style.width = "100px";
    document.getElementById("heart").style.height = "100px";
}

// Function counter
function increaseCounter() {
    // Obtenemos el valor actual del contador
    const currentCount = parseInt(document.getElementById("counter-text").innerHTML, 10);

    // Aumentamos el valor del contador en 1
    const newCount = currentCount + 1;

    // Actualizamos el contenido del elemento con el nuevo valor del contador
    document.getElementById("counter-text").innerHTML = newCount;
}

// Function show times you click
function showCounter() {
    // Obtenemos el valor actual del contador
    const currentCount = parseInt(document.getElementById("counter-text").innerHTML, 10);

    // Mostramos el contador como una notificación con el texto "Has echo click X veces"
    alert(`Has echo click ${currentCount} veces`);
}



/* EVENT LISTENER */
document.getElementById("heart").addEventListener("click", showRandomPhrase);
document.getElementById("heart").addEventListener("mouseenter", resizeHeart);
document.getElementById("heart").addEventListener("mouseleave", restoreHeart);
document.getElementById("heart").addEventListener("click", increaseCounter);
document.getElementById("counter-icon").addEventListener("mouseenter", showCounter);