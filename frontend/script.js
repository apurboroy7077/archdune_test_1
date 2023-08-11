// submit pages script

const allInputfilds = document.querySelectorAll(".s25110");
allInputfilds.forEach((item) => {
  item.addEventListener("click", function () {
    allInputfilds.forEach((int) => int.classList.remove("box-shawo"));
    this.classList.add("box-shawo");
  });
});

// submit pages files script

const addMorFiles = document.querySelector(".add_mor_files");
const hidenFiles = document.querySelector(".hiden-files");
addMorFiles.addEventListener("click", function () {
  hidenFiles.classList.toggle("show-file");
});

// project Detels
