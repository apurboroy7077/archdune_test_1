const readMoreButtonScript = () => {
  const ReadMor = document.querySelector(".raad_mor_option");
  const morInfo = document.querySelectorAll(".mor-info");
  if (ReadMor) {
    ReadMor.addEventListener("click", function () {
      morInfo.forEach((item) => {
        item.classList.toggle("ShowingOption");
      });
    });
  }
};

export default readMoreButtonScript;
