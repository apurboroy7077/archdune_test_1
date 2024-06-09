import { getProjectDetails } from "./getProjectData.js";
import handleEditProjectFormSubmit from "./handleEditProjectFormSubmit.js";
import loadFormOfProjectDetails from "./loadFormOfProjectDetails.js";
const adminProjectDetailsScript = async () => {
    const projectData = await getProjectDetails();
    loadFormOfProjectDetails(projectData);
    handleEditProjectFormSubmit(projectData);
};
adminProjectDetailsScript();
