type ar7FetchType = {
  post: (url: string, data: object) => Promise<Response>;
  postForm: (url: string, formData: FormData) => Promise<Response>;
};

const ar7Fetch: ar7FetchType = {
  post: (url, data) => {
    return new Promise(async (resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          if (response.status > 199 && response.status < 300) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error: unknown) => {
          reject(error);
        });
    });
  },
  postForm: (url, formData) => {
    return new Promise(async (resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then(async (response) => {
          if (response.status > 199 && response.status < 300) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error: unknown) => {
          reject(error);
        });
    });
  },
};
export default ar7Fetch;
