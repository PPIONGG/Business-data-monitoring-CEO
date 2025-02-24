import {
  FinancialFilters,
  FinancialSummary,
  FinancialChart,
  FinancialTable,
} from "../components/financial";

export default function Financial() {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          fontSize: 16,
        }}
      >
        รายงานการเงิน
      </div>
      <FinancialFilters />
      <FinancialSummary />
      <FinancialChart />
      <FinancialTable />
    </div>
  );
}
