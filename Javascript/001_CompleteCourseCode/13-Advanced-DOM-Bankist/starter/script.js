'use strict';

const navLinksContainer = document.querySelector('.nav__links');
const navBar = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const navItems = document.querySelectorAll('.nav__item');
const navLogo = document.querySelector('.nav__logo');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

// Modal handling

function openModal(event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling

btnScrollTo.addEventListener('click', handleSmoothScroll);

function handleSmoothScroll() {
  const coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: coords.left + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
}

// Event Delegation

navLinksContainer.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //Add active classes
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// On hover on nav link, fade out other
navBar.addEventListener('mouseover', function (event) {
  const clicked = event.target.closest('.nav__link');
  if (!clicked) return;
  navLinks.forEach(link => (link.style.opacity = '0.5'));
  navLogo.style.opacity = '0.5';
  clicked.style.opacity = '1';
});

navBar.addEventListener('mouseout', function () {
  navLinks.forEach(link => (link.style.opacity = '1'));
  navLogo.style.opacity = '1';
});

// make nav sticky after crossing section 1

// Intersection Observer API
const header = document.querySelector('.header');
const navHeight = navBar.getBoundingClientRect().height;

function stickyNav([entry]) {
  if (entry.isIntersecting) navBar.classList.remove('sticky');
  else navBar.classList.add('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing elements on scroll

const allSections = document.querySelectorAll('.section');

function revealSections(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const revealObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  revealObserver.observe(section);
});

// Lazy Loading Images

const allImages = document.querySelectorAll('img[data-src]');

function lazyLoadImages(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(lazyLoadImages, {
  root: null,
  threshold: 0,
});

allImages.forEach(img => imageObserver.observe(img));

// Slider Component
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currSlide = 0;
const maxSlides = slides.length;

function createDots() {
  slides.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
}

createDots();

function updateSlider(slideNum = 0) {
  currSlide = Number(slideNum);
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - currSlide)}%)`)
  );
  // Updating active dot
  const allDots = document.querySelectorAll('.dots__dot');
  allDots.forEach(dot => {
    if (Number(dot.dataset.slide) === currSlide)
      dot.classList.add('dots__dot--active');
    else dot.classList.remove('dots__dot--active');
  });
}

updateSlider();

function handleSliderMove(isDirectionRight = true) {
  const slideNum = isDirectionRight
    ? (currSlide + 1) % maxSlides
    : (currSlide - 1 + maxSlides) % maxSlides;
  updateSlider(slideNum);
}

function handleSlidMoveByDots(event) {
  if (!event.target.classList.contains('dots__dot')) return;
  const { slide } = event.target.dataset;
  updateSlider(slide);
}

btnRight.addEventListener('click', handleSliderMove);
btnLeft.addEventListener('click', () => handleSliderMove(false));

document.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'ArrowLeft') handleSliderMove(false);
  if (event.key === 'ArrowRight') handleSliderMove();
});

dotsContainer.addEventListener('click', handleSlidMoveByDots);
