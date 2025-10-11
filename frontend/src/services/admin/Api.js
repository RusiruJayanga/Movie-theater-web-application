import axios from "axios";

//users api call
export const fetchUserProfile = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/users/profileinfo"
  );
  return data;
};

//account api call
export const fetchContact = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/users/contactinfo"
  );
  return data;
};
