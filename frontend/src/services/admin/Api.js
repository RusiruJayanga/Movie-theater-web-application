import axios from "axios";

//fetch all users api call
//--
export const fetchUserProfile = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/users/profileinfo"
  );
  return data;
};
//users delete api call
export const deleteUsersProfile = async (userId) => {
  const { data } = await axios.delete(
    `http://localhost:5000/api/users/profiledelete/${userId}`
  );
  return data;
};

//fetch all contact api call
//--
export const fetchContact = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/users/contactinfo"
  );
  return data;
};

//add movie api call
//--
export const addMovie = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const { data } = await axios.post(
    "http://localhost:5000/api/movies/add",
    formData,
    config
  );
  return data;
};
//update movie api call
export const updateMovie = async (values) => {
  const { data } = await axios.put(`http://localhost:5000/api/movies/update`, {
    values,
  });
  return data;
};
//delete movie api call
export const deleteMovie = async (movieId) => {
  const { data } = await axios.delete(
    `http://localhost:5000/api/movies/delete/${movieId}`
  );
  return data;
};

//fetch all sessions api call
//--
export const fetchSessions = async () => {
  const { data } = await axios.get("http://localhost:5000/api/sessions/fetch");
  return data;
};
//reset session api call
export const resetSession = async (sessionId) => {
  const { data } = await axios.put(
    `http://localhost:5000/api/sessions/reset/${sessionId}`
  );
  return data;
};
//delete session api call
export const deleteSession = async (sessionId) => {
  const { data } = await axios.delete(
    `http://localhost:5000/api/sessions/delete/${sessionId}`
  );
  return data;
};

//fetch all bookings api call
//--
export const fetchBookings = async () => {
  const { data } = await axios.get("http://localhost:5000/api/bookings/fetch");
  return data;
};
