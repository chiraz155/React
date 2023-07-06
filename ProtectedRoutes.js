import { Navigate, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from "react-router-dom";
function ProtectedRoutes() {
const useAuth = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true';
};

const ProtectedRoute = ({ path, element }) => {
  const isAuth = useAuth();

  return isAuth ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};
}



export default ProtectedRoutes;