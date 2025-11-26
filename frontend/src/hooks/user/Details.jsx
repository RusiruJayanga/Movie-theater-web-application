import { useQuery } from "@tanstack/react-query";
import { movieDetails } from "../../services/user/Api";

//fetch movie details hook
export const useMovie = (movieId) => {
  return useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: () => movieDetails(movieId),
    enabled: !!movieId,
  });
};
