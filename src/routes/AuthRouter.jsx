import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Benevits, MyBenevits } from "../pages";
import { useAuth } from "../hooks/useAuth";

export function AuthRoutes() {
  const { status, checkAuthToken } = useAuth();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Benevits />} />
          <Route path="/my-benevits" element={<MyBenevits />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
