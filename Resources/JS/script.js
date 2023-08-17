const heroContent = document.querySelector('.hero-content');

// Add a simple fade-in animation
window.addEventListener('load', () => {
  heroContent.style.opacity = 0;
  setTimeout(() => {
    heroContent.style.transition = 'opacity 1s';
    heroContent.style.opacity = 1;
  }, 500);
});



// Smooth scrolling

// Smooth scrolling for internal links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetSection = document.querySelector(link.getAttribute('href'));

    if (targetSection) {
      event.preventDefault(); // Prevent default behavior for internal links
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// ... (existing code) ...

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ... (existing code) ...


//const navLinks = document.querySelectorAll('nav ul li a');
//
//navLinks.forEach(link => {
//  link.addEventListener('click', event => {
//    event.preventDefault();
//    const targetSection = document.querySelector(link.getAttribute('href'));
//    window.scrollTo({
//      top: targetSection.offsetTop - 100,
//      behavior: 'smooth'
//    });
//  });
//});



// Add a bounce animation to the CTA button
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', () => {
  ctaButton.style.animation = 'bounce 0.5s infinite';
});

ctaButton.addEventListener('mouseout', () => {
  ctaButton.style.animation = 'none';
});


// Show and hide the modal
const signinButton = document.querySelector('.nav-signin');
const modal = document.getElementById('signin-modal');
const modalClose = document.querySelector('.modal-close');

signinButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// ... (existing code) ...



