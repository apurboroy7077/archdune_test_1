const loadProjectsList = (projectsData) => {
    const projectListDiv = document.getElementsByClassName("project-list-div-selector")[0];
    let totalListCode = ` `;
    for (let i = 0; i < projectsData.length; i++) {
        const data = projectsData[i];
        const singleListCode = `<div class="c-singal-project">
    <h4>
      <a href="./projectDetails10.html"
        >${data.projectName}</a
      >
    </h4>
    <div class="c-l-p-podt-meta">
      <div class="post-meta-link">
        |
        <a href="#">Architecture</a> | <a href="#">Educational</a> |
        <a href="#">Project</a> | <a href="#">${data.category}</a> |
      </div>
      <div class="post-meta-time">
        <small> | ${data.uploadDate} | </small>
        <small> | Total Views: ${data.totalViews} | </small>
      </div>
    </div>
    <div class="c-s-p-i-p-text">
      <div class="podt-meta-images-section">
        <!-- <div class="podt-meta-image"> -->
        <img
          src="${data.projectImageLink}"
          alt
        />
        <!-- </div> -->
        <div class="podt-meta-short-dec">
          <p>
            <a >
              Student Name: ${data.studentName}</a
            ><br />
            <a >Year: ${data.projectCreationYear}</a><br />
            <a >Studio: ${data.studioName} </a
            ><br />
            <a 
              >${data.universityName}
            </a>
          </p>
        </div>
      </div>
      <div class="podt-meta-dec-text">
        <p>
         ${data.projectDescription}
        </p>
      </div>
      <div class="podt-meta-read-more-section">
        <a data-project-id="${data._id}" class="read-more-link-selector">Read More [+]</a>
      </div>
    </div>
  </div>`;
        totalListCode = totalListCode + singleListCode;
    }
    projectListDiv.innerHTML = totalListCode;
};
export default loadProjectsList;
