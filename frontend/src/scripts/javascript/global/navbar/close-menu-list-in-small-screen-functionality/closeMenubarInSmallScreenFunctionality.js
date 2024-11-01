import {
  menuButtonOfNavbarInSmallScreen,
  menuCloseButtonOfNavbarInSmallScreen,
  menulistOfNavbarInSmallScreen,
} from "../../../dom-elements/domElements.js";

const closeMenubarInSmallScreenFunctionality = () => {
  const menuButton = menuButtonOfNavbarInSmallScreen();
  const menuCloseButton = menuCloseButtonOfNavbarInSmallScreen();
  const menuList = menulistOfNavbarInSmallScreen();

  if (menuButton && menuCloseButton && menuList) {
    menuCloseButton.addEventListener("click", () => {
      menuList.style.height = "0px";
      menuList.style.borderBottom = "transparent";
      menuCloseButton.style.display = "none";
      menuButton.style.display = "inline-block";
    });
  }
};

export default closeMenubarInSmallScreenFunctionality;
//# sourceMappingURL=closeMenubarInSmallScreenFunctionality.js.map
