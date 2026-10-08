
// ===============================
// CAMPUS LEADERSHIP JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Close any mobile navigation in the future
            console.log("Navigation link clicked.");

        });

    });


    // Hero button
    const heroButton = document.querySelector(".hero-button");

    if (heroButton) {

        heroButton.addEventListener("click", function () {

            console.log("Viewing campus leadership.");

        });

    }


    // Profile cards animation
    const cards = document.querySelectorAll(
        ".profile-card, .person-card, .president-card"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.cursor = "pointer";

        });

    });


    console.log("Campus Leadership website loaded successfully.");

});
