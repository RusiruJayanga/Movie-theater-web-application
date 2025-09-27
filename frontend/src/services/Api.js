import axios from "axios";

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
    `http://localhost:5000/api/contact`,
    userData
  );
  return response.data;
};
