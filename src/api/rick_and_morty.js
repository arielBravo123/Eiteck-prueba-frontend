import axios from "axios";

const url = "https://rickandmortyapi.com/api/";

const api = axios.create({
  baseURL: url,
});

export default api;
