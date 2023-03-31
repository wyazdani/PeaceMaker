import axios from "../axios";

const getUserInfo = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("api/get-user", {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserInfo;
