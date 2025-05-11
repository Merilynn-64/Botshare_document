document$.subscribe(() => {
  const navItems = document.querySelectorAll('.md-nav__item--nested');

  navItems.forEach((item) => {
    const toggle = item.querySelector('.md-nav__link');

    if (toggle) {
      toggle.addEventListener('click', () => {
        // Collapse all other sections
        navItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('md-nav__item--active');
          }
        });

        // Toggle the clicked section
        item.classList.toggle('md-nav__item--active');
      });
    }
  });
});

