import { KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL, } from "../../../data/variables/Environment.js";
const applyProjectCardScripts = () => {
    const projectCards = document.getElementsByClassName("project-card-selector");
    for (let i = 0; i < projectCards.length; i++) {
        const card = projectCards[i];
        const projectId = card.getAttribute("data-project-id");
        card.addEventListener("click", () => {
            localStorage.setItem(KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL, projectId);
            window.location.href = "/admin-panel/html/projectDetails.html";
        });
    }
};
export { applyProjectCardScripts };
