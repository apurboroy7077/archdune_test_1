let imagesSrc = [
  "./images/book_section/chashi bari_01.jpg",
  "./images/book_section/chashi bari_04.jpg",
  "./images/book_section/chashi bari_05.jpg",
  "./images/book_section/chashi bari_06.jpg",
  "./images/book_section/chashi bari_02.jpg",
  "./images/book_section/chashi bari_03.jpg",
];
let sliderDiv = document.getElementsByClassName(
  "book-selling-section-swipper-wrapper"
)[0];
let loadImagesInDiv = () => {
  let code = ``;
  for (let i = 0; i < imagesSrc.length; i++) {
    let imageSrc = imagesSrc[i];
    let singleCode = ` <div class="swiper-slide book-selling-section-image-div">
    <img
      src="${imageSrc}"
      class="book-selling-section-image"
    />
  </div>`;
    code = code + singleCode;
  }
  sliderDiv.innerHTML = code;
};
try {
  loadImagesInDiv();
} catch (error) {
  console.log(error);
}
