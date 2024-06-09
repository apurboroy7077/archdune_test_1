import { projectTestData2 } from "../../../data/test-data/test-data.js";
import loadProjectData from "./load-project-data/loadProjectData.js";
import renderProjectDataHtml from "./render-html/renderProjectDataHtml.js";

const index = async () => {
  const projectData = await loadProjectData();
  // const projectData = projectTestData2;

  renderProjectDataHtml(projectData);
};
index();
