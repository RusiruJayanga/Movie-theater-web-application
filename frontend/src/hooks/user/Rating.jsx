import { useQuery } from "@tanstack/react-query";
import { getMovieWithRatings } from "../../services/user/Api";

//ratings hook
export const useMovieWithRatings = (movieId) => {
  return useQuery({
    queryKey: ["movieRatings", movieId],
    queryFn: () => getMovieWithRatings(movieId),
    enabled: !!movieId,
  });
};
