import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getJournals = async () => {
  try {
    return await API.getMethod(ENDPOINT.journal.get, true);
  } catch (err) {
    return err;
  }
};

export default {
  getJournals,
};
