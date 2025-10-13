import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../services/common/Api";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    retry: false,
  });
};
