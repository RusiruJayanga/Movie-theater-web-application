import axios from "axios";

//movies api call
export const fetchMovies = async () => {
  const { data } = await axios.get("http://localhost:5000/api/movies/fetch");
  return data;
};
