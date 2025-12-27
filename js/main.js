/* =========================
   MAIN JAVASCRIPT FILE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ACTIVE NAV LINK ON SCROLL
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* =========================
       SMOOTH SCROLL FIX (SAFETY)
    ========================= */

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /* =========================
       PLACEHOLDER FOR FUTURE
       - Mobile menu toggle
       - Animations
       - Form handling
    ========================= */

    console.log("Main JS loaded successfully");
});


/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${scrollPercent}%`;
});


/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   SCROLL REVEAL LOGIC
========================= */

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
            el.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

