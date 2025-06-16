// sidebar.js

// 1. First create and inject the CSS
const sidebarCSS = `

/* Overlay Styles */
.hdr .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.hdr .overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Sidebar Styles */
.hdr .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background: linear-gradient(135deg, #4a6fa5, #166088);
  color: #f8f9fa;
  overflow-x: hidden;
  transition: width 0.3s;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.hdr .sidebar.show {
  width: 260px;
}

.hdr .sidebar-header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 20px;
}
.hdr .sidebar-header a {
  text-decoration: none;
}
.hdr .prof {
  display: flex;
  align-items: center;
}

.hdr .prof img {
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.hdr .prof-text {
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  white-space: nowrap;
}

.hdr .toggle-btn {
  background: transparent;
  border: none;
  color: #f8f9fa;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.hdr .toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Share button styles */
.hdr .share-container {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hdr .share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hdr .share-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.hdr .share-btn i {
  margin-right: 8px;
}

.hdr .nav-links {
  padding: 20px 0;
  height: calc(100vh - 180px);
  overflow-y: auto;
  color: white;
}

.hdr .nav-links.active {
}
.hdr .nav-links:hover {
}

/* Custom Scrollbar */
.hdr .nav-links::-webkit-scrollbar {
  width: 6px;
}

.hdr .nav-links::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.hdr .nav-links::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  transition: background 0.2s;
}

.hdr .nav-links::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.hdr .nav-item {
  position: relative;
  color: white;
  margin: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
  transition: background-color 0.2s;
}

.hdr .nav-item.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.hdr .nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hdr .nav-link {
  display: flex;
  align-items: center;
  padding: 12px 0px;
  text-decoration: none;
  transition: all 0.2s;
}

.hdr .nav-link.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.hdr .nav-text, .hdr .nav-links i, .hdr .dropdown-item span {
  color: #f8f9fa;
}
.hdr .nav-icon {
  font-size: 1.2rem;
  min-width: 40px;
  display: flex;
  justify-content: center;
}

.hdr .nav-text {
  white-space: nowrap;
  margin-right: 10px;
}

.hdr .dropdown-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 5px 5px;
}

.hdr .dropdown-menu.show {
  max-height: 500px;
}

.hdr .dropdown-item {
  padding: 10px 15px 10px 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.2s;
}

.hdr .dropdown-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.hdr .dropdown-item .nav-icon {
  margin-left: -15px;
}

.hdr .dropdown-item:hover {
  background-color: red;
}

/* Chevron Icon Styles */
.hdr .chevron-icon {
  margin-left: auto;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
}

.hdr .chevron-icon.rotated {
  transform: rotate(180deg);
}

.hdr .pwsft-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-top: auto;
}

.hdr .pwsft {
  width: 170px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px #8c8484;
}

/* Top Navigation */
.hdr .top-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  background: linear-gradient(10deg, #0054e3, #75f9a6);
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
}
.hdr .top-nav a {
  display: flex;
  text-decoration: none;
}
.hdr .top-nav-content {
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 100%;
  justify-content: space-between;
}

.hdr .top-nav-logo {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
}

.hdr .top-nav h2 {
  margin: 0;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.hdr .notification-badge {
  position: relative;
  margin-left: auto;
  margin-right: 30px;
  cursor: pointer;
}

.hdr .notification-badge i {
  font-size: 1.3rem;
}

.hdr .notification-badge .badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
}

.hdr .mobile-toggle {
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
`;

// Create style element and inject CSS
const styleElement = document.createElement('style');
styleElement.innerHTML = sidebarCSS;
document.head.appendChild(styleElement);

// Load Font Awesome
const fontAwesomeCSS = document.createElement('link');
fontAwesomeCSS.rel = 'stylesheet';
fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeCSS);

