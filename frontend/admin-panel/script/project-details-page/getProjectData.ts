import { receivedProjectDataType } from "../../../data/used-types/receivedProjectDataType.js";
import {
  KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL,
  KEYNAME_OF_OPENED_PROJECT_IN_ADMIN_PANEL,
} from "../../../data/variables/Environment.js";
import {
  ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_NAME_API,
  SERVER_URL,
} from "../../../data/variables/apiAdresses.js";
import { demoProjectDataType } from "../../../data/variables/demoProjectData.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
import {
  showProjectLoading,
  showProjectLoadingFailed,
} from "./show-loading-status/showDataLoading.js";
type getProjectDetailsType = () => Promise<receivedProjectDataType>;
const getProjectDetails: getProjectDetailsType = async () => {
  return new Promise((resolve, reject) => {
    const projectId = localStorage.getItem(
      KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL
    );
    const dataForServer = { projectId };
    showProjectLoading();
    ar7Fetch
      .post(
        `${SERVER_URL + ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_NAME_API}`,
        dataForServer
      )
      .then(async (response) => {
        const projectDetails = await response.json();
        resolve(projectDetails.data);
      })
      .catch((error) => {
        showProjectLoadingFailed();
        console.log(error);
        reject(error);
      });
  });
};
export { getProjectDetails };
