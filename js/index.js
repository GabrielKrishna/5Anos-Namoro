let currentIndex = 0;

function moveCarousel1(direction) {
  const carousel = document.querySelector('.carousel-detalhes');
  const images = document.querySelectorAll('.carousel-detalhes img');
  const imageWidth = images[0].offsetWidth + parseInt(window.getComputedStyle(images[0]).marginRight);

  currentIndex = (currentIndex + direction + images.length) % images.length;

  carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function moveCarousel2(direction) {
  const carousel = document.querySelector('.carousel-memorias');
  const images = document.querySelectorAll('.carousel-memorias img');
  const imageWidth = images[0].offsetWidth + parseInt(window.getComputedStyle(images[0]).marginRight);

  currentIndex = (currentIndex + direction + images.length) % images.length;

  carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}