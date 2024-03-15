let linkListDivElement =
  document.getElementsByClassName("project-menu-list")[0];
let listElements = linkListDivElement.children;
let showMoreButton = document.getElementsByClassName(
  "show_more_button_project_page"
)[0];
let showLessButton = document.getElementsByClassName(
  "show_less_button_project_page"
)[0];
let showLimitedLists = () => {
  for (let i = 0; i < listElements.length; i++) {
    let list = listElements[i];
    if (i > 10) {
      list.style.display = "none";
    }
  }
  showLessButton.style.display = "none";
  showMoreButton.style.display = "block";
};
let showAllTheList = () => {
  for (let i = 0; i < listElements.length; i++) {
    let list = listElements[i];
    list.style.display = "block";
  }
  showMoreButton.style.display = "none";
  showLessButton.style.display = "block";
};
// Adding Functionality to Buttons
showMoreButton.addEventListener("click", () => {
  showAllTheList();
});
showLessButton.addEventListener("click", () => {
  showLimitedLists();
});
// If someone resize the Screen
window.addEventListener("resize", () => {
  if (window.innerWidth > 682) {
    showAllTheList();
  }
  if (window.innerWidth < 683) {
    showLimitedLists();
  }
});
// First Time if Someone Loads with Mobile Screen
if (window.innerWidth < 683) {
  showLimitedLists();
} else {
  showAllTheList();
}
