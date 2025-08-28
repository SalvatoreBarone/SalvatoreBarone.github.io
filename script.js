const aboutNav = document.getElementById("aboutNav")
const teachingNav = document.getElementById("teachingNav")
const researchNav = document.getElementById("researchNav")
const serviceNav = document.getElementById("serviceNav")
const publicationsNav = document.getElementById("publicationsNav")
const projectsNav = document.getElementById("projectsNav")


const aboutSection = document.getElementById("about")
const researchSection = document.getElementById("Research")
const teachingSection = document.getElementById("Teaching")
const publicationsSection = document.getElementById("publications")
const projectSection = document.getElementById("Projects")
const serviceSection = document.getElementById("ProfessionalService")

let isOpen = false

// scroll the section

aboutNav.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

teachingNav.addEventListener("click", () => {
    teachingSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

researchNav.addEventListener("click", () => {
    researchSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

serviceNav.addEventListener('click', () => {
    serviceSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

publicationsNav.addEventListener("click", () => {
    publicationsSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

projectsNav.addEventListener("click", () => {
    projectSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})
