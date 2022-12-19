/* ARRAY WITH LOVE PHRASES */
const phrases = [
    "You should be kissed and often, and by someone who knows how.",
    "Soul meets soul on lovers’ lips.",
    "Have enough courage to trust love one more time and always one more time.",
    "Whatever our souls are made of, his and mine are the same.",
    "There is only one happiness in this life, to love and be loved.",
    "To love and be loved is to feel the sun from both sides."
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