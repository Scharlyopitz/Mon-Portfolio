export default function script() {
    window.addEventListener("load", function () {
        this.window.location.href = "#";
        this.document.documentElement.scrollTop = "0";
    });
}
