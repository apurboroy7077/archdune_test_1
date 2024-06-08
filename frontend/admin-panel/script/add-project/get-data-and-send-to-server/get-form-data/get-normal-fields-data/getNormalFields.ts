const projectNames = [
  "visibilityStatus",
  "projectName",
  "projectImage",
  "projectImageCaption",
  "category",
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

const getNormalFields = (e: SubmitEvent) => {
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const data: any = {};
  for (let i = 0; i < projectNames.length; i++) {
    let fieldName = projectNames[i];
    const fieldValue = formData.get(fieldName);
    data[fieldName] = fieldValue;
  }

  return data;
};

export default getNormalFields;
