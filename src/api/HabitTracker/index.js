import API from "api/Base";
import { ENDPOINT } from "config/constant";

const getHabits = () => {
  try {
    console.log(ENDPOINT.habitTracker.getAll);
    const res = API.getMethod(ENDPOINT.habitTracker.getAll, true);
    return res;
  } catch (err) {
    return err;
  }
};

const createHabit = (data) => {
  try {
    return API.postMethod(ENDPOINT.habitTracker.create, true, data);
  } catch (e) {
    return e;
  }
};

const showHabit = (id) => {
  try {
    const res = API.getMethod(ENDPOINT.habitTracker.show + id, true);
    return res;
  } catch (err) {
    return err;
  }
};

const deleteHabit = (id) => {
  try {
    const res = API.deleteMethod(ENDPOINT.habitTracker.delete + id, true);
    return res;
  } catch (err) {
    return err;
  }
};

const habitRemarks = (data, id) => {
  try {
    const res = API.postMethod(ENDPOINT.habitTracker.storeRemarks + id, true, data);
    return res;
  } catch (err) {
    return err;
  }
};

export default {
  getHabits,
  createHabit,
  showHabit,
  deleteHabit,
  habitRemarks,
};
