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

export default {
  getHabits,
};
