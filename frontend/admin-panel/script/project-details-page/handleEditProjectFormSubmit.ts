import { receivedProjectDataType } from "../../../data/used-types/receivedProjectDataType.js";
import { KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL } from "../../../data/variables/Environment.js";
import getDataFromForm from "./getDataFromForm.js";
import handleSaveChanges from "./handleSaveChanges.js";

const handleEditProjectFormSubmit = (projectData: receivedProjectDataType) => {
  const myForm = document.getElementsByClassName(
    "edit-project-form-selector"
  )[0] as HTMLFormElement;
  myForm.addEventListener("submit", (e) => {
    const formData = getDataFromForm(e, projectData);
    handleSaveChanges(formData);
  });
};

export default handleEditProjectFormSubmit;
