import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`;
  return config;
});

export const APIClient = instance;
