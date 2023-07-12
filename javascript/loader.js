const body = document.querySelector("body");

setTimeout(() => {
    body.style.overflow = "visible";
}, 6000);

// Cacher le texte du loader pour l'animation

const textLoader = document.querySelector(".texte-loader");

setTimeout(() => textLoader.classList.add("opacity0"), 2000);

setTimeout(() => textLoader.classList.add("opacity1"), 3700);
