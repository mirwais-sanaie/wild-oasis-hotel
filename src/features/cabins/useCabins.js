import { useQuery } from "@tanstack/react-query";
import { getCabnis } from "../../services/apiCabnis";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabnis,
  });

  return {
    isLoading,
    cabins,
    error,
  };
}
