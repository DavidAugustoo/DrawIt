// Menu Mobile

let menuIcon = document.querySelector('.menu-icon--mobile');

menuIcon.addEventListener('click', () => {
    let menuMobileArea = document.querySelector('.header-menu--mobile');

    if(menuMobileArea.classList.contains('open')) {
        menuMobileArea.classList.remove('open');
        console.log('tem a classe open');
    } else {
        menuMobileArea.classList.add('open');
    }
});

// animations

let target = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', () => {
    let windowTop = window.scrollY + ((window.innerHeight * 3) / 4);

    target.forEach(element => {
        if((windowTop) > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
});
