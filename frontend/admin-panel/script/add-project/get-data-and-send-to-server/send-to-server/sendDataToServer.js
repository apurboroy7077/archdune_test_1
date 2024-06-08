import { ARCHDUNE_UPLOAD_NEW_PROJECT_DATA_API, SERVER_URL, } from "../../../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../../../script/utils/custom-functions/ar7Fetch.js";
import { logFormData } from "../../../../../script/utils/custom-functions/form/seeFormDataValue.js";
import giveAdminToken from "../../../../../script/utils/custom-functions/give-admin-token/giveAdminToken.js";
import addAdditionalFieldsToFormData from "./add-additional-fields-to-formdata/addAdditionalFieldsToFormData.js";
import { showAddingButton, showFailedButton, showSuccessButton, } from "./show-buttons/showButtons.js";
const sendDataToServer = (data) => {
    const { additionalFields, basement, buildArea, category, height, landArea, projectCreationYear, projectDescription, projectImage, projectImageCaption, projectName, studentName, studioName, studioTeachers, typology, universityName, videoSrc, visibilityStatus, } = data;
    const myFormData = new FormData();
    myFormData.append("basement", basement);
    myFormData.append("buildArea", buildArea);
    myFormData.append("category", category);
    myFormData.append("height", height);
    myFormData.append("landArea", landArea);
    myFormData.append("projectCreationYear", projectCreationYear);
    myFormData.append("projectDescription", projectDescription);
    myFormData.append("projectImage", projectImage);
    myFormData.append("projectImageCaption", projectImageCaption);
    myFormData.append("projectName", projectName);
    myFormData.append("studentName", studentName);
    myFormData.append("studioName", studioName);
    myFormData.append("studioTeachers", studioTeachers);
    myFormData.append("typology", typology);
    myFormData.append("universityName", universityName);
    myFormData.append("videoSrc", videoSrc);
    myFormData.append("visibilityStatus", visibilityStatus);
    myFormData.append("adminToken", giveAdminToken());
    const formDataAfterAddingAdditionalFields = addAdditionalFieldsToFormData(myFormData, data);
    showAddingButton();
    logFormData(formDataAfterAddingAdditionalFields);
    ar7Fetch
        .postForm(`${SERVER_URL + ARCHDUNE_UPLOAD_NEW_PROJECT_DATA_API}`, formDataAfterAddingAdditionalFields)
        .then((response) => {
        showSuccessButton();
        console.log(response);
    })
        .catch((error) => {
        showFailedButton();
        console.log(error);
    });
};
export default sendDataToServer;
