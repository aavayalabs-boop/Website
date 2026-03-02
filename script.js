// Intersection Observer for Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

// Apply animations based on page content
let elementsToAnimate = [];

// For index.html
if (document.body.classList.contains("dark")) {
    elementsToAnimate = document.querySelectorAll(".card, .article-card");
}

// For insights.html
if (document.body.classList.contains("light")) {
    elementsToAnimate = document.querySelectorAll(".card.article-card");
}

// Initialize animation styles and observe
elementsToAnimate.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

// Optional: Button hover animations
document.querySelectorAll(".btn-primary, .btn-outline").forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.05)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
});