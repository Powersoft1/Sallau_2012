document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(img => {
        if (!img.hasAttribute("data-src")) {
            img.setAttribute("data-src", img.src); // Store original src
            img.src = "icon/placeholder.png"; // replace placeholder

            img.classList.add("lazy-img");
        }
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src; // Load real image
                img.classList.add("fade-in");
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll("img.lazy-img").forEach(img => observer.observe(img));
});