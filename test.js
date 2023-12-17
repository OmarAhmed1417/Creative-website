let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide === totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateSlider();
}

function updateSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  const newTransformValue = -currentSlide * 100 + 'vw';
  sliderContainer.style.transform = 'translateX(' + newTransformValue + ')';
}

// You can add an interval for automatic sliding
// setInterval(() => changeSlide(1), 5000);
