export default function projets() {
    const projets = document.querySelectorAll(".projet-image");

    const imagesProjets = document.querySelectorAll(".projet-image img");

    const texteProjets = document.querySelectorAll(".projet-container-text");

    texteProjets[0].addEventListener("mouseover", () => {
        projets[0].classList.add("opacity1");
        projets[0].classList.add("scaleFrame");
        imagesProjets[0].classList.add("transformBackgroundImage");
        texteProjets[0].classList.add("white");
    });

    texteProjets[0].addEventListener("mouseleave", () => {
        projets[0].classList.remove("opacity1");
        projets[0].classList.remove("scaleFrame");
        imagesProjets[0].classList.remove("transformBackgroundImage");

        texteProjets[0].classList.remove("white");
    });

    texteProjets[1].addEventListener("mouseover", () => {
        projets[1].classList.add("opacity1");
        projets[1].classList.add("scaleFrame");
        imagesProjets[1].classList.add("transformBackgroundImage");

        texteProjets[1].classList.add("white");
    });

    texteProjets[1].addEventListener("mouseleave", () => {
        projets[1].classList.remove("opacity1");
        projets[1].classList.remove("scaleFrame");
        imagesProjets[1].classList.remove("transformBackgroundImage");

        texteProjets[1].classList.remove("white");
    });

    texteProjets[2].addEventListener("mouseover", () => {
        projets[2].classList.add("opacity1");
        projets[2].classList.add("scaleFrame");
        imagesProjets[2].classList.add("transformBackgroundImage");

        texteProjets[2].classList.add("white");
    });

    texteProjets[2].addEventListener("mouseleave", () => {
        projets[2].classList.remove("opacity1");
        projets[2].classList.remove("scaleFrame");
        imagesProjets[2].classList.remove("transformBackgroundImage");

        texteProjets[2].classList.remove("white");
    });

    texteProjets[3].addEventListener("mouseover", () => {
        projets[3].classList.add("opacity1");
        projets[3].classList.add("scaleFrame");
        imagesProjets[3].classList.add("transformBackgroundImage");

        texteProjets[3].classList.add("white");
    });

    texteProjets[3].addEventListener("mouseleave", () => {
        projets[3].classList.remove("opacity1");
        projets[3].classList.remove("scaleFrame");
        imagesProjets[3].classList.remove("transformBackgroundImage");

        texteProjets[3].classList.remove("white");
    });

    // effet au click

    const revealProjet1 = document.querySelector(
        ".reaveal-projets-container-projet1"
    );

    const revealProjet2 = document.querySelector(
        ".reaveal-projets-container-projet2"
    );

    const revealProjet3 = document.querySelector(
        ".reaveal-projets-container-projet3"
    );

    const revealProjet4 = document.querySelector(
        ".reaveal-projets-container-projet4"
    );

    const revealProjet1Image = document.querySelector(
        ".reaveal-projets-container-projet1 img"
    );

    const revealProjet2Image = document.querySelector(
        ".reaveal-projets-container-projet2 img"
    );

    const revealProjet3Image = document.querySelector(
        ".reaveal-projets-container-projet3 img"
    );

    const revealProjet4Image = document.querySelector(
        ".reaveal-projets-container-projet4 img"
    );

    const revealProjet1Texts = document.querySelectorAll(
        ".reaveal-projets-container-projet1 p"
    );

    const revealProjet2Texts = document.querySelectorAll(
        ".reaveal-projets-container-projet2 p"
    );

    const revealProjet3Texts = document.querySelectorAll(
        ".reaveal-projets-container-projet3 p"
    );

    const revealProjet4Texts = document.querySelectorAll(
        ".reaveal-projets-container-projet4 p"
    );

    const arrowsBack = document.querySelectorAll(".arrow-back");

    const underBtns = document.querySelectorAll(".under-btn");

    texteProjets[0].addEventListener("click", () => {
        projets[0].classList.add("opacity1");
        underBtns[0].classList.add("under-btn-reveal");
        imagesProjets[0].classList.add("transition-page");
        revealProjet1.classList.add("reveal-projet-transition");
        revealProjet1Image.classList.add("backgroundPosition");
        revealProjet1Texts.forEach((revealProjet1Text) => {
            revealProjet1Text.classList.add("halfTextReveal");
        });
        arrowsBack[0].classList.add("active-btn");

        setTimeout(() => {
            imagesProjets[0].classList.remove("transition-page");
        }, 1500);
    });

    texteProjets[1].addEventListener("click", () => {
        projets[1].classList.add("opacity1");
        underBtns[1].classList.add("under-btn-reveal");
        imagesProjets[1].classList.add("transition-page");
        revealProjet2.classList.add("reveal-projet-transition");
        revealProjet2Image.classList.add("backgroundPosition");
        revealProjet2Texts.forEach((revealProjet2Text) => {
            revealProjet2Text.classList.add("halfTextReveal");
        });
        arrowsBack[1].classList.add("active-btn");

        setTimeout(() => {
            imagesProjets[1].classList.remove("transition-page");
        }, 1500);
    });

    texteProjets[2].addEventListener("click", () => {
        projets[2].classList.add("opacity1");
        underBtns[2].classList.add("under-btn-reveal");
        imagesProjets[2].classList.add("transition-page");
        revealProjet3.classList.add("reveal-projet-transition");
        revealProjet3Image.classList.add("backgroundPosition");
        revealProjet3Texts.forEach((revealProjet3Text) => {
            revealProjet3Text.classList.add("halfTextReveal");
        });
        arrowsBack[2].classList.add("active-btn");

        setTimeout(() => {
            imagesProjets[2].classList.remove("transition-page");
        }, 1500);
    });

    texteProjets[3].addEventListener("click", () => {
        projets[3].classList.add("opacity1");
        underBtns[3].classList.add("under-btn-reveal");
        imagesProjets[3].classList.add("transition-page");
        revealProjet4.classList.add("reveal-projet-transition");
        revealProjet4Image.classList.add("backgroundPosition");
        revealProjet4Texts.forEach((revealProjet4Text) => {
            revealProjet4Text.classList.add("halfTextReveal");
        });
        arrowsBack[3].classList.add("active-btn");

        setTimeout(() => {
            imagesProjets[3].classList.remove("transition-page");
        }, 1500);
    });

    // effet au click pour quitter le projet

    const params = document.querySelectorAll(".params");

    arrowsBack[0].addEventListener("click", () => {
        revealProjet1.classList.add("hide-projet-transition");
        params[0].classList.add("active-transition");

        setTimeout(() => {
            revealProjet1.classList.remove("hide-projet-transition");
            revealProjet1.classList.remove("reveal-projet-transition");
            revealProjet1Image.classList.remove("backgroundPosition");
            revealProjet1Texts.forEach((revealProjet1Text) => {
                revealProjet1Text.classList.remove("halfTextReveal");
            });
            underBtns[0].classList.remove("under-btn-reveal");
            arrowsBack[0].classList.remove("active-btn");
            params[0].classList.remove("active-transition");
        }, 800);
    });

    arrowsBack[1].addEventListener("click", () => {
        revealProjet2.classList.add("hide-projet-transition");
        params[1].classList.add("active-transition");

        setTimeout(() => {
            revealProjet2.classList.remove("hide-projet-transition");
            revealProjet2.classList.remove("reveal-projet-transition");
            revealProjet2Image.classList.remove("backgroundPosition");
            revealProjet2Texts.forEach((revealProjet2Text) => {
                revealProjet2Text.classList.remove("halfTextReveal");
            });
            underBtns[1].classList.remove("under-btn-reveal");
            arrowsBack[1].classList.remove("active-btn");
            params[1].classList.remove("active-transition");
        }, 800);
    });

    arrowsBack[2].addEventListener("click", () => {
        revealProjet3.classList.add("hide-projet-transition");
        params[2].classList.add("active-transition");

        setTimeout(() => {
            revealProjet3.classList.remove("hide-projet-transition");
            revealProjet3.classList.remove("reveal-projet-transition");
            revealProjet3Image.classList.remove("backgroundPosition");
            revealProjet3Texts.forEach((revealProjet3Text) => {
                revealProjet3Text.classList.remove("halfTextReveal");
            });
            underBtns[2].classList.remove("under-btn-reveal");
            arrowsBack[2].classList.remove("active-btn");
            params[2].classList.remove("active-transition");
        }, 800);
    });

    arrowsBack[3].addEventListener("click", () => {
        revealProjet4.classList.add("hide-projet-transition");
        params[3].classList.add("active-transition");

        setTimeout(() => {
            revealProjet4.classList.remove("hide-projet-transition");
            revealProjet4.classList.remove("reveal-projet-transition");
            revealProjet4Image.classList.remove("backgroundPosition");
            revealProjet4Texts.forEach((revealProjet4Text) => {
                revealProjet4Text.classList.remove("halfTextReveal");
            });
            underBtns[3].classList.remove("under-btn-reveal");
            arrowsBack[3].classList.remove("active-btn");
            params[3].classList.remove("active-transition");
        }, 800);
    });
}
