import axios from "axios";

const api = axios.create({
  baseURL: "https://tindev-backend-gsantos.herokuapp.com/"
});

export default api;
