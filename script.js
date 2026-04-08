/* =========================
   AAVAYA LABS SCRIPT.JS
   CLEAN + SAFE + PRODUCTION READY
========================= */

/* Smooth scrolling for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {
            e.preventDefault();

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


/* =========================
   CTA BUTTON ANIMATION
========================= */

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);

    });
});


/* =========================
   WORK WITH US FORM (Formspree)
   https://formspree.io/f/xjgpzjpr
========================= */

const projectForm = document.querySelector("#projectForm");

if (projectForm) {
    projectForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(projectForm);

        const submitButton = projectForm.querySelector("button");
        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        try {
            const response = await fetch(projectForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("✅ Project submitted successfully!");
                projectForm.reset();
            } else {
                alert("❌ Failed to submit project. Try again.");
            }

        } catch (error) {
            alert("⚠️ Network error. Please check connection.");
        }

        submitButton.disabled = false;
        submitButton.innerText = "Submit Project";
    });
}


/* =========================
   HOME CONTACT FORM (Formspree)
   https://formspree.io/f/xdapjydw
========================= */

const contactForm = document.querySelector("form[action*='xdapjydw']");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const submitBtn = contactForm.querySelector("button");
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("✅ Message sent successfully!");
                contactForm.reset();
            } else {
                alert("❌ Failed to send message.");
            }

        } catch (error) {
            alert("⚠️ Network error.");
        }

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    });
}


/* =========================
   NAVBAR ACTIVE STATE (OPTIONAL POLISH)
========================= */

const currentPage = window.location.pathname;

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage.split("/").pop()) {
        link.style.color = "#7c3aed";
        link.style.fontWeight = "bold";
    }
});