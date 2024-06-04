import { KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL, } from "../../../data/variables/Environment.js";
import { ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_NAME_API, SERVER_URL, } from "../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
const getProjectDetails = async () => {
    return new Promise((resolve, reject) => {
        const projectId = localStorage.getItem(KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL);
        const dataForServer = { projectId };
        ar7Fetch
            .post(`${SERVER_URL + ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_NAME_API}`, dataForServer)
            .then(async (response) => {
            const projectDetails = await response.json();
            resolve(projectDetails.data);
        })
            .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
};
export { getProjectDetails };
