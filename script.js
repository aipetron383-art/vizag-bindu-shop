/* ==========================
   VIZAG BINDU PET SHOP
   PREMIUM SCRIPT
========================== */

// Header Scroll Effect

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(5,5,5,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(5,5,5,0.65)";
        header.style.boxShadow = "none";
    }

});

// Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card,.service-card,.pet-card,.testimonial-card,.gallery-grid img,.contact-info,.map-box"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

// Counter Animation

const counters = document.querySelectorAll(".stat h3");

let started = false;

function animateCounters() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const increment = target / 100;

        function update() {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                    target + "+";

            }

        }

        update();

    });

}

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".hero-stats");

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect().top;

    if (
        position < window.innerHeight &&
        !started
    ) {

        animateCounters();
        started = true;

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Gallery Zoom

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox =
        document.createElement("div");

        lightbox.id = "lightbox";

        lightbox.innerHTML = `
            <img src="${img.src}">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});

// Floating Hero Image

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        heroImage.style.transform =
        `translateY(${Math.sin(angle)*10}px)`;

    },30);

}

// Category Hover Animation

const categories =
document.querySelectorAll(".category-card");

categories.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

// Pet Card Glow

const petCards =
document.querySelectorAll(".pet-card");

petCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(198,156,109,.15),
        #111 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#111";

    });

});

// Phone Button Pulse

const phoneBtn =
document.querySelector(".phone-btn");

if(phoneBtn){

    setInterval(() => {

        phoneBtn.classList.toggle("pulse");

    },1500);

}