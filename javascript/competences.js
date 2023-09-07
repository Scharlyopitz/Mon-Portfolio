export default function competences() {
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
            (scrollTop + topELementToTopViewport).toFixed() - clientHeight * 0.7
        ) {
            competences.forEach((competence, index) => {
                competence.classList.add("reveal-competences");
                competence.style.transitionDelay = `${
                    transitionDelay * index
                }s`;
            });
        }
    });
}
