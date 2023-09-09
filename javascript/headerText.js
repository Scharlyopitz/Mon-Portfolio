export default function headerText() {
    const spanContainers = document.querySelectorAll("header a div");

    spanContainers.forEach((span) => {
        const letters = span.children[0].textContent.split("");

        span.innerHTML = "";

        letters.forEach((letter, index) => {
            span.innerHTML += `<span style="transition-delay: ${
                0.05 * index
            }s">${letter}<span/>`;
        });
    });
}
