// Strict Lazy Loading Implementation
document.addEventListener("DOMContentLoaded", function() {
  // Initialize for existing images
  lazyLoadImages();
  
  // Watch for dynamically added images
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        lazyLoadImages();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

function lazyLoadImages() {
  // Process all images without no-lazy attribute
  document.querySelectorAll('img:not([no-lazy]):not([data-lazy-processed])').forEach(function(img) {
    // Skip if already processed
    if (img.hasAttribute('data-lazy-processed')) return;
    
    // Store original src if not already stored
    if (!img.dataset.src && img.src) {
      img.dataset.src = img.src;
    }
    
    // Set placeholder
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png';
    img.setAttribute('data-lazy-processed', 'true');
    
    // Set up IntersectionObserver
    const io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.onload = function() {
            lazyImage.removeAttribute('data-lazy-processed');
          };
          io.unobserve(lazyImage);
        }
      });
    });
    
    io.observe(img);
  });
}
