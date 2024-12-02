import axios from "axios";

const baseURL = "http://3.34.70.33:3001/api";

const client = axios.create({
  baseURL,
});

export default client;
