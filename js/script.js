//toogle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validation(form)) return;
    alert("Success");
});

const validation = (form) => {
    let valid = true;
    let name = form.querySelector(".name");
    // Lakukan validasi lainnya
    return valid;
};
