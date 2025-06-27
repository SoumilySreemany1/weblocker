document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchAnnouncements');
  const categorySelect = document.getElementById('category');
  const prioritySelect = document.getElementById('priority');
  const announcementCards = document.querySelectorAll('.announcement-card');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  const updatePrefBtn = document.querySelector('.update-pref-btn');

  // Function to filter announcements based on search, category, and priority
  function filterAnnouncements() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedPriority = prioritySelect.value;

    announcementCards.forEach(card => {
      const title = card.querySelector('.announcement-title').textContent.toLowerCase();
      const excerpt = card.querySelector('.announcement-excerpt').textContent.toLowerCase();
      const tagElements = card.querySelectorAll('.tag');
      const tags = Array.from(tagElements).map(tag => tag.textContent.toLowerCase());

      const matchesSearch = title.includes(searchText) || excerpt.includes(searchText);
      const matchesCategory = selectedCategory === 'all' || tags.includes(selectedCategory.replace('_', ' '));
      const matchesPriority = selectedPriority === 'all' || tags.includes(selectedPriority);

      if (matchesSearch && matchesCategory && matchesPriority) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Filter on input and change
  searchInput.addEventListener('input', filterAnnouncements);
  categorySelect.addEventListener('change', filterAnnouncements);
  prioritySelect.addEventListener('change', filterAnnouncements);

  // Simulate "Load More" functionality
  loadMoreBtn.addEventListener('click', function () {
    alert('Load more announcements functionality coming soon!');
    // In a real app, this would fetch more announcements dynamically.
  });

  // Simulate preferences update
  updatePrefBtn.addEventListener('click', function () {
    alert('Notification preferences updated successfully!');
  });
});
