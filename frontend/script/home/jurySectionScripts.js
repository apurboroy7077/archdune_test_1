import juryData from "../../data/juryData.js";
console.log("hi");
let jurySection = document.getElementsByClassName("jury-card-container")[0];
let loadJurySection = () => {
  let code = ``;
  for (let i = 0; i < juryData.length; i++) {
    let data = juryData[i];
    let singleCode = ` <div class="swiper-slide jury-item">
    <div class="jury-image-div">
      <img
        src="${data.imageSrc}" class=""
      />
    </div>
    <div class="jury-name-div">
    ${data.name}
    </div>
    <div class="jury-university-div">
    ${data.universityName}</div>
  </div>`;
    code = code + singleCode;
  }

  jurySection.innerHTML = code;
};
loadJurySection();
