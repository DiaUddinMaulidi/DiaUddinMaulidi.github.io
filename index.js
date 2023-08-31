let menu = document.querySelector('.navbar-extra #hamburger-menu');
let navbar = document.querySelector('.navbar-nav');

menu.addEventListener('click', function (e) {
    e.preventDefault();
    navbar.classList.toggle('aktif');
});

window.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('aktif');
    };
});