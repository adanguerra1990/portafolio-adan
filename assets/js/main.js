/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');

/** ====== Mostrar Menu ======== */
/** validar si existe la constante */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

/** ====== Ocultar Menu ======== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*=============== REMOVER MENU MOVIL ===============*/
const navlink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu');
    // cuando hacemos click en cada enlace de navegación, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.querySelector('#header')
    // cuando el desplazamiento es mayor a 50 de alto del viewport-height, agregar la clase blur-header a la etiqueta <header>
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);


/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form'),
    contactMessage = document.querySelector('#contact-message');

const sentEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_b5x6fng', 'template_3wylv1s', '#contact-form', 'SnglMukEd5ZTnwRg8')
        .then(() => {
            // Mostrar mensaje de enviado
            contactMessage.textContent = 'Mensaje enviado✅'

            // Remover Mensaje despues de 5segundos
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000);

            // limpiar los inputs
            contactForm.reset();

        }, () => {
            // Mostrar mensaje de error
            contactMessage.textContent = 'Mensaje no Enviado(ERROR de servidor)❌'
        })
}

contactForm.addEventListener('submit', sentEmail);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-up');
    // cuando el desplazamiento es superior a 350 del viewport height, agregue la clase show-scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
    // console.log(window.scrollY);
}
window.addEventListener('scroll', scrollUp);



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Selecciona todas las etiquetas <section> que contengan id
const sections = document.querySelectorAll('section[id]');
console.log(sections);

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    console.log(scrollY);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
        
    });


}
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
    // reset: true // Repetir animacion
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__imagen`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__imagen, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})