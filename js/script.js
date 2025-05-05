// Togle class active
const navbarNav = document.querySelector('.navbar-nav')
// Ketika #menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

//Klik di luar sidebar untuk menghilangkan navbarnya
const klikBebas = document.querySelector('#menu')

document.addEventListener('click', function(e) {
    if(!klikBebas.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})