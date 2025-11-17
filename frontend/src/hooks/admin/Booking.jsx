import { useQuery } from "@tanstack/react-query";
import { fetchBookings } from "../../services/admin/Api";

//bookings hook
export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
    retry: false,
  });
};
