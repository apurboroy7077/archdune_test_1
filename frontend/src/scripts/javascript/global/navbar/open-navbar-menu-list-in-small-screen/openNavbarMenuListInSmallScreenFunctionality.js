import { menuButtonOfNavbarInSmallScreen, menuCloseButtonOfNavbarInSmallScreen, menulistOfNavbarInSmallScreen, } from "../../../dom-elements/domElements.js";
const openNavbarMenuListInSmallScreenFunctionality = () => {
    menuButtonOfNavbarInSmallScreen.addEventListener("click", () => {
        menulistOfNavbarInSmallScreen.style.borderBottom = "1px solid";
        menulistOfNavbarInSmallScreen.style.height =
            menulistOfNavbarInSmallScreen.scrollHeight + "px";
        menuButtonOfNavbarInSmallScreen.style.display = "none";
        menuCloseButtonOfNavbarInSmallScreen.style.display = "inline-block";
    });
};
export default openNavbarMenuListInSmallScreenFunctionality;
//# sourceMappingURL=openNavbarMenuListInSmallScreenFunctionality.js.map