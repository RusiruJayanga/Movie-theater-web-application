import { useQuery } from "@tanstack/react-query";
import { movieDetails } from "../../services/user/Api";

//details hook
export const useMovie = (movieId) => {
  return useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: () => movieDetails(movieId),
    enabled: !!movieId,
  });
};
