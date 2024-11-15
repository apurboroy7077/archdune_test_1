import {
  hrOfSpecialLinkOfLearnPageInBigScreenNavbar,
  specialLinkOfLearnPageInBigScreenNavbar,
  subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar,
  textOfSpecialLinkOfLearnPageInBigScreenNavbar,
} from "../../../dom-elements/domElements.js";

const specialLinkFunction = () => {
  const specialLink = specialLinkOfLearnPageInBigScreenNavbar();
  const textElement = textOfSpecialLinkOfLearnPageInBigScreenNavbar();
  const hrElement = hrOfSpecialLinkOfLearnPageInBigScreenNavbar();
  const subLinks = subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar();

  if (specialLink && textElement && hrElement && subLinks) {
    specialLink.addEventListener("mouseenter", () => {
      textElement.style.color = "#f86d1c";
      hrElement.style.width = "100%";
      hrElement.style.opacity = "1";
      subLinks.style.height = subLinks.scrollHeight + "px";
      subLinks.style.opacity = "1";
    });

    specialLink.addEventListener("mouseleave", () => {
      textElement.style.color = "";
      hrElement.style.width = "0%";
      hrElement.style.opacity = "0";
      subLinks.style.height = "0px";
      subLinks.style.opacity = "0";
    });
  }
};

export default specialLinkFunction;
//# sourceMappingURL=specialLinkFunction.js.map
