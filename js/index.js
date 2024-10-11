let detailsIndex = 0;
let memoriesIndex = 0;

function moveCarousel1(direction) {
  const carousel = document.querySelector('.carousel-detalhes');
  const images = document.querySelectorAll('.carousel-detalhes img');
  const imageWidth = images[0].offsetWidth + parseInt(window.getComputedStyle(images[0]).marginRight);

  detailsIndex = (detailsIndex + direction + images.length) % images.length;

  carousel.style.transform = `translateX(${-detailsIndex * imageWidth}px)`;
}

function moveCarousel2(direction) {
  const carousel = document.querySelector('.carousel-memorias');
  const images = document.querySelectorAll('.carousel-memorias img');
  const imageWidth = images[0].offsetWidth + parseInt(window.getComputedStyle(images[0]).marginRight);

  memoriesIndex = (memoriesIndex + direction + images.length) % images.length;

  carousel.style.transform = `translateX(${-memoriesIndex * imageWidth}px)`;
}