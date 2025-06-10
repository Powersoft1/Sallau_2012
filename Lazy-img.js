document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(img => {
        if (!img.hasAttribute("data-src")) {
            img.setAttribute("data-src", img.src); // Store original src
            img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png"; // replace placeholder

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
