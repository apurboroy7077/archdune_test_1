import { Header2Render, pagesData } from "../../configs/settings.js";
import ar7Fetch from "../utils/custom-functions/ar7Fetch.js";
import GetHtmlContent from "./GetHtmlContent.js";

export const renderingHeader = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const headerElement =
        document.getElementsByClassName("dynamic-header-cgi")[0];
      const pageName = headerElement.getAttribute("data-page-name");
      let headerToRender = "";

      for (let i = 0; i < pagesData.length; i++) {
        const singlePageData = pagesData[i];
        const pageName2 = singlePageData.pageName;
        if (pageName === pageName2) {
          headerToRender = singlePageData.header;
        }
      }
      console.log(headerToRender);
      const htmlContent = await GetHtmlContent(
        `./../components/${headerToRender}.html`
      );
      headerElement.outerHTML = htmlContent;
      resolve("Header Loaded Successfully");
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
