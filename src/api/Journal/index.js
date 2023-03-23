import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getJournals = async () => {
  try {
    return await API.getMethod(ENDPOINT.journal.get, true);
  } catch (err) {
    return err;
  }
};

const getJournalList = async (id) => {
  try {
    return await API.getMethod(ENDPOINT.journal.getList + id, true);
  } catch (err) {
    return err;
  }
};

const createJournalList = (id, data) => {
  try {
    return API.postMethod(ENDPOINT.journal.createList + id, true, data);
  } catch (err) {
    return err;
  }
};
const createJournal = (data) => {
  try {
    return API.postMethod(ENDPOINT.journal.get, true, data);
  } catch (err) {
    return err;
  }
};

export default {
  getJournals,
  getJournalList,
  createJournalList,
  createJournal,
};
