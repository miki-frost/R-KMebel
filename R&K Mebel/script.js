// Skrypt do obsługi prostego slidera

let slideIndex = 0;
    
function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

showSlide(slideIndex); // pierwsze wywołanie