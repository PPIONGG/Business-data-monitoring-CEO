import {
  PurchaseBarChart,
  PurchaseDonutChart,
  PurchaseFilters,
  PurchaseHeader,
  PurchaseSummary,
  Top5ProductsBarChart,
  Top5SupplierTable,
} from "../components/purchase";
import { useDashboardHeight } from "../hooks/useDashboardHeight";

export default function PurchaseSummaryPage() {
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
      <PurchaseHeader />
      <PurchaseFilters />
      <PurchaseSummary />
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
          <PurchaseBarChart />
        </div>
        <div
          style={{
            width: "660px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Top5ProductsBarChart />
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
              <PurchaseDonutChart/>
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
              {/* TOP 5 & Table */}
              <Top5SupplierTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
