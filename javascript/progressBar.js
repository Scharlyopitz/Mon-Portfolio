export default function progressBar() {
    function scrollSpy() {
        let scrollTop = document.documentElement.scrollTop;

        let documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let percent = (scrollTop / documentHeight) * 100;

        document.querySelector(".percent").style.width = `${percent}%`;
    }

    document.addEventListener("scroll", scrollSpy);
}
