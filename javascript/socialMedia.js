export default function socialMedia() {
    // // Instagram

    // const instagram = document.querySelector(".icon-contact .instagram");

    // instagram.addEventListener("mouseover", function () {
    //     imageDisplay.style.backgroundImage = `url(https://www.numerama.com/wp-content/uploads/2021/08/logo-instagram.jpg)`;
    // });

    // instagram.addEventListener("mouseleave", function () {
    //     imageDisplay.style.backgroundImage = "";
    // });

    // // GitHub

    // const gitHub = document.querySelector(".icon-contact .github");

    // gitHub.addEventListener("mouseover", function () {
    //     imageDisplay.style.backgroundImage = `url(https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg)`;
    // });

    // gitHub.addEventListener("mouseleave", function () {
    //     imageDisplay.style.backgroundImage = "";
    // });

    // Affichage permanent réseaux sociaux

    const socialMedias = document.querySelectorAll(".icon-contact i");

    socialMedias.forEach((icon) => {
        setTimeout(() => icon.classList.add("not-hide"), 6000);
    });
}
