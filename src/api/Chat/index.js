import API from "api/Base";
import { ENDPOINT } from "config/constant";

const viewAll = () => {
  return API.getMethod(ENDPOINT.chat.showAll, true);
};

const get = (id) => {
  return API.getMethod(ENDPOINT.chat.view + id, true);
};

export default {
  viewAll,
  get,
};
