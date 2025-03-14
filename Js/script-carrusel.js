
window.addEventListener('load', function(){
new Glider(document.querySelector('.section-cards'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: {
      prev: '.carrusel-prev',
      next: '.carrusel-next'
    }
  });
})