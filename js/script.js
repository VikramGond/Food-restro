
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Optional: Animate burger icon
  burger.classList.toggle('toggle');
});

// Close the menu when a link is clicked
const links = document.querySelectorAll('#nav-links a');  
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    burger.classList.remove('toggle');
  });
});
// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
    navLinks.classList.remove('show');
    burger.classList.remove('toggle');
  }   
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
    burger.classList.remove('toggle');
  }
});
