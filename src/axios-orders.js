import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger009.firebaseio.com/"
});

export default instance;
