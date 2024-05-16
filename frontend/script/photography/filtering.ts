import { imageDatas } from "./DataOfPhotography.js";
import { runLightGallery } from "./../lightgallery/lightGalleryFinal.js";
const filteringButtons = document.getElementsByClassName(
  "photography-filtering-button"
);
const imagesList = document.getElementsByClassName(
  "images-list-of-photography"
)[0];

const loadFilteredData = (authorName: string) => {
  // CHECK WHICH DATA MATCHES-----------------------------------------------------------------
  const matchedDatas = [];
  for (let i = 0; i < imageDatas.length; i++) {
    const imageData = imageDatas[i];
    if (authorName === imageData.authorName) {
      matchedDatas.push(imageData);
    }
  }
  //MAKE THE EMPTY THE IMAGE LIST-----------------------------------------------------------------------
  imagesList.innerHTML = "";
  //INSERT NEW IMAGES TO THE LIST-------------------------------------------------------------------------
  for (let i = 0; i < matchedDatas.length; i++) {
    const imageData = matchedDatas[i];
    const imageCardHtml = `<a
    class="card"
    data-lg-size="1600-1067"
    src="${imageData.imageSrc}"
    data-lg-tumbnail="${imageData.imageSrc}"
    data-sub-html="<p>The Image is So Beyoutiful 1</p>"
  >
    <img
      alt="layers of blue."
      src="${imageData.imageSrc}"
    />
    <span class="cardHover">
      <span class="cardHoverButtomUser">
        <img
          src="${imageData.imageOfAuthorSrc}"
          alt=""
        />
        <span class="cardHoverName">${imageData.authorName}</span>
      </span>
      <span class="cardHoverButtomLick">
        <button><i class="fa-regular fa-heart"></i></button>
      </span>
    </span>
  </a>`;
    imagesList.innerHTML = imagesList.innerHTML + imageCardHtml;
  }
  // UPDATE FILTERING BUTTONS COLOR---------------------------------------------------------------------------------
  for (let i = 0; i < filteringButtons.length; i++) {
    const button = filteringButtons[i];
    const nameOfButtonAuthor = button.getAttribute("data-name");
    if (nameOfButtonAuthor === authorName) {
      button.classList.add("active-btn");
    } else {
      button.classList.remove("active-btn");
    }
  }
};
const filteringFunction = () => {
  for (let i = 0; i < filteringButtons.length; i++) {
    const filteringButton = filteringButtons[i];
    const authorName = filteringButton.getAttribute("data-name") as string;
    filteringButton.addEventListener("click", () => {
      loadFilteredData(authorName);
      runLightGallery();
    });
  }
};
filteringFunction();
const filteringBridge = "Archdune";
export { filteringBridge };
