import {
  menuButtonOfNavbarInSmallScreen,
  menuCloseButtonOfNavbarInSmallScreen,
  menulistOfNavbarInSmallScreen,
} from "../../../dom-elements/domElements.js";

const closeMenubarInSmallScreenFunctionality = () => {
  menuCloseButtonOfNavbarInSmallScreen.addEventListener("click", () => {
    menulistOfNavbarInSmallScreen.style.height = "0px";
    menulistOfNavbarInSmallScreen.style.borderBottom = "transparent";
    menuCloseButtonOfNavbarInSmallScreen.style.display = "none";
    menuButtonOfNavbarInSmallScreen.style.display = "inline-block";
  });
};

export default closeMenubarInSmallScreenFunctionality;
