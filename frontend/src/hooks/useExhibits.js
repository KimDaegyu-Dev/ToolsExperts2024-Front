import { useMutation } from "react-query";
import { getExhibits } from "../api/exhibit";

export default function useExhibits() {
  const mutation = useMutation(getExhibits, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutation;
}
