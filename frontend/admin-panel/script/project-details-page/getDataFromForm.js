const extractDataFromNormalFields = (e) => {
    const formData = new FormData(e.currentTarget);
    const projectKeys = [
        "visibilityStatus",
        "projectName",
        "projectImageSrc",
        "category",
        "projectUploadDate",
        "totalViews",
        "studentName",
        "projectCreationYear",
        "studioName",
        "universityName",
        "projectDescription",
        "studioTeachers",
        "typology",
        "height",
        "landArea",
        "buildArea",
        "basement",
        "videoSrc",
    ];
    const dataObject = {};
    for (let i = 0; i < projectKeys.length; i++) {
        const key = projectKeys[i];
        const data = formData.get(key);
        dataObject[key] = data;
    }
    return dataObject;
};
const extractDataFromAdditionalFields = () => {
    const additionalFieldsDiv = document.getElementsByClassName("additional-field");
    let data = [];
    for (let i = 0; i < additionalFieldsDiv.length; i++) {
        const fieldDiv = additionalFieldsDiv[i];
        const myObjectData = {};
        for (let i = 0; i < fieldDiv.children.length; i++) {
            const childrenDiv = fieldDiv.children[i];
            const fieldInfo = childrenDiv.getAttribute("data-field-info");
            if (fieldInfo === "field-name") {
                const fieldInput = childrenDiv.children[1];
                const fieldName = fieldInput.value;
                myObjectData.fieldName = fieldName;
            }
            else if (fieldInfo === "field-description") {
                const fieldTextArea = childrenDiv.children[1];
                const fieldDescription = fieldTextArea.value;
                myObjectData.fieldDescription = fieldDescription;
            }
            else if (fieldInfo === "field-images") {
                const fieldImagesDiv = childrenDiv.children;
                let fieldImages = [];
                for (let i = 0; i < fieldImagesDiv.length; i++) {
                    const imageDiv = fieldImagesDiv[i];
                    const imageSrcInput = imageDiv.children[3];
                    const imageCaptionInput = imageDiv.children[5];
                    const imageSrc = imageSrcInput.value;
                    const imageCaption = imageCaptionInput.value;
                    const imageData = {
                        caption: imageCaption,
                        imageSrc: imageSrc,
                    };
                    fieldImages.push(imageData);
                }
                myObjectData.fieldImages = fieldImages;
                data.push(myObjectData);
            }
        }
    }
    return data;
};
const getDataFromForm = (e) => {
    let data;
    e.preventDefault();
    const normalFieldsData = extractDataFromNormalFields(e);
    const additionalFieldsData = extractDataFromAdditionalFields();
    normalFieldsData.additionalFields = additionalFieldsData;
    data = normalFieldsData;
    console.log(data);
    return data;
};
export default getDataFromForm;
