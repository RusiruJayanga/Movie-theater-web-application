import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMovie, updateMovie, deleteMovie } from "../../services/admin/Api";
import { toast } from "react-toastify";

//add movie hook
export const useAddMovie = () => {
  return useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      toast.success("Movie added successfully !");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Upload failed !");
    },
  });
};

//update movie hook
export const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      toast.success("Movie updated successfully !");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Update failed !");
    },
  });
};

//delete movie hook
export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      toast.success("Movie deleted successfully !");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Delete failed !");
    },
  });
};
