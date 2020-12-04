const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");
hamburger.addEventListener('click', ()=>{
    //Animate Link
navLinks.classList.toggle("open");
navLinks.style.display='flex'
links.forEach( link => {
link.classList.toggle("fade");
link.addEventListener('click' , () => {
    navLinks.style.display='none';
});
});
// Hamburger Animation
hamburger.classList.toggle("toggle");
});
