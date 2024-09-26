import { hrOfSpecialLinkOfLearnPageInBigScreenNavbar, specialLinkOfLearnPageInBigScreenNavbar, subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar, textOfSpecialLinkOfLearnPageInBigScreenNavbar, } from "../../../dom-elements/domElements.js";
const specialLinkFunction = () => {
    specialLinkOfLearnPageInBigScreenNavbar.addEventListener("mouseenter", () => {
        textOfSpecialLinkOfLearnPageInBigScreenNavbar.style.color = "#f86d1c";
        hrOfSpecialLinkOfLearnPageInBigScreenNavbar.style.width = "100%";
        hrOfSpecialLinkOfLearnPageInBigScreenNavbar.style.opacity = "1";
        subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar.style.height =
            subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar.scrollHeight + "px";
        subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar.style.opacity = "1";
    });
    specialLinkOfLearnPageInBigScreenNavbar.addEventListener("mouseleave", () => {
        textOfSpecialLinkOfLearnPageInBigScreenNavbar.style.color = "";
        hrOfSpecialLinkOfLearnPageInBigScreenNavbar.style.width = "0%";
        hrOfSpecialLinkOfLearnPageInBigScreenNavbar.style.opacity = "0";
        subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar.style.height = "0px";
        subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar.style.opacity = "0";
    });
};
export default specialLinkFunction;
//# sourceMappingURL=specialLinkFunction.js.map