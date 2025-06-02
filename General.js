document.addEventListener("DOMContentLoaded", function () {
    // Add favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'icon/favicon.png';
    document.head.appendChild(link);

    // Reference existing containers
    const search = document.getElementById('search');
      const searchInput = document.getElementById('searchInput');
      const searchClear = document.getElementById('searchClear');
      const postsGrid = document.getElementById('postsGrid');
      const postCards = document.querySelectorAll('.card');
      const noResults = document.getElementById('noResults');
    const contactBtn = document.getElementById("btn");
    const footer = document.getElementById("footer");

    // Create and append elements
    search.innerHTML = `<div class="search-container">
        <div class="search-box">
          <i class="fas fa-search search-icon"></i>
          <input type="text" id="searchInput" class="search-input" placeholder="Search activities..." aria-label="Search activities">
          <span class="search-clear" id="searchClear">&times;</span>
        </div>
      </div><br>
      <!-- No Results Message (hidden by default) -->
        <div class="no-results" id="noResults" style="display: none;">
          <i class="fas fa-search-minus"></i>
          <h3>No result found</h3>
          <p>Try different search terms</p>
        </div>`;
    
    contactBtn.innerHTML = `<a href="contact.html"><img src="icon/contact1.png" alt="contact"></a>`;

    // Footer
    footer.innerHTML = `
        <div class="footer-container">
            <br>
            <nav>
                    <a href="activities.html">Home</a>
                    <a href="activities.html">Activities</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
            </nav>
            <p class="footer-text">© ${new Date().getFullYear()} | Na'eem Everest. All Rights Reserved.</p>
            <div class="footer-logo">
                <a href="https://powersoft1.blogspot.com">
                <img src="icon/powersoft.png" alt="developed by powersoft">
                </a>
                </div>
                
                <a class="privacy" href="Privacy.html">
                  Privacy Policy
                </a>
        </div>
    `;

    // Search functionality
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let hasResults = false;
        
        postCards.forEach(card => {
          // Get all searchable content from the card
          const title = card.querySelector('.post-title').textContent.toLowerCase();
          const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
          const category = card.querySelector('.category-badge').textContent.toLowerCase();
          const date = card.querySelector('.post-date').textContent.toLowerCase();
          
          // Combine all searchable content
          const searchContent = `${title} ${excerpt} ${category} ${date}`;
          
          const isVisible = searchContent.includes(searchTerm);
          card.style.display = isVisible ? 'block' : 'none';
          if (isVisible) hasResults = true;
        });
        
        // Show/hide no results message
        noResults.style.display = hasResults ? 'none' : 'block';
      });
      
      // Clear search functionality
      searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      });
      
      // Clear search when pressing Escape key
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          this.value = '';
          this.dispatchEvent(new Event('input'));
        }
      });
});