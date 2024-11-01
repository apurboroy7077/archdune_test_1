import {
  menuButtonOfNavbarInSmallScreen,
  menuCloseButtonOfNavbarInSmallScreen,
  menulistOfNavbarInSmallScreen,
} from "../../../dom-elements/domElements.js";

const openNavbarMenuListInSmallScreenFunctionality = () => {
  const menuButton = menuButtonOfNavbarInSmallScreen();
  const menuCloseButton = menuCloseButtonOfNavbarInSmallScreen();
  const menuList = menulistOfNavbarInSmallScreen();

  if (menuButton && menuCloseButton && menuList) {
    menuButton.addEventListener("click", () => {
      menuList.style.borderBottom = "1px solid";
      menuList.style.height = menuList.scrollHeight + "px";
      menuButton.style.display = "none";
      menuCloseButton.style.display = "inline-block";
    });
  }
};

export default openNavbarMenuListInSmallScreenFunctionality;
//# sourceMappingURL=openNavbarMenuListInSmallScreenFunctionality.js.map
