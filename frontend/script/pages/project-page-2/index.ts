import { receivedProjectDataType } from "../../../data/used-types/receivedProjectDataType.js";
import applyFunctions from "./apply-functions-after-loading-list/applyFunctions.js";
import fetchProjectData from "./fetch-project-data/fetchProjectData.js";
import loadProjectsList from "./load-projects-list/loadProjectsList.js";

const index = async () => {
  const projectData = (await fetchProjectData()) as receivedProjectDataType[];
  loadProjectsList(projectData);
  applyFunctions();
};
index();
