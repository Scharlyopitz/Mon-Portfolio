export default function header() {
    // SPLIT DE CHAQUES MOTS POUR L'EFFET AU SURVOL DES LIENS

    const spanContainers = document.querySelectorAll("header a div");

    spanContainers.forEach((span) => {
        const letters = span.children[0].textContent.split("");

        span.innerHTML = "";

        letters.forEach((letter, index) => {
            span.innerHTML += `<span style="transition-delay: ${
                0.05 * index
            }s">${letter}<span/>`;
        });
    });

    // EFFET POUR LE MENU BURGER

    const burger = document.querySelector(".burger");

    const burgerMenu = document.querySelector(".burger-menu");

    const burgerMenuLinks = document.querySelectorAll(".burger-menu a");

    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active-burger");
        burger.classList.toggle("unactive-burger");
        burgerMenu.classList.toggle("active-burger-menu");
        burgerMenu.classList.toggle("unactive-burger-menu");
        burgerMenuLinks.forEach((burgerMenuLink) => {
            burgerMenuLink.classList.toggle("reveal-text-burger");
            burgerMenuLink.classList.toggle("unreveal-text-burger");
        });
    });

    burgerMenuLinks.forEach((burgerMenuLink) => {
        burgerMenuLink.addEventListener("click", () => {
            setTimeout(() => {
                burger.classList.toggle("active-burger");
                burger.classList.toggle("unactive-burger");
                burgerMenu.classList.toggle("active-burger-menu");
                burgerMenu.classList.toggle("unactive-burger-menu");
            }, 600);
            burgerMenuLinks.forEach((burger) => {
                burger.classList.toggle("reveal-text-burger");
                burger.classList.toggle("unreveal-text-burger");
            });
        });
    });
}
