import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getAffirmations = async () => {
  try {
    return await API.getMethod(ENDPOINT.affirmation.get_all, true);
  } catch (e) {
    return e;
  }
};

export default {
  getAffirmations,
};
