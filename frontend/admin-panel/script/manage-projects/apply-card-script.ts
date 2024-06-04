import {
  KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL,
  KEYNAME_OF_OPENED_PROJECT_IN_ADMIN_PANEL,
} from "../../../data/variables/Environment.js";

const applyProjectCardScripts = () => {
  const projectCards = document.getElementsByClassName("project-card-selector");
  for (let i = 0; i < projectCards.length; i++) {
    const card = projectCards[i] as HTMLDivElement;
    const projectId = card.getAttribute("data-project-id") as string;

    card.addEventListener("click", () => {
      localStorage.setItem(
        KEYNAME_OF_OPENED_PROJECT_ID_IN_ADMIN_PANEL,
        projectId
      );
      window.location.href = "/frontend/admin-panel/html/projectDetails.html";
    });
  }
};
export { applyProjectCardScripts };
