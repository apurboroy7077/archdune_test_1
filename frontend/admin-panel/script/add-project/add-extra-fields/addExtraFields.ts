const addExtraFieldsFunction = () => {
  const addExtraFieldButton = document.getElementsByClassName(
    "add-extra-field-button-selector"
  )[0] as HTMLButtonElement;
  addExtraFieldButton.addEventListener("click", () => {
    console.log("Hello World");
  });
};

export default addExtraFieldsFunction;
