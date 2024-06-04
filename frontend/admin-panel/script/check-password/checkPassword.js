import { KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE } from "../../../data/variables/Environment.js";
import { ARCHDUNE_GIVE_ADMIN_TOKEN_API, SERVER_URL, } from "../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
const checkPasswordOfAdminPanelIndexPage = () => {
    const indexForm = document.getElementsByClassName("admin-index-form-selector")[0];
    const errorMessageDiv = document.getElementsByClassName("error-message-div-selector")[0];
    indexForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const myFormData = new FormData(indexForm);
        const adminPassword = myFormData.get("admin-password");
        const dataForServer = { adminPassword };
        await ar7Fetch
            .post(`${SERVER_URL + ARCHDUNE_GIVE_ADMIN_TOKEN_API}`, dataForServer)
            .then(async (response) => {
            const receivedData = await response.json();
            const { adminToken } = receivedData;
            localStorage.setItem(KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE, adminToken);
            window.location.href = "./manage.html";
        })
            .catch(async (error) => {
            const errorData = await error.json();
            const errorMessage = errorData.message;
            errorMessageDiv.classList.remove("hidden");
            errorMessageDiv.innerText = errorMessage;
        });
    });
};
export { checkPasswordOfAdminPanelIndexPage };
