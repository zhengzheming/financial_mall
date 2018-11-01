import axios from "axios";

const instance = axios.create({
  baseURL: "/mall",
  headers: {
    common: {
      "X-REQUEST-FROM": "mall"
    }
  }
});

export default instance;
