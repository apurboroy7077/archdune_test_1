import DataOfLinkLists from "../../data/projectLinkListData.js";

let linkListDiv = document.getElementsByClassName("project-menu-list")[0];
let showMoreButton = document.getElementsByClassName(
  "show_more_button_project_page"
)[0];
let showLessButton = document.getElementsByClassName(
  "show_less_button_project_page"
)[0];
let showLimitedLists = () => {
  if (DataOfLinkLists.length > 10) {
    let processedData = DataOfLinkLists.slice(0, 10);
    let totalListCode = ``;
    for (let i = 0; i < processedData.length; i++) {
      let data = processedData[i];
      let singleListCode = `<li><a href="${data.href}">${data.name}</a></li>`;
      totalListCode = totalListCode + singleListCode;
    }
    linkListDiv.innerHTML = totalListCode;
  } else {
    console.log("hi");
    let processedData = DataOfLinkLists;
    let totalListCode = ``;
    for (let i = 0; i < processedData.length; i++) {
      let data = processedData[i];
      let singleListCode = `<li><a href="${data.href}">${data.name}</a></li>`;
      totalListCode = totalListCode + singleListCode;
    }
    linkListDiv.innerHTML = totalListCode;
  }
  showLessButton.style.display = "none";
  showMoreButton.style.display = "block";
};
let showAllTheList = () => {
  let processedData = DataOfLinkLists;
  let totalListCode = ``;
  for (let i = 0; i < processedData.length; i++) {
    let data = processedData[i];
    let singleListCode = `<li><a href="${data.href}">${data.name}</a></li>`;
    totalListCode = totalListCode + singleListCode;
  }
  linkListDiv.innerHTML = totalListCode;
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
