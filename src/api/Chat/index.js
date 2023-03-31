import API from "api/Base";
import { ENDPOINT } from "config/constant";

const viewAll = () => {
  return API.getMethod(ENDPOINT.chat.showAll, true);
};

const get = (id) => {
  return API.getMethod(ENDPOINT.chat.view + id, true);
};

const sentMessage = (data) => {
  return API.postMethod(ENDPOINT.chat.sendMessage, true, data);
};

export default {
  viewAll,
  get,
  sentMessage,
};
