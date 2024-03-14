let DataOfLinkLists = [
  { href: "#", name: "Administrative" },
  { href: "#", name: "Articles" },
  { href: "#", name: "Cultural" },
  { href: "#", name: "Commercial" },
  { href: "#", name: "Conservation" },
  { href: "#", name: "Commercial & Offices" },
  { href: "#", name: "Educational" },
  { href: "#", name: "Environment" },
  { href: "#", name: "Exhibition" },
  { href: "#", name: "Green building" },
  { href: "#", name: "Health Care" },
  { href: "#", name: "Highrise" },
  { href: "#", name: "Hotel" },
  { href: "#", name: "Housing" },
  { href: "#", name: "Industrial" },
  { href: "#", name: "Interior Design" },
  { href: "#", name: "Institutional" },
  { href: "#", name: "Landescape & Urbanism" },
  { href: "#", name: "Leisure" },
  { href: "#", name: "Mixeduse" },
  { href: "#", name: "Monument" },
  { href: "#", name: "Museum" },
  { href: "#", name: "Residential" },
  { href: "#", name: "Religious" },
  { href: "#", name: "Resort" },
  { href: "#", name: "Restaurant" },
  { href: "#", name: "Retail" },
  { href: "#", name: "Roof garden" },
  { href: "#", name: "Rural" },
  { href: "#", name: "Settlement" },
  { href: "#", name: "Sports" },
  { href: "#", name: "Sustainability" },
];
let linkListDivElement =
  document.getElementsByClassName("project-menu-list")[0];
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
    linkListDivElement.innerHTML = totalListCode;
  } else {
    let processedData = DataOfLinkLists;
    let totalListCode = ``;
    for (let i = 0; i < processedData.length; i++) {
      let data = processedData[i];
      let singleListCode = `<li><a href="${data.href}">${data.name}</a></li>`;
      totalListCode = totalListCode + singleListCode;
    }
    linkListDivElement.innerHTML = totalListCode;
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
  linkListDivElement.innerHTML = totalListCode;
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
