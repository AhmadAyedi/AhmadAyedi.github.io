// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Back-to-top button functionality (optional)
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('fixed', 'bottom-8', 'right-8', 'bg-indigo-500', 'text-white', 'px-4', 'py-2', 'rounded-full', 'hover:bg-indigo-400', 'hidden');
backToTopButton.textContent = "↑ Top";
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Animation on scroll (fade-in effect)
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8');
    observer.observe(el);
});
