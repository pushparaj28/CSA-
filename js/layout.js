
/**
 * Layout.js - Centralized Navbar and Footer
 * This script injects the common layout elements into every page.
 */

const LAYOUT_CONFIG = {
  marquee: `
    <div class="announcement-bar">
      <div class="marquee-container">
        <div class="marquee-content">
          <div class="marquee-item"><i class="fas fa-heart"></i> CSA 2nd Shift — Dilo Me Basne Wala Batch 🧑💻 🚀</div>
          <div class="marquee-item"><i class="fas fa-star"></i> Welcome to CSA 2025-2026 Official Portal</div>
          <div class="marquee-item"><i class="fas fa-code"></i> Learn • Code • Create • Grow</div>
          <div class="marquee-item"><i class="fas fa-graduation-cap"></i> Future Developers of ITOT Lucknow</div>
          <div class="marquee-item"><i class="fas fa-laptop"></i> Together We Build The Future 💻</div>
          <div class="marquee-item"><i class="fas fa-heart"></i> CSA 2nd Shift — Dilo Me Basne Wala Batch 🧑💻 🚀</div>
          <div class="marquee-item"><i class="fas fa-star"></i> Welcome to CSA 2025-2026 Official Portal</div>
          <div class="marquee-item"><i class="fas fa-code"></i> Learn • Code • Create • Grow</div>
          <div class="marquee-item"><i class="fas fa-graduation-cap"></i> Future Developers of ITOT Lucknow</div>
          <div class="marquee-item"><i class="fas fa-laptop"></i> Together We Build The Future 💻</div>
        </div>
      </div>
    </div>
  `,
  header: `
    <header class="header">
      <div class="header-top container">
        <a class="brand brand-stacked" href="/index.html">
          <span class="brand-logo"><img src="/assets/images/logo.png" alt="IToT Logo" /></span>
          <span class="brand-text-wrap">
            <span class="brand-title">THE INSTITUTE OF TRAINING OF TRAINERS (IToT)</span>
            <span class="brand-subtitle">Lucknow | Shaping Trainers, Building Tomorrow</span>
          </span>
        </a>
      </div>

      <nav class="navbar container">
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav-links" id="navLinks">
          <li><a href="/index.html" id="nav-home">Home</a></li>
          <li><a href="/pages/about/index.html" id="nav-about">About Us</a></li>
          <li><a href="/pages/notes/index.html" id="nav-notes">Notes</a></li>
          <li><a href="/pages/tests/index.html" id="nav-tests">Tests</a></li>
          <li><a href="/pages/assignment/index.html" id="nav-assignment">Assignment</a></li>
          <li><a href="/pages/projects/index.html" id="nav-projects">Projects</a></li>
          <li><a href="/pages/campus/index.html" id="nav-campus">Campus Life</a></li>
          <li><a href="/pages/gallery/index.html" id="nav-gallery">Gallery</a></li>
          <li><a href="/pages/contact/index.html" id="nav-contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  footer: `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <h3>IToT Lucknow</h3>
          <p>Building competent trainers for a stronger, skilled, and self-reliant India.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/pages/about/index.html">About Us</a></li>
            <li><a href="/pages/notes/index.html">Notes</a></li>
            <li><a href="/pages/tests/index.html">Tests</a></li>
            <li><a href="/pages/assignment/index.html">Assignment</a></li>
            <li><a href="/pages/contact/index.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Trade Tests</h4>
          <ul>
            <li><a href="/pages/tests/index.html">CSA Mock Test</a></li>
            <li><a href="/pages/tests/index.html">CHNM Mock Test</a></li>
            <li><a href="/pages/tests/index.html">Electrician Mock</a></li>
          </ul>
        </div>
        <div>
          <h4>Address</h4>
          <p>IToT Campus, Lucknow, Uttar Pradesh</p>
          <p>Email: info@itotlucknow.edu.in</p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2026 The Institute of Training of Trainers, Lucknow. All rights reserved.</p>
      </div>
    </footer>
  `
};

function initLayout() {
  const body = document.body;
  
  // 1. Inject Marquee and Header at the top
  if (!document.querySelector('.header')) {
    const headerContainer = document.createElement('div');
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('index.html') && currentPath.split('/').length <= 2;
    const marqueeHtml = isHomePage ? LAYOUT_CONFIG.marquee : '';
    
    headerContainer.innerHTML = marqueeHtml + LAYOUT_CONFIG.header;
    body.prepend(headerContainer);
  }

  // 2. Inject Footer at the bottom
  if (!document.querySelector('.footer')) {
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = LAYOUT_CONFIG.footer;
    body.appendChild(footerContainer);
  }

  // 3. Highlight active link and set stagger animation delay
  const currentPath = window.location.pathname;
  const navLinksList = document.querySelectorAll('.nav-links > li');
  navLinksList.forEach((li, index) => {
    li.style.setProperty('--i', index);
    const link = li.querySelector('a');
    if (link) {
      if (link.getAttribute('href') === currentPath || 
          (currentPath === '/' && link.getAttribute('href') === '/index.html') ||
          (currentPath.includes(link.getAttribute('href').replace('/index.html', '')) && link.getAttribute('href') !== '/index.html')) {
        link.classList.add('active');
      }
    }
  });

  // 4. Initialize Navbar logic (re-running main.js navbar logic if needed, or keeping it separate)
  setupNavbarEvents();
}

function setupNavbarEvents() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open");
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
  }

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropdown-toggle");
    if (btn) {
      btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 840) {
          e.preventDefault();
          const isExpanded = dropdown.classList.contains("open");
          btn.setAttribute("aria-expanded", !isExpanded);
          dropdown.classList.toggle("open");
        }
      });
    }
  });
}

// Auto-run on DOM Content Loaded
document.addEventListener('DOMContentLoaded', initLayout);
