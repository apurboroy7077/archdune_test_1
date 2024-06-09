import { KEYNAME_OF_OPENED_PROJECT_ID_OF_CLIENT_IN_LOCALSTORAGE } from "../../../../../data/variables/Environment.js";
const readMoreLinkFunction = () => {
    const linkElements = document.getElementsByClassName("read-more-link-selector");
    for (let i = 0; i < linkElements.length; i++) {
        const link = linkElements[i];
        const id_ = link.getAttribute("data-project-id");
        link.addEventListener("click", () => {
            localStorage.setItem(KEYNAME_OF_OPENED_PROJECT_ID_OF_CLIENT_IN_LOCALSTORAGE, id_);
            window.location.href = "./project-details.html";
        });
    }
};
export default readMoreLinkFunction;