// HTML Template
const sidebarHTML = `
<div class="hdr">
<aside class="sidebar">
  <div class="sidebar-header">
    
    <a href="u-profile.html">
    <div class="prof">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png" alt="user profile img">
      <span class="prof-text">Sallau 2012</span>
    </div>
    </a>
    <button class="toggle-btn">
      <i class="fas fa-times"></i>
    </button>
  </div>

  <div class="share-container">
    <button class="share-btn">
      <i class="fas fa-share-alt"></i>
      Share this page
    </button>
  </div>

  <div class="nav-links">
    <div class="nav-item">
      <a href="home.html" class="nav-link">
        <i class="fas fa-home nav-icon"></i>
        <span class="nav-text">Home</span>
      </a>
    </div>
    
    <div class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-photo-video nav-icon"></i>
        <span class="nav-text">Media</span>
        <i class="fas fa-chevron-down chevron-icon"></i>
      </a>
      <div class="dropdown-menu">
        <a href="gallery.html" class="dropdown-item">
          <i class="fas fa-images nav-icon"></i>
          <span>Gallery</span>
        </a>
        <a href="shorts.html" class="dropdown-item">
          <i class="fas fa-film nav-icon"></i>
          <span>Shorts Videos</span>
        </a>
        <a href="videos.html" class="dropdown-item">
          <i class="fas fa-video nav-icon"></i>
          <span>Videos</span>
        </a>
      </div>
    </div>
    
    <div class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-users nav-icon"></i>
        <span class="nav-text">Participants</span>
        <i class="fas fa-chevron-down chevron-icon"></i>
      </a>
      <div class="dropdown-menu">
        <a href="members.html" class="dropdown-item">
          <i class="fas fa-user-friends nav-icon"></i>
          <span>Members</span>
        </a>
        <a href="officials.html" class="dropdown-item">
          <i class="fas fa-user-tie nav-icon"></i>
          <span>Officials</span>
        </a>
        <a href="efficiencies.html" class="dropdown-item">
          <i class="fas fa-chart-line nav-icon"></i>
          <span>Efficiencies</span>
        </a>
        <a href="Phonebook.html" class="dropdown-item">
          <i class="fas fa-address-book nav-icon"></i>
          <span>Phonebook</span>
        </a>
      </div>
    </div>
    
    <div class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-money-bill-wave nav-icon"></i>
        <span class="nav-text">Finance</span>
        <i class="fas fa-chevron-down chevron-icon"></i>
      </a>
      <div class="dropdown-menu">
        <a href="account.html" class="dropdown-item">
          <i class="fas fa-wallet nav-icon"></i>
          <span>Accounts</span>
        </a>
        <a href="contributions.html" class="dropdown-item">
          <i class="fas fa-hand-holding-usd nav-icon"></i>
          <span>Contributions</span>
        </a>
        <a href="expenses.html" class="dropdown-item">
          <i class="fas fa-receipt nav-icon"></i>
          <span>Expenses</span>
        </a>
      </div>
    </div>
    
    <div class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-building nav-icon"></i>
        <span class="nav-text">Organization</span>
        <i class="fas fa-chevron-down chevron-icon"></i>
      </a>
      <div class="dropdown-menu">
        <a href="dashboard.html" class="dropdown-item">
          <i class="fas fa-tachometer-alt nav-icon"></i>
          <span>Dashboard</span>
        </a>
        <a href="awards.html" class="dropdown-item">
          <i class="fas fa-trophy nav-icon"></i>
          <span>Awards</span>
        </a>
        <a href="about.html" class="dropdown-item">
          <i class="fas fa-info-circle nav-icon"></i>
          <span>About</span>
        </a>
        <a href="contact.html" class="dropdown-item">
          <i class="fas fa-address-book nav-icon"></i>
          <span>Contact</span>
        </a>
        <a href="rules.html" class="dropdown-item">
          <i class="fas fa-book nav-icon"></i>
          <span>Rules and Regulations</span>
        </a>
      </div>
    </div>
    
    <div class="nav-item">
      <a href="web-details.html" class="nav-link">
        <i class="fas fa-desktop nav-icon"></i>
        <span class="nav-text">Website Details</span>
      </a>
    </div>

    <div class="nav-item">
      <a href="settings.html" class="nav-link">
        <i class="fas fa-cog nav-icon"></i>
        <span class="nav-text">Settings</span>
      </a>
    </div>

    <div class="nav-item" style="margin-top: 20px;">
      <a onclick="logout()" class="nav-link">
        <i class="fas fa-sign-out-alt nav-icon"></i>
        <span class="nav-text">Logout</span>
      </a>
    </div>
  </div>
  
  <div class="pwsft-container">
    <a href="https://powersoft1.blogspot.com"><img class="pwsft" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUMtpHtQPGJBq9NG7_-Dt3lZzzcTAbc6iAP1EPYislndUBNa49eEYzTeJPe4nZZJc7OhvJedo4NCdpcR-sAwKggb6Fm1lnPd4J6qWn9g577iyhZYv7OBrRUcL3ED2qRkGpiq3kX5A92R9jRLgM6BFCjMf5EeN8VSfzzs4y9QV9Yi4yCBWY9MB5YVgHTUs/s300/developed_by_ps.png" alt="Developed by PowerSoft"></a>
  </div>
</aside>

<div class="overlay"></div>

<nav class="top-nav">
  <button class="mobile-toggle">
    <i class="fas fa-bars"></i>
  </button>
  <div class="top-nav-content">
  <a href="home.html">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcezqQ6F4OSf0luVskJn4IQpLIIZlDd76_FySr_j09RlRF4PDt8VTAJ2HhvtEypIuEB1tJlaeovoGgu1B92TA996a-coIY_7qHaKFpTTeSrUIZ5R0e35zk7rzL-fr3_usYBhsOMUIety8w-7Hx2GJRVcyFi95bb0yTx6FZnMQW4Xxg4lzW_1sSf3x8WMu/s500/SALLAU%202012.png" alt="Logo" class="top-nav-logo">
    <h2>Sallau 2012</h2>
    </a>
    <div class="notification-badge">
      <i class="fas fa-bell"></i>
      <span class="badge">5</span>
    </div>
  </div>
</nav>

</div>
`;

