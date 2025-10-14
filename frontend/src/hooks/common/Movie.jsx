import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../services/common/Api";

//movies hook
export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    retry: false,
  });
};
