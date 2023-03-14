import axios from "axios";

//Get Method
const getMethod = async (endpoint, authentication = true, data, printConsole = false) => {
  console.log(endpoint);
  console.log(localStorage.getItem("token"));
  if (authentication) {
    var bearer_token = localStorage.getItem("token");
    var header = {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
      params: data,
    };
  }
  return await axios
    .get(endpoint, header)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error.response;
    });
};

// Post Method
const postMethod = async (endpoint, authentication = true, data = null, printConsole = false, multipart = false) => {
  let headers = {};
  console.log("Data");
  console.log(data);
  if (authentication) {
    var bearer_token = localStorage.getItem("token");
    headers["Authorization"] = `Bearer ${bearer_token}`;
  }
  if (multipart) {
    console.log("asdasdasdasdasdasdasdasdasd");
    headers["content-type"] = "multipart/form-data";
  }
  console.log("data");
  console.log(data);
  return await axios
    .post(endpoint, data, { headers })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error.response;
    });
};

// Delete Method
const deleteMethod = async (endpoint, authentication = true, data = null, printConsole = false) => {
  header = {};
  if (authentication) {
    var bearer_token = localStorage.getItem("token");
    console.log(bearer_token);
    var header = {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    };
  }
  console.log(header);
  return await axios
    .delete(endpoint, header)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error.response;
    });
};
//Patch Method
const patchMethod = async (endpoint, authentication = true, data = null, printConsole = false) => {
  header = {};
  if (authentication) {
    var bearer_token = localStorage.getItem("token");
    var header = {
      headers: {
        Authorization: `Bearer ${JSON.parse(bearer_token)}`,
      },
    };
  }
  return await axios
    .patch(endpoint, data, header)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error.response;
    });
};
export default {
  getMethod,
  postMethod,
  deleteMethod,
  patchMethod,
};
