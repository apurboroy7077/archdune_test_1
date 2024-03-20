let imagesSrc = [
  "./images/book_section_2/chashi bari_01.jpg",
  "./images/book_section_2/chashi bari_02.jpg",
  "./images/book_section_2/chashi bari_03.jpg",
  "./images/book_section_2/chashi bari_04.jpg",
  "./images/book_section_2/chashi bari_05.jpg",
  "./images/book_section_2/chashi bari_06.jpg",
];
let sliderDiv = document.getElementsByClassName(
  "book-selling-section-swipper-wrapper"
)[0];
let loadImagesInDiv = () => {
  let code = ``;
  for (let i = 0; i < imagesSrc.length; i++) {
    let imageSrc = imagesSrc[i];
    let singleCode = ` <div class="swiper-slide ">
    <div style="width:100%; overflow:hidden; border-radius:5px; display:flex; align-items:center; justify-content:center;">
    <img
      src="${imageSrc}"
      class="hover-scale-1-1 transition-0-5s-ease w-full lg-width-70"
      style=""
    />
    </div>
    
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
