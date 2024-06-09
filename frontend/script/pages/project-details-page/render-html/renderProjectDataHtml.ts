import { receivedProjectDataType } from "../../../../data/used-types/receivedProjectDataType";
import renderProjectDetails2 from "./2-render-project-details/renderProjectDetails2.js";
import renderExtraFields from "./render-extra-fields/renderExtraFields.js";
import renderProjectDetails from "./render-project-details/renderProjectDetails.js";
import renderProjectName from "./render-project-name/renderProjectName.js";
import renderVideoSection from "./render-video-section/renderVideoSection.js";

const renderProjectDataHtml = (projectData: receivedProjectDataType) => {
  renderProjectName(projectData);
  renderProjectDetails(projectData);
  renderProjectDetails2(projectData);
  renderExtraFields(projectData);
  renderVideoSection(projectData);
};

export default renderProjectDataHtml;
