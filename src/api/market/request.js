import axios from "axios";

const instance = axios.create({
  baseURL: "/exchange",
  headers: {
    common: {
      HTTP_X_REQUEST_FROM: "exchange"
    }
  }
});

export default instance;
