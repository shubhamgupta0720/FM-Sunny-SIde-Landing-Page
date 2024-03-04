// Script for navigation bar
const hamburger = document.getElementById('hamburgerIcon');
const navBarOptions = document.getElementById('navBarOptions');
const st1 = document.querySelector("::after"); 

hamburger.addEventListener('click', () => {
    if(navBarOptions.style.display === "flex"){
        navBarOptions.style.display = "none";
        st1.style.display = "none";
    }
    else{
        navBarOptions.style.display = "flex";
        navBarOptions.classList.add('active');
        st1.style.display = "block";
    }
})

