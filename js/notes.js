
/**
 * Notes.js - Search and Filter logic for CSA Notes Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('notesSearch');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const noteCards = document.querySelectorAll('.note-card-modern');
  const theoryDivider = document.getElementById('theory-divider');
  const methodologyDivider = document.getElementById('methodology-divider');

  // Filter Logic
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle active class
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      noteCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all') {
          card.style.display = 'flex';
        } else {
          if (category === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });

      // Show/Hide Dividers based on filter
      if (filterValue === 'theory') {
        theoryDivider.style.display = 'flex';
        methodologyDivider.style.display = 'none';
      } else if (filterValue === 'methodology') {
        theoryDivider.style.display = 'none';
        methodologyDivider.style.display = 'flex';
      } else {
        theoryDivider.style.display = 'flex';
        methodologyDivider.style.display = 'flex';
      }

      // Re-trigger reveal animation for visible cards
      refreshReveals();
    });
  });

  // Search Logic
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();

      noteCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(term) || desc.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Hide methodology divider if searching and no methodology results (roughly)
      // For simplicity, we just keep dividers visible during search if not specifically filtered
    });
  }
  
  // Particle Generation
  function createParticles() {
    const container = document.querySelector('.bg-glow-static');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
    }
  }

  createParticles();

  function refreshReveals() {
    const revealed = document.querySelectorAll('.reveal');
    revealed.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }

  // Initial call to reveal
  setTimeout(refreshReveals, 100);
});
