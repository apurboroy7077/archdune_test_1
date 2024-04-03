var swiper = new Swiper(".swiper-infinite-loop-for-homepage", {
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 10,
  //freeMode: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".homepage-skill-development-course-next-button",
    prevEl: ".homepage-skill-development-course-previous-button",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// var swiper = new Swiper(".swiper-infinite-loop-for-homepage", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   autoplay: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//
// });
