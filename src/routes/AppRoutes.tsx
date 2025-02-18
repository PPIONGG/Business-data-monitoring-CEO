import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";

import DashboardLayout from "../layouts/DashboardLayout";
import Financial from "../pages/Financial";
// import Inventory from "../pages/Inventory";
// import Summary from "../pages/Summary";
import { useAuthStore } from "../store/useAuthStore";
import { JSX } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="financial" element={<Financial />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
