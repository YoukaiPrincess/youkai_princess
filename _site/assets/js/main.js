document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const body = document.body;

  window.addEventListener('scroll', () => {
    // Check if the user has scrolled down from the top
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Check if the user has reached the bottom of the page
    if ((window.innerHeight + window.scrollY) >= body.offsetHeight) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  });
});