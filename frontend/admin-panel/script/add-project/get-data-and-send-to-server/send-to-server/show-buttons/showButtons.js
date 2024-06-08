const showAddingButton = () => {
    const buttonDiv = document.getElementsByClassName("submit-button-div-selector")[0];
    const buttonCode = ` <button
  type="button"
  class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  Adding Project
  <img
    src="/images/icons/spinner-solid-white.svg"
    alt=""
    class="w-[1.7rem] inline-block ml-3 animate-spin"
  />
</button>`;
    buttonDiv.innerHTML = buttonCode;
};
const showFailedButton = () => {
    const buttonDiv = document.getElementsByClassName("submit-button-div-selector")[0];
    const buttonCode = `  <button
  type="submit"
  class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  Failed, Try Again
  <img
    src="/images/icons/warning-red.svg"
    alt=""
    class="w-[1.7rem] inline-block ml-3 animate-pulse"
  />
</button>`;
    buttonDiv.innerHTML = buttonCode;
};
const showSuccessButton = () => {
    const buttonDiv = document.getElementsByClassName("submit-button-div-selector")[0];
    const buttonCode = `   <button
  type="button"
  class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  Project Added
  <img
    src="/images/icons/check-solid-white.svg"
    alt=""
    class="w-[1.7rem] inline-block ml-3 animate-bounce"
  />
</button>`;
    buttonDiv.innerHTML = buttonCode;
};
export { showAddingButton, showFailedButton, showSuccessButton };
