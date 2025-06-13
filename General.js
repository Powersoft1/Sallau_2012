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
                <a class="f-nav-link" href="home.html"><span class="footer-link">Home</span></a>
                <a class="f-nav-link" href="officials.html"><span class="footer-link">Officials</span></a>
                <a class="f-nav-link" href="awards.html"><span class="footer-link">Awards</span></a>
                <a class="f-nav-link" href="about.html"><span class="footer-link">About</span></a>
            </nav>
            <p class="footer-text">© ${new Date().getFullYear()} | Sallau 2012. All Rights Reserved.</p>
            <div class="footer-logo">
                <a href="https://powersoft1.blogspot.com">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUMtpHtQPGJBq9NG7_-Dt3lZzzcTAbc6iAP1EPYislndUBNa49eEYzTeJPe4nZZJc7OhvJedo4NCdpcR-sAwKggb6Fm1lnPd4J6qWn9g577iyhZYv7OBrRUcL3ED2qRkGpiq3kX5A92R9jRLgM6BFCjMf5EeN8VSfzzs4y9QV9Yi4yCBWY9MB5YVgHTUs/s300/developed_by_ps.png" alt="developed by powersoft">
                </a>
            </div>
            <a class="privacy" href="Privacy.html">Privacy Policy</a><br><br>
        </div>`;
        
        // Highlight current page with improved active state
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const footerNav = document.querySelectorAll('.f-nav-link');
  
  footerNav.forEach(item => {
    const href = item.getAttribute('href');
    if (href && (href === currentPath || href === `/${currentPath}`)) {
      item.style.border = "1px solid red";
       }
    });
      

    // Initialize search functionality
    initializeSearch();
});

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const noResults = document.getElementById('noResults');

    // Store original display styles for all existing cards
    const originalStyles = new Map();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        originalStyles.set(card, window.getComputedStyle(card).display);
    });

    function performSearch() {
        const term = searchInput.value.toLowerCase().trim();
        let found = false;

        // Get fresh list of cards (including any dynamically added ones)
        const allCards = document.querySelectorAll('.card');
        
        allCards.forEach(card => {
            // Store original display if not already stored
            if (!originalStyles.has(card)) {
                originalStyles.set(card, window.getComputedStyle(card).display);
            }

            const cardText = card.textContent.toLowerCase();
            const isMatch = cardText.includes(term);
            
            card.style.display = isMatch ? originalStyles.get(card) : 'none';
            if (isMatch) found = true;
        });

        noResults.style.display = found ? 'none' : 'block';
    }

    function clearSearch() {
        searchInput.value = '';
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            card.style.display = originalStyles.get(card) || '';
        });
        noResults.style.display = 'none';
        searchInput.focus();
    }

    searchInput.addEventListener('input', performSearch);
    searchClear.addEventListener('click', clearSearch);
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });

    // Also perform search when new cards might be added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // Check if any added nodes are cards or contain cards
                const addedCards = [];
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.classList && node.classList.contains('card')) {
                            addedCards.push(node);
                        }
                        addedCards.push(...node.querySelectorAll('.card'));
                    }
                });

                if (addedCards.length > 0 && searchInput.value.trim()) {
                    performSearch();
                }
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

const settle = `<div style="display:none; left:0; width:100%; background-color:blue; color:white; position: fixed; top: 0px; z-index: 900; height: 100vh; align-items: center;"><h1>Expr.....</h1></div>`;
document.body.insertAdjacentHTML('beforebegin', settle);
                <a href="about.html">About</a>
            </nav>
            <p class="footer-text">© ${new Date().getFullYear()} | Sallau 2012. All Rights Reserved.</p>
            <div class="footer-logo">
                <a href="https://powersoft1.blogspot.com">
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
