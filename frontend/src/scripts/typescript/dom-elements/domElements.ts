export const getElement = (className: string) => {
  const element = document.getElementsByClassName(className)[0];
  return element;
};

export const menuButtonOfNavbarInSmallScreen = getElement(
  "menu-button-of-navbar-in-small-screen"
) as HTMLButtonElement;
export const menuCloseButtonOfNavbarInSmallScreen = getElement(
  "menu-close-button-of-navbar-in-small-screen"
) as HTMLButtonElement;
export const menulistOfNavbarInSmallScreen = getElement(
  "menulist-of-navbar-in-smallscreen"
) as HTMLDivElement;

export const homePageLinkOfBigScreenNavbar = getElement(
  "home-page-link-of-big-screen-navbar"
) as HTMLAnchorElement;
export const homePageLinkTextOfBigScreenNavbar = getElement(
  "home-page-link-text-of-big-screen-navbar"
) as HTMLDivElement;
export const homePageLinkHrOfBigScreenNavbar = getElement(
  "home-page-link-hr-of-big-screen-navbar"
) as HTMLHRElement;

export const projectsPageLinkOfBigScreenNavbar = getElement(
  "projects-page-link-of-big-screen-navbar"
) as HTMLAnchorElement;
export const projectsPageLinkTextOfBigScreenNavbar = getElement(
  "projects-page-link-text-of-big-screen-navbar"
) as HTMLDivElement;
export const projectsPageLinkHrOfBigScreenNavbar = getElement(
  "projects-page-link-hr-of-big-screen-navbar"
) as HTMLHRElement;

export const competitionPageLinkOfBigScreenNavbar = getElement(
  "competition-page-link-of-big-screen-navbar"
) as HTMLAnchorElement;
export const competitionPageLinkTextOfBigScreenNavbar = getElement(
  "competition-page-link-text-of-big-screen-navbar"
) as HTMLDivElement;
export const competitionLinkHrOfBigScreenNavbar = getElement(
  "competition-page-link-hr-of-big-screen-navbar"
) as HTMLHRElement;

export const fellowshipPageLinkOfBigScreenNavbar = getElement(
  "fellowship-page-link-of-big-screen-navbar"
) as HTMLAnchorElement;
export const fellowshipPageLinkTextOfBigScreenNavbar = getElement(
  "fellowship-page-link-text-of-big-screen-navbar"
) as HTMLDivElement;
export const fellowshipLinkHrOfBigScreenNavbar = getElement(
  "fellowship-page-link-hr-of-big-screen-navbar"
) as HTMLHRElement;

export const specialLinkOfLearnPageInBigScreenNavbar = getElement(
  "special-link-of-learn-page-in-big-screen-navbar"
) as HTMLDivElement;
export const subLinksOfSpecialLinkOfLearnPageInBigScreenNavbar = getElement(
  "sub-links-of-special-link-of-learn-page-in-big-screen-navbar"
) as HTMLDivElement;

export const textOfSpecialLinkOfLearnPageInBigScreenNavbar = getElement(
  "text-of-special-link-of-learn-page-in-big-screen-navbar"
) as HTMLDivElement;
export const hrOfSpecialLinkOfLearnPageInBigScreenNavbar = getElement(
  "hr-of-special-link-of-learn-page-in-big-screen-navbar"
) as HTMLHRElement;
