const bannerImageElement =
  document.getElementsByClassName("book-banner-image")[0];
const imageSrcForSmallScreen = `./images/banners/book-banner-3.png`;
const imageSrcForLargeScreen = `./images/banners/book-banner.jpg`;
const setImage = () => {
  if (window.innerWidth < 768) {
    bannerImageElement.src = imageSrcForSmallScreen;
  } else {
    bannerImageElement.src = imageSrcForLargeScreen;
  }
};
setImage();
window.addEventListener("resize", () => {
  setImage();
});
