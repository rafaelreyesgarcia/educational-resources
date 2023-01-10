const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});