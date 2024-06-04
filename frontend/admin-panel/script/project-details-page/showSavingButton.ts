const showSavingButton = () => {
  const buttonDiv = document.getElementsByClassName(
    "submit-button-div-selector"
  )[0];
  const code = `<div
  class="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 text-center"
>
  <span>Saving</span>
  <img
    src="/frontend/images/icons/spinner-solid-white.svg"
    alt=""
    class="w-[1.7rem] animate-spin inline ml-1"
  />
</div>`;
  buttonDiv.innerHTML = code;
};

export default showSavingButton;

const showSavingSuccessfulButton = () => {
  const buttonDiv = document.getElementsByClassName(
    "submit-button-div-selector"
  )[0];
  const code = `<div
    class=" text-center w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
  >
    <span>Saved</span>
    <img
      src="/frontend/images/icons/check-solid-white.svg"
      alt=""
      class="w-[1.7rem] animate-ping inline-block ml-5"
    />
  </div>`;
  buttonDiv.innerHTML = code;
};
const showSavingFailedButton = () => {
  const buttonDiv = document.getElementsByClassName(
    "submit-button-div-selector"
  )[0];
  const code = ` <button
  type="submit"
  class="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
>
  <span>Failed, Try Again</span>
  <img
    src="/frontend/images/icons/warning-red.svg"
    alt=""
    class="w-[1.7rem] animate-pulse inline-block ml-3"
  />
</button>`;
  buttonDiv.innerHTML = code;
};
export { showSavingSuccessfulButton, showSavingFailedButton };
