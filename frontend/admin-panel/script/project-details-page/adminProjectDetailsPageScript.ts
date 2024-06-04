import {
  ARCHDUNE_UPDATE_PROJECT_DATA_API,
  SERVER_URL,
} from "../../../data/variables/apiAdresses.js";
import { demoProjectData } from "../../../data/variables/demoProjectData.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
import getDataFromForm from "./getDataFromForm.js";
import { getProjectDetails } from "./getProjectData.js";
import handleEditProjectFormSubmit from "./handleEditProjectFormSubmit.js";
import loadFormOfProjectDetails from "./loadFormOfProjectDetails.js";

const adminProjectDetailsScript = async () => {
  const projectData = await getProjectDetails();
  loadFormOfProjectDetails(projectData);
  handleEditProjectFormSubmit();
};
adminProjectDetailsScript();
