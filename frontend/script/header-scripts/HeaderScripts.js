import navbarScripts from "../../src/scripts/javascript/global/navbar/main/navbarScripts.js";
import Header1Scripts from "./Header1Scripts.js";
import { renderingHeader } from "./renderHeader.js";

const HeaderScripts = async () => {
  await renderingHeader();
  navbarScripts();
  Header1Scripts();
};
HeaderScripts();

export default HeaderScripts;
