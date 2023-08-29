const arrowRight = document.querySelector("#arrowRight");

const arrowLeft = document.querySelector("#arrowLeft");

const projets = document.querySelectorAll(".projet");

const projetDescriptionTitre = document.querySelector(
    ".projet-description-text"
);

const projetDescription = document.querySelector(".projet-description-text2");

const counterSlide = document.querySelector(".counter-slide");

const translate = [
    {
        transformSlide: "0",
        counterSlide: "0",
    },
    {
        transformSlide: "-100%",
        counterSlide: "-24px",
    },
    {
        transformSlide: "-200%",
        counterSlide: "-48px",
    },
    {
        transformSlide: "-300%",
        counterSlide: "-72px",
    },
];

let currentPourcent = 0;

arrowRight.addEventListener("click", function () {
    currentPourcent++;
    if (currentPourcent == translate.length) {
        currentPourcent = 0;
    }

    counterSlide.style.transform = `translateY(${translate[currentPourcent].counterSlide})`;

    projets.forEach((projet) => {
        projet.style.transform = `translateX(${translate[currentPourcent].transformSlide})`;
    });
});

arrowLeft.addEventListener("click", function () {
    currentPourcent--;
    if (currentPourcent < 0) {
        currentPourcent = 3;
    }

    counterSlide.style.transform = `translateY(${translate[currentPourcent].counterSlide})`;

    projets.forEach((projet) => {
        projet.style.transform = `translateX(${translate[currentPourcent].transformSlide})`;
    });
});
