import axios from "axios";

//token api call
const API = axios.create({ baseURL: "http://localhost:5000/api/user/" });
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

//signup api call
export const signup = async (userData) => {
  const response = await axios.post(
    `http://localhost:5000/api/auth/signup`,
    userData
  );
  return response.data;
};

//login api call
export const login = async (userData) => {
  const response = await axios.post(
    `http://localhost:5000/api/auth/login`,
    userData
  );
  return response.data;
};

//contact api call
export const contact = async (userData) => {
  const response = await axios.post(
    `http://localhost:5000/api/user/contact`,
    userData
  );
  return response.data;
};

//account api call
//fetch
export const fetchUserProfile = async () => {
  const { data } = await API.get("http://localhost:5000/api/user/profile");
  return data;
};

//movie details api call
export const movieDetails = async (movieId) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/movies/details/${movieId}`
  );
  return data;
};

//movie ratings api call
export const getMovieWithRatings = async (movieId) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/movies/rating/${movieId}`
  );
  return data;
};

//interest api call
export const addUserInterests = async (interests) => {
  const { data } = await API.post(
    "http://localhost:5000/api/user/interestadd",
    interests
  );
  return data;
};
//fetch
export const getUserInterests = async () => {
  const { data } = await API.get(
    `http://localhost:5000/api/user/interestfetch`
  );
  return data;
};

//showtime api call
export const showTimeDetails = async (movieId) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/movies/showtimedetails/${movieId}`
  );
  return data;
};

//booking api call
export const addBooking = async (bookingDetails) => {
  const { data } = await API.post(
    "http://localhost:5000/api/user/bookingadd",
    bookingDetails
  );
  return data;
};
//fetch
export const getUserTickets = async () => {
  const { data } = await API.get(`http://localhost:5000/api/user/ticketfetch`);
  return data;
};
