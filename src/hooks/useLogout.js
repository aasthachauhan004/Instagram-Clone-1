import { auth } from "../Firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);

  const ShowToast = useShowToast();

  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      ShowToast("Error", error.message, "error");
    }
  };
  return { handleLogout, isLoggingOut, error };
};
export default useLogout;
