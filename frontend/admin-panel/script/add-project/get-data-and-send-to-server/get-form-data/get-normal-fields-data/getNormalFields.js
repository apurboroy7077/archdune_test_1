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
    "location",
];
const getNormalFields = (e) => {
    const formData = new FormData(e.currentTarget);
    const data = {};
    for (let i = 0; i < projectNames.length; i++) {
        let fieldName = projectNames[i];
        const fieldValue = formData.get(fieldName);
        data[fieldName] = fieldValue;
    }
    return data;
};
export default getNormalFields;
