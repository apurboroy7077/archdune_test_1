import { competitionLinkHrOfBigScreenNavbar, competitionPageLinkOfBigScreenNavbar, competitionPageLinkTextOfBigScreenNavbar, fellowshipLinkHrOfBigScreenNavbar, fellowshipPageLinkOfBigScreenNavbar, fellowshipPageLinkTextOfBigScreenNavbar, homePageLinkHrOfBigScreenNavbar, homePageLinkOfBigScreenNavbar, homePageLinkTextOfBigScreenNavbar, projectsPageLinkHrOfBigScreenNavbar, projectsPageLinkOfBigScreenNavbar, projectsPageLinkTextOfBigScreenNavbar, } from "../../../dom-elements/domElements.js";
const markIt = (textElement, hrElement) => {
    textElement.style.color = "#f86d1c";
    hrElement.style.width = "100%";
    hrElement.style.opacity = "1";
};
const unMarkIt = (textElement, hrElement) => {
    textElement.style.color = "black";
    hrElement.style.width = "0%";
    hrElement.style.opacity = "0";
};
const addFunctionality = (linkElement, textElement, hrElement) => {
    const linkName = textElement.innerText.toLowerCase();
    const currentPath = window.location.pathname;
    const isThisLinkOfCurrentPage = currentPath.includes(linkName);
    if (!isThisLinkOfCurrentPage) {
        linkElement.addEventListener("mouseenter", () => {
            markIt(textElement, hrElement);
        });
        linkElement.addEventListener("mouseleave", () => {
            unMarkIt(textElement, hrElement);
        });
    }
    else {
        markIt(textElement, hrElement);
    }
};
const linkFunctionOfBigScreenNavbar = () => {
    const links = [
        {
            linkElement: homePageLinkOfBigScreenNavbar,
            textElement: homePageLinkTextOfBigScreenNavbar,
            hrElement: homePageLinkHrOfBigScreenNavbar,
        },
        {
            linkElement: projectsPageLinkOfBigScreenNavbar,
            textElement: projectsPageLinkTextOfBigScreenNavbar,
            hrElement: projectsPageLinkHrOfBigScreenNavbar,
        },
        {
            linkElement: competitionPageLinkOfBigScreenNavbar,
            textElement: competitionPageLinkTextOfBigScreenNavbar,
            hrElement: competitionLinkHrOfBigScreenNavbar,
        },
        {
            linkElement: fellowshipPageLinkOfBigScreenNavbar,
            textElement: fellowshipPageLinkTextOfBigScreenNavbar,
            hrElement: fellowshipLinkHrOfBigScreenNavbar,
        },
    ];
    for (let i = 0; i < links.length; i++) {
        const { linkElement, textElement, hrElement } = links[i];
        addFunctionality(linkElement, textElement, hrElement);
    }
};
export default linkFunctionOfBigScreenNavbar;
//# sourceMappingURL=linkFunctionOfBigScreenNavbar.js.map