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

export default {
  getHabits,
  createHabit,
};
