import axios from "api/axios";
import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getProviders = async () => {
  try {
    const res = API.getMethod(ENDPOINT.explore_provider.getProviders, true);
    return res;
  } catch (err) {
    return err;
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
