import { demoProjectDataType } from "../../../data/variables/demoProjectData.js";

type loadProjectsCardType = (projectsData: demoProjectDataType) => void;
const loadProjectsCard: loadProjectsCardType = (projectsData) => {
  const projectsCardDiv = document.getElementsByClassName(
    "project-card-div-selector"
  )[0] as HTMLDivElement;
  let htmlCode = ``;
  for (let i = 0; i < projectsData.length; i++) {
    const data: any = projectsData[i];
    console.log(data);
    const singleHtmlCode = `
    <div data-project-id="${data._id}" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer project-card-selector">
      <img
        class="w-full h-32 sm:h-48 object-cover"
        src="${data.projectImageLink}"
        alt="${data.projectName}"
      />
      <hr />
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">${data.projectName}</h3>
        <div class="h-[7rem] overflow-y-auto pr-3"><p class="text-gray-600">${data.projectDescription}</p></div>
      </div>
    </div>`;
    htmlCode = htmlCode + singleHtmlCode;
  }
  projectsCardDiv.innerHTML = htmlCode;
};

export default loadProjectsCard;
