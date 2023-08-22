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
});

// Instagram

const instagram = document.querySelector(".icon-contact .instagram");

instagram.addEventListener("mouseover", function () {
    imageDisplay.style.backgroundImage = `url(https://www.numerama.com/wp-content/uploads/2021/08/logo-instagram.jpg)`;
});

instagram.addEventListener("mouseleave", function () {
    imageDisplay.style.backgroundImage = "";
});

// GitHub

const gitHub = document.querySelector(".icon-contact .github");

gitHub.addEventListener("mouseover", function () {
    imageDisplay.style.backgroundImage = `url(https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg)`;
});

gitHub.addEventListener("mouseleave", function () {
    imageDisplay.style.backgroundImage = "";
});

// ********** Affichage permanant après animation **********

// Affichage réseaux sociaux

const socialMedias = document.querySelectorAll(".icon-contact i");

socialMedias.forEach((icon) => {
    setTimeout(() => icon.classList.add("not-hide"), 6000);
});

// Affichage container-image

const containerImage = document.querySelector(".container-image");

setTimeout(() => containerImage.classList.add("not-hide"), 5000);

// ************************* Scroll en haut de page au reload *************************

// const html = document.querySelector("html");

window.addEventListener("load", function () {
    this.window.location.href = "#";
    this.document.documentElement.scrollTop = "0";
});
