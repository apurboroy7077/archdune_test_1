import { KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE } from "../../../data/variables/Environment.js";
import { ARCHDUNE_AUTHORIZE_ADMIN_TOKEN_API, SERVER_URL, } from "../../../data/variables/apiAdresses.js";
import ar7Fetch from "../../../script/utils/custom-functions/ar7Fetch.js";
const authorizeTokenOfAdmin = () => {
    const adminToken = localStorage.getItem(KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE);
    const dataForServer = { adminToken };
    if (adminToken) {
        ar7Fetch
            .post(`${SERVER_URL + ARCHDUNE_AUTHORIZE_ADMIN_TOKEN_API}`, dataForServer)
            .then((response) => {
            console.log(response);
            window.location.href = "./manage.html";
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
const authorizeTokenOfAdmin2 = () => {
    const adminToken = localStorage.getItem(KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE);
    const dataForServer = { adminToken };
    ar7Fetch
        .post(`${SERVER_URL + ARCHDUNE_AUTHORIZE_ADMIN_TOKEN_API}`, dataForServer)
        .then((response) => {
        // console.log(response);
    })
        .catch((error) => {
        console.log(error);
        window.location.href = "./index.html";
    });
};
export { authorizeTokenOfAdmin, authorizeTokenOfAdmin2 };
