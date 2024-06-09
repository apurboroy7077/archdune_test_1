const renderExtraFields = (projectData) => {
    const extraFieldsDiv = document.getElementsByClassName("extra-fields-div-selector")[0];
    let totalHtmlCode = ``;
    for (let i = 0; i < projectData.additionalFields.length; i++) {
        const fieldData = projectData.additionalFields[i];
        const singleHtmlCode = `
    <div class="c-s-p-i-image-gallery">
                    <div class="s-i-gallery">
                      <div>
                        <p>
                          <b>${fieldData.fieldName}:</b>
                        </p>
                        <p>
                          ${fieldData.fieldDescription}
                        </p>
                      </div>

                      ${fieldData.fieldImages
            .map((data) => {
            return ` <div>
                        <a
                          href="${data.imageSrc}"
                          data-lightbox="models"
                          data-title="${data.caption}"
                        >
                          <img
                            src="${data.imageSrc}"
                            alt
                          />
                        </a>
                        <div class="s-i-g-b-text">
                          <p>${data.caption}</p>
                        </div>
                      </div>`;
        })
            .join()}


                     



                    </div>
                  </div>

`;
        totalHtmlCode = totalHtmlCode + singleHtmlCode;
    }
    extraFieldsDiv.innerHTML = totalHtmlCode;
};
export default renderExtraFields;
