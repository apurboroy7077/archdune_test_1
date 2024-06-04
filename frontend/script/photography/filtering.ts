import { imageDatas } from "./DataOfPhotography.js";
import { runLightGallery } from "./../lightgallery/lightGalleryFinal.js";
import { showCloseIconFunction } from "../lightgallery/showCloseIcon.js";
import { showCloseIconFunction2 } from "../lightgallery/showCloseIcon2.js";
const filteringButtons = document.getElementsByClassName(
  "photography-filtering-button"
);
const imagesList = document.getElementsByClassName(
  "images-list-of-photography"
)[0];
const searchInput = document.getElementsByClassName(
  "search-input-photography-js-selector"
)[0] as HTMLInputElement;
const filteringButtonDiv = document.getElementsByClassName(
  "photography-filtering-button-div-js-selector"
)[0];
const galleryDiv = document.getElementsByClassName(
  "gallery-div-js-selector"
)[0];
const loadingDiv = document.getElementsByClassName(
  "loading-div-js-selector"
)[0];
let serial = 1;
type authorDetailsType = { authorName: string; imageOfAuthorSrc: string };
type giveArrayOfMatchedDataType = (typenWords: string) => typeof imageDatas;
type giveAuthorDetailsOfDataType = (
  datas: typeof imageDatas
) => { authorName: string; imageOfAuthorSrc: string }[];
type makeFilteringButtonsType = (authorDetails: authorDetailsType[]) => void;
type loadMatchingImagesType = (datas: typeof imageDatas) => void;
const giveAuthorDetailsOfData: giveAuthorDetailsOfDataType = (datas) => {
  const authorDetails = [] as {
    authorName: string;
    imageOfAuthorSrc: string;
  }[];
  for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    const authorData = {
      authorName: data.authorName,
      imageOfAuthorSrc: data.imageOfAuthorSrc,
    };
    let doesAlreadyExists = false;
    for (let i = 0; i < authorDetails.length; i++) {
      const authorData_ = authorDetails[i];
      if (authorData_.imageOfAuthorSrc === authorData.imageOfAuthorSrc) {
        doesAlreadyExists = true;
      }
    }
    if (doesAlreadyExists === false) {
      authorDetails.push(authorData);
    }
  }
  return authorDetails;
};
const giveArrayOfMatchedData: giveArrayOfMatchedDataType = (typenWords) => {
  const matchedDatas = [] as typeof imageDatas;
  for (let i = 0; i < imageDatas.length; i++) {
    const data = imageDatas[i];
    if (
      data.authorName.toLowerCase().includes(typenWords) ||
      data.imageName.toLowerCase().includes(typenWords) ||
      data.imageOfAuthorSrc.toLowerCase().includes(typenWords) ||
      data.imageSrc.toLowerCase().includes(typenWords)
    ) {
      matchedDatas.push(data);
    }
  }
  return matchedDatas;
};
const makeFilteringButtons: makeFilteringButtonsType = (authorDetails) => {
  let filteringButtonCode = ``;
  for (let i = 0; i < authorDetails.length; i++) {
    const data = authorDetails[i];
    const buttonCode = ` <button
    class="photography-filtering-button"
    data-name="${data.authorName}"
  >
    <img
      src="${data.imageOfAuthorSrc}"
      class="gallery-img-306"
    />
    <span>${data.authorName}</span>
  </button>`;
    filteringButtonCode = filteringButtonCode + buttonCode;
  }
  filteringButtonDiv.innerHTML = filteringButtonCode;
};
const loadMatchingImages: loadMatchingImagesType = (datas) => {
  let imageCodes = ``;
  for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    const imageCode = `<a
    class="card"
    data-lg-size="1600-1067"
    src="${data.imageSrc}"
    data-lg-tumbnail="${data.imageSrc}"
    data-sub-html="<p>The Image is So Beyoutiful 1</p>"
  >
    <img
      alt="layers of blue."
      src="${data.imageSrc}"
    />
    <span class="cardHover">
      <span class="cardHoverButtomUser">
        <img
          src="${data.imageOfAuthorSrc}"
          alt=""
        />
        <span class="cardHoverName">${data.authorName}</span>
      </span>
      <span class="cardHoverButtomLick">
        <button><i class="fa-regular fa-heart"></i></button>
      </span>
    </span>
  </a>`;
    imageCodes = imageCodes + imageCode;
  }
  imagesList.innerHTML = imageCodes;
};
const hideFilteringButtonsAndGallery = () => {
  filteringButtonDiv.classList.add("hidden");
  galleryDiv.classList.add("hidden");
};
const showFilteringButtonsAndGallery = () => {
  filteringButtonDiv.classList.remove("hidden");
  galleryDiv.classList.remove("hidden");
};
const hideLoadingDiv = () => {
  loadingDiv.classList.add("hidden");
  loadingDiv.classList.remove("flex");
};
const showLoadingDiv = () => {
  loadingDiv.classList.remove("hidden");
  loadingDiv.classList.add("flex");
};
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
      serial++;
      loadFilteredData(authorName);
      runLightGallery();
      showCloseIconFunction2(serial);
    });
  }
};

const searchFunctions = () => {
  const searchingFunction1 = async (typenWords: string) => {
    hideFilteringButtonsAndGallery();
    showLoadingDiv();
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, 2000);
    });
    searchingFunction2FindAndShowResults(typenWords);
    showFilteringButtonsAndGallery();
    hideLoadingDiv();
  };
  const searchingFunction2FindAndShowResults = (typenWords: string) => {
    const matchedDatas = [];
    for (let i = 0; i < imageDatas.length; i++) {
      const data = imageDatas[i];
      if (
        data.authorName.includes(typenWords) ||
        data.imageName.includes(typenWords)
      ) {
        matchedDatas.push(data);
        searchingFunction3LoadResults(matchedDatas);
      }
    }
  };
  const searchingFunction3LoadResults = (matchedDatas: typeof imageDatas) => {
    const filteringButtonCodes = ``;
    for (let i = 0; i < matchedDatas.length; i++) {
      const data = matchedDatas[i];
      const authorName = data.authorName;
      console.log(authorName);
    }
  };
  searchInput.addEventListener("input", (e: any) => {
    const typenWords = e.currentTarget.value;
    searchingFunction1(typenWords);
  });
};

const searchFunction2 = () => {
  const searchFunction1 = (typenWords: string) => {
    const matchedDatas = giveArrayOfMatchedData(typenWords);
    const authorDetails = giveAuthorDetailsOfData(matchedDatas);

    makeFilteringButtons(authorDetails);
    filteringFunction();
    loadMatchingImages(matchedDatas);
    runLightGallery();
    showCloseIconFunction2(serial);
  };

  searchInput.addEventListener("input", (e: any) => {
    const typenWords = e.currentTarget.value.toLowerCase();
    searchFunction1(typenWords);
  });
};

filteringFunction();
searchFunction2();
const filteringBridge = "Archdune";
export { filteringBridge };
