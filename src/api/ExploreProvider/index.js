import axios from "api/axios";
import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getProviders = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("api/get-providers", {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const searchProvider = (data) => {
  console.log(data);
  try {
    const res = API.getMethod(ENDPOINT.explore_provider.searchProviders, true, data);
    return res;
  } catch (err) {
    return err;
  }
};

export default {
  getProviders,
  searchProvider,
};
