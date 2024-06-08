import getDataFromForm from "./get-form-data/getDataFromForm.js";
import sendDataToServer from "./send-to-server/sendDataToServer.js";
const getDataAndSendToServer = () => {
    const myForm = document.getElementsByClassName("add-new-project-form-selector")[0];
    myForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = await getDataFromForm(e);
        sendDataToServer(data);
    });
};
export default getDataAndSendToServer;
