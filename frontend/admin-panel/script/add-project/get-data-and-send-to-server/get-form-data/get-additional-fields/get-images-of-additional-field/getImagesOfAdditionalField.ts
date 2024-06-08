const getImagesOfAdditionalField = (elementDiv: HTMLDivElement) => {
  const imagesDiv = elementDiv.children;
  let imageData: any = [];
  for (let i = 0; i < imagesDiv.length; i++) {
    const myImageDiv = imagesDiv[i];
    const imageInputElement = myImageDiv.children[0] as any;
    const imageCaptionInputElement = myImageDiv.children[1] as HTMLInputElement;
    const imageFile = imageInputElement.files[0] as File;
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
