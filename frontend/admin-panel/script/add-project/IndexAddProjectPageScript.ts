import addExtraFieldsFunction from "./add-extra-fields/addExtraFields.js";
import getDataAndSendToServer from "./get-data-and-send-to-server/getDataAndSendToServer.js";

const mainFunction = async () => {
  addExtraFieldsFunction();
  getDataAndSendToServer();
};
mainFunction();
