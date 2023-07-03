// *********** Changement d'image au survol de la souris ***********

const imageDisplay = document.querySelector(".image-display");

const liens = document.querySelectorAll("header a");

liens.forEach((lien) => {
    const pays = lien.className;

    lien.addEventListener("mouseover", function () {
        imageDisplay.style.backgroundImage = `url(images/${pays}.jpg)`;
    });
    lien.addEventListener("mouseleave", function () {
        imageDisplay.style.backgroundImage = "";
    });

    // Evènement au click pour la couleur des boutons

    lien.addEventListener("click", () => {
        liens.forEach((buttons) => {
            buttons.classList.remove("active");
            imageDisplay.style.backgroundImage = `url(images/${pays}.jpg) `;
            pageTransition();
        });
        lien.classList.add("active");
    });
});

// fonction animation changement de page

function pageTransition() {
    containerImage.style.zIndex = "400";
    containerImage.style.top = "50%";
    containerImage.style.right = "50%";
    containerImage.style.transform = "translate(50%,-50%)";
    imageDisplay.style.width = "100vw";
    imageDisplay.style.height = "100vh";
    imageDisplay.style.borderRadius = "0";
    // imageDisplay.style.animation = "none";
}

// Instagram

const instagram = document.querySelector("#contact .instagram");

instagram.addEventListener("mouseover", function () {
    imageDisplay.style.backgroundImage = `url(https://www.numerama.com/wp-content/uploads/2021/08/logo-instagram.jpg)`;
});

instagram.addEventListener("mouseleave", function () {
    imageDisplay.style.backgroundImage = "";
});

// GitHub

const gitHub = document.querySelector("#contact .github");

gitHub.addEventListener("mouseover", function () {
    imageDisplay.style.backgroundImage = `url(https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg)`;
});

gitHub.addEventListener("mouseleave", function () {
    imageDisplay.style.backgroundImage = "";
});

// ********** Affichage permanant après animation **********

// Affichage réseaux sociaux

const socialMedias = document.querySelectorAll("#contact i");

socialMedias.forEach((icon) => {
    setTimeout(() => icon.classList.add("not-hide"), 6000);
});

// Affichage container-image

const containerImage = document.querySelector(".container-image");

setTimeout(() => containerImage.classList.add("not-hide"), 5000);

// **************** LOADER ****************

// Cacher le texte du loader pour l'animation

const textLoader = document.querySelector(".texte-loader");

setTimeout(() => textLoader.classList.add("opacity0"), 2000);

setTimeout(() => textLoader.classList.add("opacity1"), 3700);

// **************** CURSOR ****************

const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animateCircles);
}

animateCircles();

// Effet au survol balise <a>

const a = document.querySelectorAll("a");

a.forEach((e) => {
    e.addEventListener("mouseover", () => {
        circles.forEach((circle) => {
            circle.style.transform = "scale(4)";
        });
    });
    e.addEventListener("mouseleave", () => {
        circles.forEach((circle) => {
            circle.style.transform = "";
        });
    });
});
