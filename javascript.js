let scrollDown  = document.getElementById("nav");
let lg = document.getElementById("logo");
function scrollTop() {
    if(window.scrollY > 0) {
        nav.classList.add("fixed");
        lg.src = "images/logo.svg";
    }
    else {
        nav.classList.remove("fixed");
        lg.src = "images/logo1.svg" 
    }
}
window.addEventListener("scroll", scrollTop);

const navSlide = () => {
    let bar = document.querySelector(".burger");
    let nav = document.querySelector("#unordered-list");
    let navLinks = document.querySelectorAll("#unordered-list li");
    bar.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.7}s`
            }
        });
    })    
}
navSlide();

function remove() {
    let nav = document.querySelector("#unordered-list");
    nav.classList.remove("nav-active");
}