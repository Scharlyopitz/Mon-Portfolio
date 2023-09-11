export default function loader() {
    const body = document.querySelector("body");

    const loader = document.querySelector("#loader");

    setTimeout(() => {
        body.classList.add("overflow-visible");
    }, 4500);

    setTimeout(() => {
        loader.classList.add("display-none");
    }, 4500);
}
