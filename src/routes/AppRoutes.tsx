import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAuthStore } from "../store/useAuthStore";
import { JSX } from "react";
import Inventory from "../pages/inventory";
import PurchaseSummary from "../pages/purchase-summary";
import SalesSummary from "../pages/sales-summary";
import Financial from "../pages/financial";
import Login from "../pages/login";

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
          <Route path="inventory" element={<Inventory />} />
          <Route path="purchase-summary" element={<PurchaseSummary />} />
          <Route path="sales-summary" element={<SalesSummary />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
