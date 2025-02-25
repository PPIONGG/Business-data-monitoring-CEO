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
import SalesSummaryPage from "../pages/sales-summary";
import Financial from "../pages/Financial";
import Login from "../pages/Login";
import PurchaseSummaryPage from "../pages/purchase-summary";

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
          <Route path="purchase-summary" element={<PurchaseSummaryPage />} />
          <Route path="sales-summary" element={<SalesSummaryPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
