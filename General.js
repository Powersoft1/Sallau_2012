document.addEventListener("DOMContentLoaded", function () {
    // Add favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png';
    document.head.appendChild(link);

    // Create search UI
    const search = document.getElementById('search');
    search.innerHTML = `<div class="search-container">
        <div class="search-box">
          <i class="fas fa-search search-icon"></i>
          <input type="text" id="searchInput" class="search-input" placeholder="Search..." aria-label="Search">
          <span class="search-clear" id="searchClear">&times;</span>
        </div>
      </div><br>
      <div class="no-results" id="noResults" style="display: none;">
        <i class="fas fa-search-minus"></i>
        <h3>No result found</h3>
        <p>Try different search terms</p>
      </div>`;

    // Create contact button
    const contactBtn = document.getElementById("btn");
    contactBtn.innerHTML = `<a href="contact.html"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs4IqdV-NeLxohIFK9m-QY0QhpCw6MEWOcDnPLoHqsrpJSmznGXqIBxzPoq_ldu936vJ8QFc9zLth6PmnyoiJyfexj1ZHr6na-VNuAjeZ_QdkXfmddZKtM1D9PERzvDfbYqMDoulEY3_e6Hmtk8VS5IiDMyBDsudMWj3LAAeQeNMRcQuIe_7yxqDSZs9c/s232/contact1.png" alt="contact"></a>`;

    // Create footer
    const footer = document.getElementById("footer");
    footer.innerHTML = `
        <div class="footer-container">
            <br>
            <nav>
                <a href="home.html">Home</a>
                <a href="officials.html">Officials</a>
                <a href="awards.html">Awards</a>
                <a href="about.html">About</a>
            </nav>
            <p class="footer-text">© ${new Date().getFullYear()} | Sallau 02012. All Rights Reserved.</p>
            <div class="footer-logo">
                <a href="ahttps://powersoft1.blogspot.com">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUMtpHtQPGJBq9NG7_-Dt3lZzzcTAbc6iAP1EPYislndUBNa49eEYzTeJPe4nZZJc7OhvJedo4NCdpcR-sAwKggb6Fm1lnPd4J6qWn9g577iyhZYv7OBrRUcL3ED2qRkGpiq3kX5A92R9jRLgM6BFCjMf5EeN8VSfzzs4y9QV9Yi4yCBWY9MB5YVgHTUs/s300/developed_by_ps.png" alt="developed by powersoft">
                </a>
            </div>
            <a class="privacy" href="Privacy.html">Privacy Policy</a><br><br>
        </div>`;

    // Get all cards and store their original display styles
    const cards = document.querySelectorAll('.card');
    const originalStyles = [];
    cards.forEach((card, index) => {
        originalStyles[index] = window.getComputedStyle(card).display;
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase().trim();
        let found = false;

        cards.forEach((card, index) => {
            const cardText = card.textContent.toLowerCase();
            const isMatch = cardText.includes(term);
            
            card.style.display = isMatch ? originalStyles[index] : 'none';
            if (isMatch) found = true;
        });

        noResults.style.display = found ? 'none' : 'block';
    });

    // Clear search
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        cards.forEach((card, index) => {
            card.style.display = originalStyles[index];
        });
        noResults.style.display = 'none';
        searchInput.focus();
    });

    // Clear on Escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            cards.forEach((card, index) => {
                card.style.display = originalStyles[index];
            });
            noResults.style.display = 'none';
        }
    });
});

   const settle = `<div style="display:none; left:0; width:100%; background-color:blue; color:white; position: fixed; top: 0px; z-index: 900; height: 100vh; align-items: center;"><h1>Expr.....</h1></div>`
   document.body.insertAdjacentHTML('beforebegin', settle);
