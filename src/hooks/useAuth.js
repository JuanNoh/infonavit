import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth";
import { loginApi } from "../apis";

export function useAuth() {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const result = await loginApi({ email, password });
      localStorage.setItem("token", result.headers.authorization);
      if (result.status === 200) dispatch(onLogin(result));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };
  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      startLogout();
    }
  };

  return {
    //
    errorMessage,
    status,
    user,
    //
    checkAuthToken,
    startLogin,
    startLogout,
  };
}
