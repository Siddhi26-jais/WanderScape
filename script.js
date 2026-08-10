
// ========== SCROLL TO TOP BUTTON ==========

const topButton = document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ========== HAMBURGER MENU ==========

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


// ========== GALLERY LIGHTBOX ==========

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg) {

    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

    }

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}