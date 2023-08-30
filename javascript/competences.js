export default function competences() {
    const REACT = document.querySelector(".REACT");

    const logoReact = document.querySelector(".logo-react");

    REACT.addEventListener("mouseover", function () {
        logoReact.style.opacity = "1";
    });

    REACT.addEventListener("mouseleave", function () {
        logoReact.style.opacity = "0";
    });

    const HTML = document.querySelector(".HTML");

    const logoHtml = document.querySelector(".logo-html");

    HTML.addEventListener("mouseover", function () {
        logoHtml.style.opacity = "1";
    });

    HTML.addEventListener("mouseleave", function () {
        logoHtml.style.opacity = "0";
    });

    const CSS = document.querySelector(".CSS");

    const logoCss = document.querySelector(".logo-css");

    CSS.addEventListener("mouseover", function () {
        logoCss.style.opacity = "1";
    });

    CSS.addEventListener("mouseleave", function () {
        logoCss.style.opacity = "0";
    });

    const REDUX = document.querySelector(".REDUX");

    const logoRedux = document.querySelector(".logo-redux");

    REDUX.addEventListener("mouseover", function () {
        logoRedux.style.opacity = "1";
    });

    REDUX.addEventListener("mouseleave", function () {
        logoRedux.style.opacity = "0";
    });

    const JS = document.querySelector(".JS");

    const logoJs = document.querySelector(".logo-javascript");

    JS.addEventListener("mouseover", function () {
        logoJs.style.opacity = "1";
    });

    JS.addEventListener("mouseleave", function () {
        logoJs.style.opacity = "0";
    });

    const SASS = document.querySelector(".SASS");

    const logoSass = document.querySelector(".logo-sass");

    SASS.addEventListener("mouseover", function () {
        logoSass.style.opacity = "1";
    });

    SASS.addEventListener("mouseleave", function () {
        logoSass.style.opacity = "0";
    });
}
