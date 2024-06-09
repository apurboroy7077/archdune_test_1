import { ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_ID_API, KEYNAME_OF_OPENED_PROJECT_ID_OF_CLIENT_IN_LOCALSTORAGE, } from "../../../../data/variables/Environment.js";
import { SERVER_URL, } from "../../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../utils/custom-functions/ar7Fetch.js";
const loadProjectData = () => {
    return new Promise((resolve, reject) => {
        try {
            const projectId = localStorage.getItem(KEYNAME_OF_OPENED_PROJECT_ID_OF_CLIENT_IN_LOCALSTORAGE);
            const dataForServer = { projectId };
            ar7Fetch
                .post(`${SERVER_URL + ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_ID_API}`, dataForServer)
                .then(async (response) => {
                const data = await response.json();
                const projectData = data.data;
                resolve(projectData);
            })
                .catch((error) => {
                console.log(error);
                reject(error);
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default loadProjectData;
