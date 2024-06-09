import {
  ARCHDUNE_GIVE_PROJECT_DATA_FOR_CLIENT_API,
  SERVER_URL,
} from "../../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../utils/custom-functions/ar7Fetch.js";

const fetchProjectData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      ar7Fetch
        .post(`${SERVER_URL + ARCHDUNE_GIVE_PROJECT_DATA_FOR_CLIENT_API}`, {})
        .then(async (response) => {
          const data = await response.json();
          const projectsData = data.data;
          resolve(projectsData);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default fetchProjectData;
