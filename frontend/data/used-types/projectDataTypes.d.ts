export type AdditionalField = {
  fieldName: string;
  fieldDescription: string;
  fieldImages: FieldImageType[];
};
export type FieldImageType = {
  imageFile: File; // Assuming the image file is of type File
  caption: string;
};

type ProjectDataTypeOfSendingToServer1 = {
  visibilityStatus: any; // You can change 'any' to the specific type if known
  projectName: string;
  projectImage: File;
  projectImageCaption: string;
  category: string;
  studentName: string;
  projectCreationYear: string;
  studioName: string;
  universityName: string;
  projectDescription: string;
  studioTeachers: string;
  typology: string;
  height: string;
  landArea: string;
  buildArea: string;
  basement: string;
  videoSrc: string;
  additionalFields: AdditionalField[];
  uploadDate: string;
  totalViews: string;
  location: string;
};
export type { ProjectDataTypeOfSendingToServer1 };
