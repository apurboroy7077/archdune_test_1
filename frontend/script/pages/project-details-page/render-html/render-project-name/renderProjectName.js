const renderProjectName = (projectData) => {
    const projectNameDiv = document.getElementsByClassName("project-name-div-selector")[0];
    const htmlCode = `
  
  <h4 class="c-sin-pro-title-shear">
  <a class="paramount-title" href="./projectDetails9.html"
    >${projectData.projectName}</a
  >
  <div class="shear">
    <div class="socil-shear-icon">
      <a href="#" target="_blank" class="facebook-btn"
        ><i class="fa-brands fa-facebook"></i
      ></a>
      <a href="#" target="_blank" class="twitter-btn"
        ><i class="fa-brands fa-square-twitter"></i
      ></a>
      <a href="#" target="_blank" class="pinterest-btn"
        ><i class="fa-brands fa-pinterest"></i
      ></a>
      <a href="#" target="_blank" class="linkedin-btn"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
    <button class="c-sin-pro-title-shear2400">
      <i class="fa-solid fa-share-nodes"></i>
    </button>
  </div>
</h4>
  
  `;
    projectNameDiv.innerHTML = htmlCode;
};
export default renderProjectName;
