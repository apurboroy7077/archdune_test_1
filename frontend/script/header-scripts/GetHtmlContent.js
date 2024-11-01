const GetHtmlContent = (address) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(address)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text(); // Parse the content as text
        })
        .then((htmlContent) => {
          resolve(htmlContent);
        })
        .catch((error) => {
          console.error("Error loading test.html:", error);
          reject(error);
        });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default GetHtmlContent;
