let DataOfHighlightedLinkLists = [
  { href: "./studentWorksProject.html", name: "Student works" },
  { href: "#", name: "Illustration" },
  { href: "./photography.html", name: "Photography" },
];
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
};
showHighlightedList();
