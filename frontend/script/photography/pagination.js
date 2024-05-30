import { imageDatas } from "./DataOfPhotography.js";
const applyPaginationFunction = () => {
    const paginationButtons = document.getElementsByClassName("pagination-button-photography-1");
    for (let i = 0; i < paginationButtons.length; i++) {
        const button = paginationButtons[i];
        const paginationSerial = button.getAttribute("data-pagination-serial");
        const paginationSerialNumber = Number(paginationSerial);
        button.addEventListener("click", () => {
            const filteredData = [];
            const startingPoint = 10 * paginationSerialNumber - 10;
            const endingPoint = 10 * paginationSerialNumber - 1;
            for (let i = startingPoint; i < endingPoint; i++) {
                const imageData = imageDatas[i];
                if (imageData) {
                    filteredData.push(imageData);
                }
            }
            console.log(filteredData);
        });
    }
};
applyPaginationFunction();
const paginationBridge = "pagination";
export { paginationBridge };
