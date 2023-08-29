const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animateCircles);
}

animateCircles();

// Effet au survol balise <a>

const a = document.querySelectorAll("a");

a.forEach((e) => {
    e.addEventListener("mouseover", () => {
        circles.forEach((circle) => {
            circle.style.transform = "scale(4)";
        });
    });
    e.addEventListener("mouseleave", () => {
        circles.forEach((circle) => {
            circle.style.transform = "";
        });
    });
});

const lienHeader = document.querySelectorAll("header a");

lienHeader.forEach((e) => {
    e.addEventListener("mouseover", () => {
        circles.forEach((circle) => {
            circle.style.transform = "scale(0)";
        });
    });
    e.addEventListener("mouseleave", () => {
        circles.forEach((circle) => {
            circle.style.transform = "";
        });
    });
});

const bouttonsProjets = document.querySelectorAll(".button-site a");

bouttonsProjets.forEach((e) => {
    e.addEventListener("mouseover", () => {
        circles.forEach((circle) => {
            circle.style.transform = "scale(0)";
        });
    });
    e.addEventListener("mouseleave", () => {
        circles.forEach((circle) => {
            circle.style.transform = "";
        });
    });
});

const miniSocialMedias = document.querySelectorAll(".contact-mini a");

miniSocialMedias.forEach((e) => {
    e.addEventListener("mouseover", () => {
        circles.forEach((circle) => {
            circle.style.transform = "scale(3)";
        });
    });
    e.addEventListener("mouseleave", () => {
        circles.forEach((circle) => {
            circle.style.transform = "";
        });
    });
});
