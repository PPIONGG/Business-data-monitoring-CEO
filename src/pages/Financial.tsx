import { FinancialFilters, FinancialHeader } from "../components/financial";
import { useDashboardHeight } from "../hooks/useDashboardHeight";
import { Card } from "antd";
import {
  CardHeader,
  FinancialSummary,
  FinancialChart,
  FinancialTable,
} from "../components/financial/card";

export default function Financial() {
  const contentHeight = useDashboardHeight({
    topHeight: 60,
    extraSpacing: 20,
  });

  // 🔹 กำหนดค่าความสูงของแต่ละส่วน
  const pageHeaderHeight = 50; // ความสูงของ Header หน้า
  const filtersHeight = 42; // ความสูงของตัวกรอง
  const cardHeaderHeight = 40; // ความสูงของ Header ภายใน Card
  const summaryHeight = 120; // ความสูงของ Summary
  const tableHeaderHeight = 30; // ความสูงของ Table Header
  const cardPadding = 20; // รวม paddingTop + paddingBottom

  // 🔹 คำนวณความสูงของ Card
  const cardHeight = contentHeight - pageHeaderHeight - filtersHeight;

  // 🔹 คำนวณความสูงของ Chart และ Table
  const contentChart =
    cardHeight - cardHeaderHeight - summaryHeight - cardPadding;
  const contentTable =
    cardHeight - cardHeaderHeight - tableHeaderHeight - cardPadding;

  return (
    <div id="financial-report" style={{ height: contentHeight }}>
      <FinancialHeader />
      <FinancialFilters />
      <Card
        styles={{ body: { padding: 10 } }}
        style={{
          height: `${cardHeight}px`,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardHeader />
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <FinancialSummary />
            <FinancialChart height={contentChart} />
          </div>

          <div style={{ width: 265 }}>
            <FinancialTable height={contentTable} />
          </div>
        </div>
      </Card>
    </div>
  );
}
