// Theme Toggle
const themeToggle = document.getElementById('toggle-button');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark-mode' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark-mode');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light-mode');
  }
});

// Scroll Animations
const scrollElements = document.querySelectorAll('[data-scroll]');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('is-visible');
};

const hideScrollElement = (element) => {
  element.classList.remove('is-visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

// Parallax Effect
const parallaxElements = document.querySelectorAll('[data-parallax]');

const handleParallax = () => {
  const scrollPosition = window.pageYOffset;
  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax'));
    const yPos = -(scrollPosition * speed);
    el.style.backgroundPositionY = `${yPos}px`;
  });
};

// Floating Sidebar
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarFloating = document.querySelector('.sidebar-floating');

sidebarToggle.addEventListener('click', () => {
  sidebarFloating.classList.toggle('is-open');
});

// Back-to-Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
  handleScrollAnimation();
  handleParallax();
});

// Smooth scroll for back-to-top button
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimation();
  // Force initial trigger to ensure elements are visible
  setTimeout(handleScrollAnimation, 100);
});