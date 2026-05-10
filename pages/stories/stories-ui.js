document.addEventListener('DOMContentLoaded', () => {
    const storiesContainer = document.getElementById('storiesContainer');
    const searchInput = document.getElementById('studentSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('storyModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    let displayedCount = 12;
    let currentFilter = 'all';
    let currentSearchTerm = '';

    function renderStories() {
        const stories = window.studentStories;
        
        // Filter and Search
        const filtered = stories.filter(story => {
            const matchesCategory = currentFilter === 'all' || story.category === currentFilter;
            const matchesSearch = story.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                                story.course.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                story.bio.toLowerCase().includes(currentSearchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        const toDisplay = filtered.slice(0, displayedCount);
        
        storiesContainer.innerHTML = toDisplay.map((story, index) => `
            <div class="story-card fade-in" data-id="${story.id}" style="animation-delay: ${index * 0.1}s">
                <div class="card-img-wrapper">
                    <img src="${story.image}" alt="${story.name}" loading="lazy" />
                    <div class="achievement-overlay">
                        <span>${story.achievement}</span>
                    </div>
                </div>
                <div class="card-body">
                    <span class="course">${story.course}</span>
                    <h3>${story.name}</h3>
                    <p class="bio">${story.bio}</p>
                    <div class="card-footer">
                        <div class="social-links">
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-github"></i></a>
                        </div>
                        <button class="btn btn-outline read-more-btn" onclick="openStory(${story.id})">Read More</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Handle load more button visibility
        if (toDisplay.length >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Modal logic
    window.openStory = function(id) {
        const story = window.studentStories.find(s => s.id === id);
        if (!story) return;

        modalBody.innerHTML = `
            <div class="full-story-header">
                <div class="modal-image">
                    <img src="${story.image}" alt="${story.name}" />
                </div>
                <div class="modal-info">
                    <span class="course">${story.course}</span>
                    <h2>${story.name}</h2>
                    <p class="achievement-tag"><i class="fas fa-trophy"></i> ${story.achievement}</p>
                    <div class="skills-tags">
                        ${story.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                    <div class="social-links big">
                         <a href="#"><i class="fab fa-linkedin"></i> LinkedIn Profile</a>
                    </div>
                </div>
            </div>
            <div class="journey-content">
                <h4>His/Her Journey</h4>
                <p>${story.journey}</p>
                <div class="quote-box">
                    <i class="fas fa-quote-left"></i>
                    ${story.quote}
                </div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scroll
    };

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Events
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        displayedCount = 12; // Reset view more
        renderStories();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            displayedCount = 12; // Reset view more
            renderStories();
        });
    });

    loadMoreBtn.addEventListener('click', () => {
        displayedCount += 12;
        renderStories();
    });

    // Initial render
    renderStories();
});
