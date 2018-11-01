import axios from "axios";

const instance = axios.create({
  baseURL: "/mall",
  headers: {
    common: {
      HTTP_X_REQUEST_FROM: "mall"
    }
  }
});

export default instance;
