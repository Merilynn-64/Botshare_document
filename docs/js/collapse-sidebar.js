document$.subscribe(() => {
  const sections = document.querySelectorAll('.md-nav__item--nested');

  sections.forEach(section => {
    const toggle = section.querySelector('.md-nav__link');

    if (toggle) {
      toggle.addEventListener('click', () => {
        // Close other sections
        sections.forEach(other => {
          if (other !== section) {
            other.classList.remove('md-nav__item--active');
          }
        });
      });
    }
  });
});
