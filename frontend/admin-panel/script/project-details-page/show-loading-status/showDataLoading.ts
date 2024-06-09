export const showProjectLoading = () => {
  const formElement = document.getElementsByClassName(
    "edit-project-form-selector"
  )[0];
  const buttonCode = `
 
            <button
              class="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 animate-pulse"
            >
              <span>Loading</span>
              <img
                src="/images/icons/spinner-solid-white.svg"
                alt=""
                class="w-[1.7rem] animate-ping inline-block ml-5"
              />
            </button>
          
  
  `;
  formElement.innerHTML = buttonCode;
};
export const showProjectLoadingFailed = () => {
  const formElement = document.getElementsByClassName(
    "edit-project-form-selector"
  )[0];
  const buttonCode = `
   
  <div>
  <button
    class="w-full py-3 bg-[black] text-white font-bold rounded-md hover:bg-blue-600 animate-pulse"
  >
    <span>Failed</span>
    <img
      src="/images/icons/warning-red.svg"
      alt=""
      class="w-[1.7rem] animate-ping inline-block ml-5"
    />
  </button>
</div>
            
    
    `;
  formElement.innerHTML = buttonCode;
};
