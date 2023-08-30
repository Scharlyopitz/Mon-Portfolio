export default function loader() {
    const body = document.querySelector("body");

    setTimeout(() => {
        body.style.overflow = "visible";
    }, 6000);

    // Cacher le texte du loader pour l'animation

    const textLoader = document.querySelector(".texte-loader");

    setTimeout(() => textLoader.classList.add("opacity0"), 2000);

    setTimeout(() => textLoader.classList.add("opacity1 mix-blend-mode"), 3700);

    const textHeader = document.querySelector(".portfolio-logo");

    setTimeout(() => (textHeader.style.zIndex = 600), 3700);
}
