import { receivedProjectDataType } from "../../../../../data/used-types/receivedProjectDataType";

const renderVideoSection = (projectData: receivedProjectDataType) => {
  const videoDiv = document.getElementsByClassName(
    "project-details-video-section-div-selector"
  )[0] as HTMLDivElement;
  console.log(projectData.videoSrc);
  if (projectData.videoSrc.length > 0) {
    const htmlCode = `
    <div class="my-2rem">
                    <div class="">
                      <iframe
                        class="w-full h-13rem md-h-25rem lg-h-30rem"
                        style=""
                        src="${projectData.videoSrc}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
    
    `;
    videoDiv.innerHTML = htmlCode;
  }
};

export default renderVideoSection;
