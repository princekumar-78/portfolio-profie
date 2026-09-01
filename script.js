/* ==================================
   DARK / LIGHT MODE
================================== */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");


/* Check saved theme */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


/* Theme button */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});



/* ==================================
   BACK TO TOP BUTTON
================================== */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==================================
   CONTACT FORM
================================== */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const userName = document.getElementById("name").value;

    const userEmail = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;


    const emailBody =

        "Name: " + userName +

        "\nEmail: " + userEmail +

        "\n\nMessage:\n" + message;


    const mailtoLink =

        "mailto:princeyadav123maa@gmail.com" +

        "?subject=" + encodeURIComponent(subject) +

        "&body=" + encodeURIComponent(emailBody);


    window.location.href = mailtoLink;


    formMessage.textContent =

        "Your email application is opening. Thank you for contacting me!";


    contactForm.reset();

});



/* ==================================
   ACTIVE NAVIGATION LINK
================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (

            link.getAttribute("href") ===
            "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});



/* ==================================
   SCROLL ANIMATION
================================== */

const animatedCards = document.querySelectorAll(

    ".skill-card, .project-card, .ml-box, .ai-card, .eda-card, .info-card"

);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {

        threshold: 0.1

    }

);


animatedCards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =

        "opacity 0.6s ease, transform 0.6s ease";


    observer.observe(card);

});