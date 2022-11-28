import HomePage from "./HomePage";
import {  useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./../App";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <HomePage /> : <Navigate to="/" replace state={{ from: location }}/>;
};

export default ProtectedRoutes;