// Initialize the component
document.addEventListener('DOMContentLoaded', function() {
  // Inject HTML
  document.getElementById('header').innerHTML = sidebarHTML

  // Get elements
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const overlay = document.querySelector('.overlay');
  const dropdownParents = document.querySelectorAll('.nav-item');
  const notificationBadge = document.querySelector('.notification-badge');
  const shareBtn = document.querySelector('.share-btn');

  // Function to open sidebar
  function openSidebar() {
    sidebar.style.width = '260px';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
  }

  // Function to close sidebar
  function closeSidebar() {
    sidebar.style.width = '0';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  }

  // Toggle sidebar visibility
  function toggleSidebar() {
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
      openSidebar();
    } else {
      closeSidebar();
    }
  }

  // Desktop toggle button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', closeSidebar);
  }

  // Mobile toggle button
  if (mobileToggle) {
    mobileToggle.addEventListener('click', openSidebar);
  }

  // Close sidebar when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Dropdown functionality with smooth chevron rotation
  dropdownParents.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    const chevron = item.querySelector('.chevron-icon');
    
    if (dropdown && chevron) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
        chevron.classList.toggle('rotated');
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
      
      // Reset chevron icons
      document.querySelectorAll('.chevron-icon').forEach(chevron => {
        chevron.classList.remove('rotated');
      });
    }
  });

  // Notification badge click handler
  if (notificationBadge) {
    notificationBadge.addEventListener('click', function() {
      alert('You have new notifications!');
    });
  }

  // Share button functionality
  if (shareBtn && navigator.share) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this page',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    });
  } else if (shareBtn) {
    // Fallback for browsers that don't support Web Share API
    shareBtn.addEventListener('click', () => {
      alert('Web Share API not supported in your browser. Copy this URL: ' + window.location.href);
    });
  }

  // Highlight current page with improved active state
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavItems = document.querySelectorAll('.nav-link, .dropdown-item');
  
  allNavItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && (href === currentPath || href === `/${currentPath}`)) {
      item.classList.add('active');
      
      // If it's a dropdown item, also highlight its parent nav-item
      const parentNavItem = item.closest('.nav-item');
      if (parentNavItem) {
        parentNavItem.classList.add('active');
        
        // Open the dropdown and rotate chevron if this is a dropdown item
        const dropdown = item.closest('.dropdown-menu');
        if (dropdown) {
          dropdown.classList.add('show');
          const chevron = dropdown.previousElementSibling.querySelector('.chevron-icon');
          if (chevron) {
            chevron.classList.add('rotated');
          }
        }
      }
    }
  });
});
