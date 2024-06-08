const addImagesFieldToForm = (formData, imagesData, additionalFieldNumber) => {
    for (let i = 0; i < imagesData.length; i++) {
        const singleImageData = imagesData[i];
        const imageKey = `additionalField${additionalFieldNumber}Image${i}File`;
        const image = singleImageData.imageFile;
        formData.append(imageKey, image);
        const imageCaptionKey = `additionalField${additionalFieldNumber}Image${i}Caption`;
        const imageCaption = singleImageData.caption;
        formData.append(imageCaptionKey, imageCaption);
    }
    return formData;
};
export default addImagesFieldToForm;
