import { authorizeTokenOfAdmin2 } from "../authorize-token/authorizeToken.js";
import { applyProjectCardScripts } from "./apply-card-script.js";
import { getProjectsData } from "./get-projects-data.js";
import loadProjectsCard from "./loadProjectsCard.js";
authorizeTokenOfAdmin2();
const manageProjectsFunction = async () => {
    const projectsData = await getProjectsData();
    loadProjectsCard(projectsData);
    applyProjectCardScripts();
};
manageProjectsFunction();
