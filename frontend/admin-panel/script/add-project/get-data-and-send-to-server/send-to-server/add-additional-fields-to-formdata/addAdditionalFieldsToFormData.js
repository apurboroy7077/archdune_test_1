import addImagesFieldToForm from "./add-images-field/addImagesFieldToForm.js";
const addAdditionalFieldsToFormData = (formData, projectData) => {
    let myFormData = formData;
    const additionalFieldsData = projectData.additionalFields;
    const totalNumberOfAdditionalFields = additionalFieldsData.length;
    myFormData.append("totalNumberOfAdditionalFields", totalNumberOfAdditionalFields.toString());
    for (let i = 0; i < additionalFieldsData.length; i++) {
        // ADD ADDITIONAL FIELD NAME---------------------------------------
        const singleField = additionalFieldsData[i];
        const fieldNameKey = `additionalField${i}Name`;
        const fieldName = singleField.fieldName;
        // ADD ADDITIONAL FIELD DESCRIPTION------------------------------------------
        myFormData.append(fieldNameKey, fieldName);
        const fieldDescriptionKey = `additionalField${i}Description`;
        const fieldDescription = singleField.fieldDescription;
        myFormData.append(fieldDescriptionKey, fieldDescription);
        // ADD ADDITIONAL FIELD IMAGES--------------------------------------------------
        const fieldImages = singleField.fieldImages;
        const fieldNumberOfImageKey = `additionalField${i}ImageNumber`;
        const fieldNumberOfImage = fieldImages.length.toString();
        myFormData.append(fieldNumberOfImageKey, fieldNumberOfImage);
        const newFormData = addImagesFieldToForm(myFormData, fieldImages, i);
        myFormData = newFormData;
    }
    return myFormData;
};
export default addAdditionalFieldsToFormData;
