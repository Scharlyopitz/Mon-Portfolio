export default function apropos() {
    const texteBiographie = document.querySelectorAll(".biographie p");

    texteBiographie.forEach((texte) => {
        window.addEventListener("scroll", () => {
            const { scrollTop } = document.documentElement;

            if (scrollTop > 1500) {
                texte.classList.add("ApparitionTexteBtiographie");
            }
        });
    });
}
