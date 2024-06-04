import {
  ARCHDUNE_GIVE_PROJECTS_DATA_API,
  SERVER_URL,
} from "../../../data/variables/apiAdresses.js";
import { demoProjectDataType } from "../../../data/variables/demoProjectData.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
type getProjectsDataType = () => Promise<demoProjectDataType>;
const getProjectsData: getProjectsDataType = () => {
  return new Promise(async (resolve, reject) => {
    ar7Fetch
      .post(`${SERVER_URL + ARCHDUNE_GIVE_PROJECTS_DATA_API}`, {})
      .then(async (response) => {
        const data = await response.json();
        resolve(data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export { getProjectsData };
