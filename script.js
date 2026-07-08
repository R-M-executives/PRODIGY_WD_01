/*
   NOVA LANDING PAGE
   JavaScript */

const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

/*  
   Navbar Scroll Effect */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }

});

/*  Mobile Menu Toggle */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

/* Close Menu After Click */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");
        menuToggle.innerHTML = "☰";

    });

});

/*  Active Navigation */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("current");
        }

    });

});

/*  Smooth Fade Animation */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".box, .glass-card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";

    observer.observe(item);

});

/* Typing Effect */

const heading = document.querySelector(".hero h1");

const originalText = heading.innerText;

heading.innerText = "";

let index = 0;

function typingEffect() {

    if (index < originalText.length) {

        heading.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typingEffect, 35);

    }

}

window.addEventListener("load", typingEffect);
