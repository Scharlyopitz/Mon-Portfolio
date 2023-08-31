export default function script() {
    // ************************* Animation au reload *************************

    window.addEventListener("load", function () {
        this.window.location.href = "#";
        this.document.documentElement.scrollTop = "0";
    });
}
