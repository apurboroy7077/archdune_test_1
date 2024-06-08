const logFormData = (formData) => {
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
};
export { logFormData };
