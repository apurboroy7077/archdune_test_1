const addField = () => {
    const extraFieldDiv = document.getElementsByClassName("extra-fields-div")[0];
    const singleExtraFieldDivHtmlCode = `
  <div class="extra-field-single-div mt-10">
  <div>
    <label class="block text-gray-700 font-medium mb-1">Field Name</label>
    <input
      type="text"
      name="testName"
      class="mt-1 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
      required
    />
  </div>
  <div class="mt-3">
    <label class="block text-gray-700 font-medium mb-1"
      >Field Description</label
    >
    <input
      type="text"
      name=""
      class="mt-1 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
      required
    />
  </div>
  <div class="mt-3">
    <label class="block text-gray-700 font-medium mb-1">Field Image</label>
    <div class="additional-field-images-div-selector">
      <div>
        <input
          type="file"
          name="image"
          class="mt-1 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="text"
          name="imageCaption"
          placeholder="Image Caption"
          class="mt-5 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="text-[grey] w-[60%] text-xs border-[1px] py-3 active:scale-[0.95] mt-5 add-another-image-button-selector"
      >
        Add Another Image To this Field
      </button>
    </div>
  </div>
</div>
  `;
    extraFieldDiv.insertAdjacentHTML("beforeend", singleExtraFieldDivHtmlCode);
};
const addExtraImageField = (e) => {
    const singleImageDivHtmlCode = `
  
  <div>
        <input
          type="file"
          name="image"
          class="mt-1 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="text"
          name="imageCaption"
          placeholder="Image Caption"
          class="mt-5 block w-full p-3 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>
  
  `;
    const button = e.currentTarget;
    const currrentFieldImagesDiv = button.parentElement?.parentElement
        ?.children[1];
    currrentFieldImagesDiv.insertAdjacentHTML("beforeend", singleImageDivHtmlCode);
};
const addExtraImageToFieldFunction = () => {
    const addAnotherImageButton = document.getElementsByClassName("add-another-image-button-selector");
    for (let i = 0; i < addAnotherImageButton.length; i++) {
        let button = addAnotherImageButton[i];
        button.addEventListener("click", (e) => {
            addExtraImageField(e);
        });
    }
};
const addExtraFieldsFunction = () => {
    const addExtraFieldButton = document.getElementsByClassName("add-extra-field-button-selector")[0];
    addExtraFieldButton.addEventListener("click", () => {
        addField();
        addExtraImageToFieldFunction();
    });
};
export default addExtraFieldsFunction;
