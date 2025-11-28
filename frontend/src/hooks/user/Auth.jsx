import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/user/Api";
import { login } from "../../services/user/Api";
import { toast } from "react-toastify";

//signup hook
export const useSignup = (onSuccessCallback) => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      toast.success("Signup successful");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Signup failed !");
    },
  });
};

//login hook
export const useLogin = (onSuccessCallback) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("Login successful");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Login failed !");
    },
  });
};

//logout function
export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully");
};
