import getAdditionalFields from "./get-additional-fields/getAdditionalFields.js";
import getNormalFields from "./get-normal-fields-data/getNormalFields.js";

const getDataFromForm = (e: SubmitEvent) => {
  const normalFieldsData = getNormalFields(e);
  const additionalFieldsData = getAdditionalFields();
  normalFieldsData.additionalFields = additionalFieldsData;
  return normalFieldsData;
};

export default getDataFromForm;
