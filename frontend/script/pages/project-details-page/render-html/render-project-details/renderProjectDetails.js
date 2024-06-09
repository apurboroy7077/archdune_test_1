const renderProjectDetails = (projectData) => {
    const projectDescriptionDiv = document.getElementsByClassName("project-description-div-selector")[0];
    const htmlCode = `
                  <div class="c-l-p-podt-meta">
                    <div class="post-meta-link">
                      |
                      <a href="#">Architecture</a> |
                      <a href="#">Educational</a> | <a href="#">Project</a> |
                      <a href="#">${projectData.category}</a> |
                    </div>
                    <div class="post-meta-time">
                      <small> | ${projectData.uploadDate} | </small>
                      <small> | Total Views: ${projectData.totalViews} | </small>
                    </div>
                  </div>
  `;
    projectDescriptionDiv.innerHTML = htmlCode;
};
export default renderProjectDetails;
