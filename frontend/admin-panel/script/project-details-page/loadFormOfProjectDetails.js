const loadNormalFields = (projectData, myForm) => {
    const htmlCode = `
  
  
  <div class="form-group mb-4">
  <label for="projectName" class="block text-gray-700"
    >Visibility Status</label
  >
  <div class="mt-2">
    <input type="radio" value="VISIBLE" name="visibilityStatus" ${projectData.data.visibilityStatus === "VISIBLE" ? "checked" : ""}/>
    <span>Visible</span>
  </div>
  <div>
    <input type="radio" value="INVISIBLE" name="visibilityStatus" ${projectData.data.visibilityStatus === "INVISIBLE" ? "checked" : ""}/>
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
    value="${projectData.data.projectName}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="projectImageSrc" class="block text-gray-700"
    >Project Image</label
  >
  
  <img
    src="${projectData.data.projectImageSrc}"
    alt="Project Image"
    class="mt-4"
  />
  <input
  type="text"
  name="projectImageSrc"
  value="${projectData.data.projectImageSrc}"
  class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
/>
</div>

<div class="form-group mb-4">
  <label for="category" class="block text-gray-700">Category</label>
  <input
    type="text"
    name="category"
    value="${projectData.data.category}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="projectUploadDate" class="block text-gray-700"
    >Project Upload Date</label
  >
  <input
    type="text"
    name="projectUploadDate"
    value="${projectData.data.projectUploadDate}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="totalViews" class="block text-gray-700"
    >Total Views</label
  >
  <input
    type="number"
    name="totalViews"
    value="${projectData.data.totalViews}"
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
    value="${projectData.data.studentName}"
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
    value="${projectData.data.projectCreationYear}"
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
    value="${projectData.data.studioName}"
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
    value="${projectData.data.universityName}"
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
${projectData.data.projectDescription}</textarea
 >
</div>

<div class="form-group mb-4">
  <label for="studioTeachers" class="block text-gray-700"
    >Studio Teachers</label
  >
  <input
    type="text"
    name="studioTeachers"
    value="${projectData.data.studioTeachers}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="typology" class="block text-gray-700">Typology</label>
  <input
    type="text"
    name="typology"
    value="${projectData.data.typology}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="height" class="block text-gray-700">Height</label>
  <input
    type="text"
    name="height"
    value="${projectData.data.height}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="landArea" class="block text-gray-700">Land Area</label>
  <input
    type="text"
    name="landArea"
    value="${projectData.data.landArea}"
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
    value="${projectData.data.buildArea}"
    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>

<div class="form-group mb-4">
  <label for="basement" class="block text-gray-700">Basement</label>
  <input
    type="text"
    name="basement"
    value="${projectData.data.basement}"
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
              value="${projectData.data.videoSrc}"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>




  `;
    myForm.innerHTML = htmlCode;
};
const loadAdditionalFields = (projectData, myForm) => {
    const additionalFieldsCode = `
  <div class="additional-fields-div-selector">
${projectData.data.additionalFields
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
const loadSubmitButton = (myForm) => {
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
const loadFormOfProjectDetails = (projectData) => {
    const myForm = document.getElementsByClassName("edit-project-form-selector")[0];
    myForm.innerHTML = "";
    loadNormalFields(projectData, myForm);
    loadAdditionalFields(projectData, myForm);
    loadSubmitButton(myForm);
};
export default loadFormOfProjectDetails;
