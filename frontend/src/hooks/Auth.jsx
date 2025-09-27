import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/Api";
import { login } from "../services/Api";
import { toast } from "react-toastify";

//signup hook
export const useSignup = (onSuccessCallback) => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success("Signup successful !");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong !");
    },
  });
};

//login hook
export const useLogin = (onSuccessCallback) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("Login successful !");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong !");
    },
  });
};

//logout function
export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully !");
  window.location.href = "/";
};
