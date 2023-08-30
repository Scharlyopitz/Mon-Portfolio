export default function homeButton() {
    // Texte ciculaire

    const text = document.querySelector(".circulare-text p");

    text.innerHTML = text.innerText
        .split("")
        .map(
            (char, i) =>
                `<span style="transform:rotate(${i * 17}deg)">${char}</span>`
        )
        .join("");

    // Apparition au scroll

    const homeButon = document.querySelector("#Home-btn");

    window.addEventListener("scroll", () => {
        const { scrollTop } = document.documentElement;

        if (scrollTop > 900) {
            homeButon.classList.add("active");
        } else {
            homeButon.classList.remove("active");
        }
    });
}
