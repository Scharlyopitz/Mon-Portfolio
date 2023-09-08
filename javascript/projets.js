export default function projets() {
    const ProjectsImagesContainersShowcase =
        document.querySelectorAll(".projet-image");

    const imagesProjetsShowcase =
        document.querySelectorAll(".projet-image img");

    const titlesProjectsShowcase = document.querySelectorAll(
        ".projet-container-text"
    );

    // AJOUT ET SUPPRESSION DES CLASSES SUR CHAQUES PROJETS AU SURVOL DE LA SOURIS

    titlesProjectsShowcase.forEach((titleProject, index) => {
        titlesProjectsShowcase[index].addEventListener("mouseover", () => {
            ProjectsImagesContainersShowcase[index].classList.add("opacity1");
            ProjectsImagesContainersShowcase[index].classList.add("scaleFrame");
            imagesProjetsShowcase[index].classList.add(
                "transformBackgroundImage"
            );
            titlesProjectsShowcase[index].classList.add("white");
        });
    });

    titlesProjectsShowcase.forEach((titleProject, index) => {
        titlesProjectsShowcase[index].addEventListener("mouseleave", () => {
            ProjectsImagesContainersShowcase[index].classList.remove(
                "opacity1"
            );
            ProjectsImagesContainersShowcase[index].classList.remove(
                "scaleFrame"
            );
            imagesProjetsShowcase[index].classList.remove(
                "transformBackgroundImage"
            );
            titlesProjectsShowcase[index].classList.remove("white");
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
        titlesProjectsShowcase[index].addEventListener("click", () => {
            ProjectsImagesContainersShowcase[index].classList.add("opacity1");
            UnderBtnsProjects[index].classList.add("under-btn-reveal");
            imagesProjetsShowcase[index].classList.add("transition-page");
            Projects[index].classList.add("reveal-projet-transition");
            ProjectsImages[index].classList.add("backgroundPosition");
            ProjectsTextsContainer[index].classList.add("reveal-active");
            leaveProjects[index].classList.add("active-btn");
            setTimeout(() => {
                imagesProjetsShowcase[index].classList.remove(
                    "transition-page"
                );
            }, 1500);
        });
    });

    // AJOUT DES CLASSES TRANSITION ET SUPPRESSION DE CERTAINES CLASSES AU DEPART DU PROJET

    leaveProjects.forEach((leaveProjet, index) => {
        leaveProjects[index].addEventListener("click", () => {
            Projects[index].classList.add("hide-projet-transition");
            Projects[index].classList.add("active-transition");

            setTimeout(() => {
                Projects[index].classList.remove("hide-projet-transition");
                Projects[index].classList.remove("reveal-projet-transition");
                ProjectsImages[index].classList.remove("backgroundPosition");
                ProjectsTextsContainer[index].classList.remove("reveal-active");
                UnderBtnsProjects[index].classList.remove("under-btn-reveal");
                leaveProjects[index].classList.remove("active-btn");
                Projects[index].classList.remove("active-transition");
            }, 800);
        });
    });
}
