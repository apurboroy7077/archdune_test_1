var swiper = new Swiper(".swiperTrustedBrands", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 30,
    },
  },
});
