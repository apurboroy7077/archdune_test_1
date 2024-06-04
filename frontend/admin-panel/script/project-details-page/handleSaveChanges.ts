import {
  KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE,
  KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL,
} from "../../../data/variables/Environment.js";
import {
  ARCHDUNE_UPDATE_PROJECT_DATA_API,
  SERVER_URL,
} from "../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
import wait from "../../../script/utils/custom-functions/wait.js";
import showSavingButton, {
  showSavingFailedButton,
  showSavingSuccessfulButton,
} from "./showSavingButton.js";

const handleSaveChanges = (projectData: any) => {
  const proJectId = localStorage.getItem(
    KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL
  );
  const adminToken = localStorage.getItem(
    KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE
  );
  const dataForServer = {
    adminToken,
    projectData: {
      _id: proJectId,
      data: projectData,
    },
  };
  showSavingButton();
  ar7Fetch
    .post(`${SERVER_URL + ARCHDUNE_UPDATE_PROJECT_DATA_API}`, dataForServer)
    .then(async (response) => {
      await wait(2000);
      showSavingSuccessfulButton();
      console.log(response);
    })
    .catch((error) => {
      showSavingFailedButton();
      console.log(error);
    });
};

export default handleSaveChanges;
