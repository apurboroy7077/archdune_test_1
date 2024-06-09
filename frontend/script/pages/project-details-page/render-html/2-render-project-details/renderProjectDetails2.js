import readMoreButtonScript from "./read-more-button-script/readMoreButtonScript.js";
const renderProjectDetails2 = (projectData) => {
    const projectDescriptionDiv2 = document.getElementsByClassName("project-description-2-div-selector")[0];
    const htmlCode = `
  <div class="c-s-p-i-p-text">
                    <div class="podt-meta-images-section">
                      <div class="c-s-p-i-image-gallery">
                        <div class="s-i-gallery">
                          <a
                            href="${projectData.projectImageLink}"
                            data-lightbox="models"
                            data-title="This project belongs to Tanbir Hasan"
                          >
                            <img
                              src="${projectData.projectImageLink}"
                              alt="${projectData.projectName}"
                            />
                          </a>
                          <div class="s-i-g-b-text">
                            <p>${projectData.projectImageCaption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="podt-meta-dec-text">
                      <table>
                        <tbody>
                          <tr>
                            <td class="p-m-d-t-frist-text" style="width: 13%">
                              Student Name:
                            </td>
                            <td class="p-m-d-t-seccend-text">
                              <b> ${projectData.projectName} </b>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-m-d-t-frist-text">Year:</td>
                            <td class="p-m-d-t-seccend-text"><b> ${projectData.projectCreationYear} </b></td>
                          </tr>
                          <tr>
                            <td class="p-m-d-t-frist-text">Studio:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b> ${projectData.studioName} </b>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-m-d-t-frist-text">Institute:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b
                                >${projectData.universityName}</b
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="p-m-d-t-frist-text">Studio Teachers:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.studioTeachers}</b>
                            </td>
                          </tr>

                          <!-- MORE INFORMATION -->
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Typology:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.typology}</b>
                            </td>
                          </tr> 
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Height:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.height}</b>
                            </td>
                          </tr>
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Land Area:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.landArea}</b>
                            </td>
                          </tr>
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Build Area:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.buildArea}</b>
                            </td>
                          </tr>
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Basement:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.basement}</b>
                            </td>
                          </tr>
                          <tr class="mor-info">
                            <td class="p-m-d-t-frist-text">Location:</td>
                            <td class="p-m-d-t-seccend-text">
                              <b>${projectData.location}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button class="raad_mor_option">Read More</button>
                      <p>
                        ${projectData.projectDescription}
                      </p>
                    </div>
                  </div>
  `;
    projectDescriptionDiv2.innerHTML = htmlCode;
    readMoreButtonScript();
};
export default renderProjectDetails2;
