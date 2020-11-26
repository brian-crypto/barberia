let buttons = document.querySelectorAll('.header__nav__boton');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

ScrollReveal().reveal('.home');
ScrollReveal().reveal('.nosotros');
ScrollReveal().reveal('.locales');
ScrollReveal().reveal('.contacto');
