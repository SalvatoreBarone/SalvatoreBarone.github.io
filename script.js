// Navigation for the single-page academic website.
const navigationLinks = document.querySelector('.navigation');
const menuToggle = document.querySelector('.toggle-button');

const destinations = {
    aboutNav: 'about',
    researchNav: 'Research',
    teachingNav: 'Teaching',
    publicationsNav: 'publications',
    projectsNav: 'Projects',
    serviceNav: 'ProfessionalService'
};

function closeMobileMenu() {
    if (navigationLinks) navigationLinks.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navigationLinks) {
    menuToggle.setAttribute('role', 'button');
    menuToggle.setAttribute('tabindex', '0');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    const toggle = () => {
        const expanded = navigationLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(expanded));
    };
    menuToggle.addEventListener('click', toggle);
    menuToggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle();
        }
    });
}

Object.entries(destinations).forEach(([navId, sectionId]) => {
    const link = document.getElementById(navId);
    const section = document.getElementById(sectionId);
    if (!link || !section) return;
    link.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
    });
});
// Current Research items and the Teaching/Projects sections use native HTML
// <details>/<summary>, so they require no JavaScript to expand or collapse.
