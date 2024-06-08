const getImagesOfAdditionalField = (elementDiv) => {
    const imagesDiv = elementDiv.children;
    let imageData = [];
    for (let i = 0; i < imagesDiv.length; i++) {
        const myImageDiv = imagesDiv[i];
        const imageInputElement = myImageDiv.children[0];
        const imageCaptionInputElement = myImageDiv.children[1];
        const imageFile = imageInputElement.files[0];
        const caption = imageCaptionInputElement.value;
        const singleImagesData = {
            imageFile,
            caption,
        };
        imageData.push(singleImagesData);
    }
    return imageData;
};
export default getImagesOfAdditionalField;
