import {
  SalesBarChart,
  SalesDonutChart,
  SalesFilters,
  SalesHeader,
  SalesSummary,
  SalesTop5Customers,
  SalesTop5Products,
} from "../components/sales";
import SalesTop5Employees from "../components/sales/SalesTop5Employees";
import { useDashboardHeight } from "../hooks/useDashboardHeight";

export default function SalesSummaryPage() {
  const contentHeight = useDashboardHeight({
    topHeight: 60,
    extraSpacing: 20,
  });

  return (
    <div
      style={{
        height: contentHeight,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SalesHeader />
      <SalesFilters />
      <SalesSummary />
      <div style={{ display: "flex", gap: "10px", flex: 1 }}>
        <div
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <SalesBarChart />
        </div>
        <div
          style={{
            width: "660px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ flex: 1, display: "flex", gap: "10px" }}>
            <div
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <SalesTop5Products/>
            </div>
            <div
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <SalesDonutChart/>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", gap: "10px" }}>
            <div
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <SalesTop5Employees/>
            </div>
            <div
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <SalesTop5Customers/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
