import getDataFromForm from "./getDataFromForm.js";
import handleSaveChanges from "./handleSaveChanges.js";
const handleEditProjectFormSubmit = (projectData) => {
    const myForm = document.getElementsByClassName("edit-project-form-selector")[0];
    myForm.addEventListener("submit", (e) => {
        const formData = getDataFromForm(e, projectData);
        handleSaveChanges(formData);
    });
};
export default handleEditProjectFormSubmit;
