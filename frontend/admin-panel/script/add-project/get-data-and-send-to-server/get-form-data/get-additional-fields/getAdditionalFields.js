import getImagesOfAdditionalField from "./get-images-of-additional-field/getImagesOfAdditionalField.js";
const getAdditionalFields = () => {
    const additionalFieldsDivs = document.getElementsByClassName("extra-fields-div")[0].children;
    const data = [];
    for (let i = 0; i < additionalFieldsDivs.length; i++) {
        const fieldDiv = additionalFieldsDivs[i];
        const fieldNameInputElement = fieldDiv.children[0]
            .children[1];
        const fieldDescriptionInput = fieldDiv.children[1]
            .children[1];
        const fieldImagesDiv = fieldDiv.children[2].children[1];
        const fieldName = fieldNameInputElement.value;
        const fieldDescription = fieldDescriptionInput.value;
        const imagesData = getImagesOfAdditionalField(fieldImagesDiv);
        const myObjectData = {
            fieldName,
            fieldDescription,
            fieldImages: imagesData,
        };
        data.push(myObjectData);
    }
    return data;
};
export default getAdditionalFields;
