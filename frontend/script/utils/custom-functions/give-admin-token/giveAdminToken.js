import { KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE } from "../../../../data/variables/Environment.js";
const giveAdminToken = () => {
    const adminToken = localStorage.getItem(KEYNAME_OF_ADMIN_TOKEN_IN_LOCALSTORAGE);
    return adminToken;
};
export default giveAdminToken;
