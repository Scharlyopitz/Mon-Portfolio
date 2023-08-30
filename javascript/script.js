export default function script() {
    // // *********** Changement d'image au survol de la souris ***********

    // const imageDisplay = document.querySelector(".image-display");

    // const liens = document.querySelectorAll("header a");

    // liens.forEach((lien) => {
    //     const pays = lien.className;

    //     lien.addEventListener("mouseover", function () {
    //         imageDisplay.style.backgroundImage = `url(images/${pays}.jpg)`;
    //     });

    //     lien.addEventListener("mouseleave", function () {
    //         imageDisplay.style.backgroundImage = "";
    //     });
    // });

    // Affichage permanent container-image

    const containerImage = document.querySelector(".container-image");

    setTimeout(() => containerImage.classList.add("not-hide"), 5000);

    // ************************* Scroll en haut de page au reload *************************

    window.addEventListener("load", function () {
        this.window.location.href = "#";
        this.document.documentElement.scrollTop = "0";
    });
}
