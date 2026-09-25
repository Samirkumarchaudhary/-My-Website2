// =================================
// PORTFOLIO JAVASCRIPT
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 3D PROFILE MOUSE EFFECT
    // =================================

    const profile = document.querySelector(".profile-3d");
    const profileImage = document.querySelector(".profile-3d img");

    if (profile && profileImage) {

        profile.addEventListener("mousemove", function (event) {

            const rect = profile.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = (x - centerX) / 15;
            const rotateX = (centerY - y) / 15;

            profileImage.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        });

        profile.addEventListener("mouseleave", function () {

            profileImage.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";

        });
    }


    // =================================
    // DARK MODE
    // =================================

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {

        // Remember the user's choice after refreshing the page.
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            darkModeBtn.textContent = "☀️";
        }

        darkModeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");

            darkModeBtn.textContent = isDark ? "☀️" : "🌙";

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );
        });
    }


    // =================================
    // NAVIGATION
    // =================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("User clicked:", link.textContent.trim());

        });

    });


    // =================================
    // TYPING TEXT ANIMATION
    // =================================

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const words = [
            "Software Engineer",
            "Web Developer",
            "Programmer",
            "Technology Learner"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeText() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (characterIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeText, 1500);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex === words.length) {
                        wordIndex = 0;
                    }
                }
            }

            setTimeout(
                typeText,
                deleting ? 60 : 100
            );
        }

        typeText();
    }


    // =================================
    // PAGE LOAD MESSAGE
    // =================================

    console.log(
        "Welcome to my personal portfolio website!"
    );

});
