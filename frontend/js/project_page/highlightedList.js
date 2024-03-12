import DataOfHighlightedLinkLists from "../../data/highlightedLinkListData.js";

let linkListDiv = document.getElementsByClassName(
  "project-menu-list-highlighted"
)[0];

let showHighlightedList = () => {
  let processedData = DataOfHighlightedLinkLists;
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
showHighlightedList();
