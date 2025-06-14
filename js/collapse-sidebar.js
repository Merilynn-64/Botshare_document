document$.subscribe(() => {
  const nestedItems = document.querySelectorAll('.md-nav__item--nested > .md-nav__link');

  nestedItems.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      const currentItem = toggle.parentElement;

      // Skip if this item is already active
      const isActive = currentItem.classList.contains('md-nav__item--active');
      if (!isActive) {
        // Close all others
        document.querySelectorAll('.md-nav__item--nested.md-nav__item--active').forEach((item) => {
          item.classList.remove('md-nav__item--active');
        });
      }
      // Let MkDocs handle activating this item
    });
  });
});


