import { FieldImageType } from "../../../../../../../data/used-types/projectDataTypes";

type addImagesFieldToFormType = (
  formData: FormData,
  imagesData: FieldImageType[],
  additionalFieldNumber: number
) => FormData;

const addImagesFieldToForm: addImagesFieldToFormType = (
  formData,
  imagesData,
  additionalFieldNumber
) => {
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
