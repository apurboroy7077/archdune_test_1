import getDataFromForm from "./getDataFromForm.js";
import handleSaveChanges from "./handleSaveChanges.js";
const handleEditProjectFormSubmit = () => {
    const myForm = document.getElementsByClassName("edit-project-form-selector")[0];
    myForm.addEventListener("submit", (e) => {
        const formData = getDataFromForm(e);
        handleSaveChanges(formData);
    });
};
export default handleEditProjectFormSubmit;
