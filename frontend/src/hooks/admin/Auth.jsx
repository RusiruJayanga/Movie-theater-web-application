import { toast } from "react-toastify";

//logout function
export const logout = () => {
  localStorage.removeItem("admin");
  toast.success("Logged out successfully !");
};
