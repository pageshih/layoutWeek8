$(function() {
  console.log('Hello Bootstrap5');
});


var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  spaceBetween: 30,
  slidesPerView: 2,
  grid:{
    rows:2,
  },
  breakpoints: {
    992:{
      slidesPerView: 2,

    }
  }
});
