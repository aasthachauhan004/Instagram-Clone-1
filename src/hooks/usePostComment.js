import { useState } from "react";
import useShowToast from "./useShowToast";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState();
  const showToast = useShowToast();
};
export default usePostComment;
