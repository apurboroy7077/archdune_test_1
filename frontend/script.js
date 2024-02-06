// submit pages script

const allInputfilds = document.querySelectorAll(".s25110");
allInputfilds.forEach((item) => {
  item.addEventListener("click", function () {
    allInputfilds.forEach((int) => int.classList.remove("box-shawo"));
    this.classList.add("box-shawo");
  });
});

// submit pages files script

// const addMorFiles = document.querySelector(".add_mor_files");
// const hidenFiles = document.querySelector(".hiden-files");
// addMorFiles.addEventListener("click", function () {
//   hidenFiles.classList.toggle("show-file");
// });

// project Detels


const buyBtn = document.querySelectorAll(".banerRight-buy-btn");
const buyPopup = document.querySelector(".book-buy-message");

const handalBuy = () => {
  buyPopup.classList.add("showBuyBox");
  document.body.style.overflow = "hidden"
}


const closePupop = () => {
  buyPopup.classList.remove("showBuyBox");
  document.body.style.overflow = "auto"
}

buyBtn.forEach((i)=>{
  i.addEventListener('click', handalBuy)
})
