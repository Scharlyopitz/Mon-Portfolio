export default function projets() {
    // TABLEAU DE COMPETENCES POUR LE CHANGEMENT DU SOUS-TITRE

    const skills = [
        {
            skill: "Javascript",
        },
        {
            skill: "Css",
        },
        {
            skill: "React",
        },
        {
            skill: "Seo",
        },
    ];

    // AJOUT ET SUPPRESSION DES CLASSES SUR CHAQUES PROJETS AU SURVOL DE LA SOURIS

    const titlesProjectsShowcase = document.querySelectorAll(
        ".projet-container-text"
    );

    const underTitleProjectsSectionSpan = document.querySelector(
        ".undertitle-change span"
    );

    const underTitleProjectsSection =
        document.querySelector(".undertitle-change");

    const ProjectsImagesContainersShowcase =
        document.querySelectorAll(".projet-image");

    const imagesProjetsShowcase =
        document.querySelectorAll(".projet-image img");

    titlesProjectsShowcase.forEach((titleProject, index) => {
        titleProject.addEventListener("mouseover", () => {
            ProjectsImagesContainersShowcase[index].classList.add("opacity1");

            ProjectsImagesContainersShowcase[index].classList.add("scaleFrame");
            imagesProjetsShowcase[index].classList.add(
                "transformBackgroundImage"
            );
            titleProject.classList.add("white");
            underTitleProjectsSectionSpan.innerHTML = ` Projet réalisé en ${skills[index].skill}.`;
            underTitleProjectsSection.classList.add("change-texts-projects");
        });
    });

    titlesProjectsShowcase.forEach((titleProject, index) => {
        titleProject.addEventListener("mouseleave", () => {
            ProjectsImagesContainersShowcase[index].classList.remove(
                "opacity1"
            );
            ProjectsImagesContainersShowcase[index].classList.remove(
                "scaleFrame"
            );

            imagesProjetsShowcase[index].classList.remove(
                "transformBackgroundImage"
            );
            titleProject.classList.remove("white");
            underTitleProjectsSection.classList.remove("change-texts-projects");
        });
    });

    // AJOUT ET SUPPRESSION DES CLASSES SUR CHAQUES PROJETS AU CLICK

    const Projects = document.querySelectorAll(".params");

    const ProjectsImages = document.querySelectorAll(".params img");

    const leaveProjects = document.querySelectorAll(".arrow-back");

    const UnderBtnsProjects = document.querySelectorAll(".under-btn");

    const ProjectsTextsContainer = document.querySelectorAll(
        ".half-section-text-container"
    );

    titlesProjectsShowcase.forEach((titleProject, index) => {
        titleProject.addEventListener("click", () => {
            ProjectsImagesContainersShowcase[index].classList.add("opacity0");
            ProjectsImagesContainersShowcase[index].classList.add(
                "active-after-transition"
            );
            UnderBtnsProjects[index].classList.add("under-btn-reveal");
            imagesProjetsShowcase[index].classList.add("transition-page");
            Projects[index].classList.add("reveal-projet-transition");
            ProjectsImages[index].classList.add("backgroundPosition");
            ProjectsTextsContainer[index].classList.add("reveal-active");
            leaveProjects[index].classList.add("active-btn");
            underTitleProjectsSection.classList.add(
                "change-texts-projects-transition"
            );
            setTimeout(() => {
                imagesProjetsShowcase[index].classList.remove(
                    "transition-page"
                );
                ProjectsImagesContainersShowcase[index].classList.remove(
                    "active-after-transition"
                );
                underTitleProjectsSection.classList.remove(
                    "change-texts-projects-transition"
                );
                ProjectsImagesContainersShowcase[index].classList.remove(
                    "opacity0"
                );
            }, 1500);
        });
    });

    // AJOUT DES CLASSES TRANSITION ET SUPPRESSION DE CERTAINES CLASSES QUAND ON QUITTE UN PROJET

    leaveProjects.forEach((leaveProjet, index) => {
        leaveProjet.addEventListener("click", () => {
            Projects[index].classList.add("hide-projet-transition");
            Projects[index].classList.add("active-transition");

            setTimeout(() => {
                Projects[index].classList.remove("hide-projet-transition");
                Projects[index].classList.remove("reveal-projet-transition");
                ProjectsImages[index].classList.remove("backgroundPosition");
                ProjectsTextsContainer[index].classList.remove("reveal-active");
                UnderBtnsProjects[index].classList.remove("under-btn-reveal");
                leaveProjet.classList.remove("active-btn");
                Projects[index].classList.remove("active-transition");
            }, 800);
        });
    });
}
