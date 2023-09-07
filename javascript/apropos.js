export default function apropos() {
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
}
