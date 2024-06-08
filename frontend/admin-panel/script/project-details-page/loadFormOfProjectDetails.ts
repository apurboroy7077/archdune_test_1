import { receivedProjectDataType } from "../../../data/used-types/receivedProjectDataType.js";
import { demoProjectDataType } from "../../../data/variables/demoProjectData.js";

type loadFormOfProjectDetailsType = (
  projectData: receivedProjectDataType
) => void;

const loadNormalFields = (
  projectData: receivedProjectDataType,
  myForm: HTMLFormElement
) => {
  const projectData_ = projectData;
  const htmlCode = `
  
  
  <div class="form-group mb-4">
  <label for="projectName" class="block text-gray-700"
    >Visibility Status</label
  >
  <div class="mt-2">
    <input type="radio" value="VISIBLE" name="visibilityStatus" ${
      projectData.visibilityStatus === "VISIBLE" ? "checked" : ""
    }/>
    <span>Visible</span>
  </div>
  <div>
    <input type="radio" value="INVISIBLE" name="visibilityStatus" ${
      projectData.visibilityStatus === "INVISIBLE" ? "checked" : ""
    }/>
    <span>Hidden</span>
  </div>
</div>
  <div class="form-group mb-4">
  <label for="projectName" class="block text-gray-700"
    >Project Name</label
  >
  <input
    type="text"
    name="projectName"
    value="${projectData.projectName}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="projectImageLink" class="block text-gray-700"
    >Project Image</label
  >
  
  <img
    src="${projectData.projectImageLink}"
    alt="Project Image"
    class="mt-4"
  />
  <input
  type="text"
  name="projectImageLink"
  value="${projectData.projectImageLink}"
  class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
/>
<input
type="text"
name="projectImageCaption"
value="${projectData.projectImageCaption}"
placeholder="Caption"
class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
/>
</div>

<div class="form-group mb-4">
  <label for="category" class="block text-gray-700">Category</label>
  <input
    type="text"
    name="category"
    value="${projectData.category}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>





<div class="form-group mb-4">
  <label for="studentName" class="block text-gray-700"
    >Student Name</label
  >
  <input
    type="text"
    name="studentName"
    value="${projectData.studentName}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="projectCreationYear" class="block text-gray-700"
    >Project Creation Year</label
  >
  <input
    type="number"
    name="projectCreationYear"
    value="${projectData.projectCreationYear}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="studioName" class="block text-gray-700"
    >Studio Name</label
  >
  <input
    type="text"
    name="studioName"
    value="${projectData.studioName}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="universityName" class="block text-gray-700"
    >University Name</label
  >
  <input
    type="text"
    name="universityName"
    value="${projectData.universityName}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="projectDescription" class="block text-gray-700"
    >Project Description</label
  >
  <textarea
    name="projectDescription"
    rows="4"

    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  >
${projectData.projectDescription}</textarea
 >
</div>

<div class="form-group mb-4">
  <label for="studioTeachers" class="block text-gray-700"
    >Studio Teachers</label
  >
  <input
    type="text"
    name="studioTeachers"
    value="${projectData.studioTeachers}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="typology" class="block text-gray-700">Typology</label>
  <input
    type="text"
    name="typology"
    value="${projectData.typology}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="height" class="block text-gray-700">Height</label>
  <input
    type="text"
    name="height"
    value="${projectData.height}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="landArea" class="block text-gray-700">Land Area</label>
  <input
    type="text"
    name="landArea"
    value="${projectData.landArea}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="buildArea" class="block text-gray-700"
    >Build Area</label
  >
  <input
    type="text"
    name="buildArea"
    value="${projectData.buildArea}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="basement" class="block text-gray-700">Basement</label>
  <input
    type="text"
    name="basement"
    value="${projectData.basement}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
            <label for="videoSrc" class="block text-gray-700"
              >Video Source</label
            >
            <input
              type="text"
              name="videoSrc"
              value="${projectData.videoSrc}"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>




  `;

  myForm.innerHTML = htmlCode;
};
const loadAdditionalFields = (
  projectData: receivedProjectDataType,
  myForm: HTMLFormElement
) => {
  const additionalFieldsCode = `
  <div class="additional-fields-div-selector">
${projectData.additionalFields
  .map((data) => {
    return `
    
    <div class="additional-field mt-10">
    <div class="font-bold text-2xl">${data.fieldName}</div>
  <div data-field-info="field-name" class="mt-2">
    <div class="text-gray-700">Field Name</div>
    <input
      type="text"
      value="${data.fieldName}"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
  <div data-field-info="field-description" class="form-group mt-2">
    <label for="${data.fieldDescription}" class="block text-gray-700">
      Description
    </label>
    <textarea
      
      rows="4"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >${data.fieldDescription}</textarea>
    
  </div>
  <div data-field-info="field-images" class="form-group mt-2">
  ${data.fieldImages
    .map((imageData) => {
      return `<div data-field-info="field-single-image">
    <label class="block text-gray-700"
      >Image</label
    >

    <img
      src="${imageData.imageSrc}"
      
      class="mt-4"
    />
    <label class="block text-gray-700 mt-2">Image Src</label>
    <input
      type="text"
      
      value="${imageData.imageSrc}"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
    <label class="block text-gray-700 mt-2">Caption</label>

    <input
      type="text"
      placeholder="caption"
      value="${imageData.caption}"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>`;
    })
    .join("")}
  
  </div>




</div>

    
    
    `;
  })
  .join("")}
  </div>
  
  
  `;

  myForm.innerHTML = myForm.innerHTML + additionalFieldsCode;
};
const loadSubmitButton = (myForm: HTMLFormElement) => {
  const codeOfSubmitButton = ` <div class="mt-8 submit-button-div-selector">
  <button
    type="submit"
    class="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
  >
    Save Changes
  </button>
</div>`;
  myForm.innerHTML = myForm.innerHTML + codeOfSubmitButton;
};
const loadFormOfProjectDetails: loadFormOfProjectDetailsType = (
  projectData
) => {
  const myForm = document.getElementsByClassName(
    "edit-project-form-selector"
  )[0] as HTMLFormElement;
  myForm.innerHTML = "";
  loadNormalFields(projectData, myForm);
  loadAdditionalFields(projectData, myForm);
  loadSubmitButton(myForm);
};

export default loadFormOfProjectDetails;
