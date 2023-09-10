export default function scrollReveal() {
    // TEXTES SECTIONS

    const titleSections = document.querySelectorAll(".text-section h2");

    const descriptionSections = document.querySelectorAll(".text-section p");

    titleSections.forEach((section, index) => {
        window.addEventListener("scroll", () => {
            const { scrollTop, clientHeight } = document.documentElement;

            const topELementToTopViewport =
                titleSections[index].getBoundingClientRect().top;
            descriptionSections[index].getBoundingClientRect().top;

            if (
                scrollTop >
                (scrollTop + topELementToTopViewport).toFixed() -
                    clientHeight * 0.95
            ) {
                titleSections[index].classList.add("reveal-text-section");
                descriptionSections[index].classList.add("reveal-text-section");
            }
        });
    });

    // A PROPOS SECTION

    const animatedTextsApropos1 = document.querySelectorAll(".copy1-wrap");

    const animatedTextsApropos2 = document.querySelectorAll(".copy2-wrap");

    const animatedTextsApropos3 = document.querySelectorAll(".copy3-wrap");

    const animatedTextsContainerApropos = document.querySelector(
        ".container-animate-text"
    );

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        const topELementToTopViewport =
            animatedTextsContainerApropos.getBoundingClientRect().top;

        if (
            scrollTop >
            (scrollTop + topELementToTopViewport).toFixed() - clientHeight * 0.7
        ) {
            animatedTextsApropos1.forEach((animatedTextApropos1) => {
                animatedTextApropos1.classList.add("reveal-animated-text");
            });
            animatedTextsApropos2.forEach((animatedTextApropos2) => {
                animatedTextApropos2.classList.add("reveal-animated-text");
            });
            animatedTextsApropos3.forEach((animatedTextApropos3) => {
                animatedTextApropos3.classList.add("reveal-animated-text");
            });
        }
    });

    // BIOGRAPHIE

    const texteBiographie = document.querySelectorAll(".biographie p");

    const biographie = document.querySelector(".biographie");

    texteBiographie.forEach((texte) => {
        window.addEventListener("scroll", () => {
            const { scrollTop, clientHeight } = document.documentElement;

            const topELementToTopViewport =
                biographie.getBoundingClientRect().top;

            if (
                scrollTop >
                (scrollTop + topELementToTopViewport).toFixed() -
                    clientHeight * 0.8
            ) {
                texte.classList.add("ApparitionTexteBtiographie");
            }
        });
    });

    // COMPETENCES

    const competences = document.querySelectorAll(".competences-percent");

    const competencesContainer = document.querySelector(
        ".competences-container"
    );

    const transitionDelay = 0.1;

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        const topELementToTopViewport =
            competencesContainer.getBoundingClientRect().top;

        if (
            scrollTop >
            (scrollTop + topELementToTopViewport).toFixed() - clientHeight * 0.9
        ) {
            competences.forEach((competence, index) => {
                competence.classList.add("reveal-competences");
                competence.style.transitionDelay = `${
                    transitionDelay * index
                }s`;
            });
        }
    });

    // PROJETS

    const ProjetsContainerShowcase =
        document.querySelector(".projet-container");

    const ProjetsContainerTextsShowcase = document.querySelectorAll(
        ".projet-container-text p"
    );

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        const topELementToTopViewport =
            ProjetsContainerShowcase.getBoundingClientRect().top;

        if (
            scrollTop >
            (scrollTop + topELementToTopViewport).toFixed() - clientHeight * 0.7
        ) {
            ProjetsContainerTextsShowcase.forEach(
                (ProjetContainerTextShowcase, index) => {
                    ProjetContainerTextShowcase.classList.add(
                        "reveal-projets-showcase"
                    );

                    ProjetContainerTextShowcase.style.animationDelay = `${
                        transitionDelay * index
                    }s`;
                }
            );
        }
    });

    // CONTACT

    const containerContactLogos = document.querySelector(
        ".container-contact-logo"
    );

    const ContactLogos = document.querySelectorAll(".container-contact-logo a");

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        const topELementToTopViewport =
            containerContactLogos.getBoundingClientRect().top;

        if (
            scrollTop >
            (scrollTop + topELementToTopViewport).toFixed() - clientHeight * 0.8
        ) {
            ContactLogos.forEach((ContactLogo) => {
                ContactLogo.classList.add("revealContactLogos");
            });
        }
    });
}
