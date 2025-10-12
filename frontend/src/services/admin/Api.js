import axios from "axios";

//users api call
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

//contact api call
export const fetchContact = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/users/contactinfo"
  );
  return data;
};

//movies api call
export const addMovie = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const { data } = await axios.post(
    "http://localhost:5000/api/movies/addmovie",
    formData,
    config
  );
  return data;
};
