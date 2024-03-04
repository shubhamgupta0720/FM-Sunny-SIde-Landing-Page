// Script for navigation bar
const hamburger = document.getElementById('hamburgerIcon');
const navBar = document.getElementById('navBarOptions');

if(hamburger){
    hamburger.addEventListener('click', () => {
        navBar.style.display = "block";
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}