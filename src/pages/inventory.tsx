import { Card } from "antd";
import { useDashboardHeight } from "../hooks/useDashboardHeight";
import { InventoryHeader, InventorySummary } from "../components/inventory";
import {
  CardFilters,
  CardHeader,
  CardTable,
} from "../components/inventory/card";

export default function Inventory() {
  const contentHeight = useDashboardHeight({
    topHeight: 60,
    extraSpacing: 20,
  });

  const cardHeaderHeight = 30; // ความสูงของหัว Card
  const cardFiltersHeight = 72; // ความสูงของ Filter
  const cardPadding = 20; // Padding รวม (top + bottom)
  const summaryHeight = 120; // ความสูงของ InventorySummary
  const pageHeaderHeight = 50; // ความสูงของ InventoryHeader
  const tableHeaderHeight = 30; // ความสูงของ Header ใน Table

  // คำนวณความสูงของ Card
  const cardHeight = contentHeight - pageHeaderHeight - summaryHeight;
  // คำนวณความสูงของ Table
  const contentTable = cardHeight - cardHeaderHeight - cardFiltersHeight - tableHeaderHeight - cardPadding;

  return (
    <div style={{ height: contentHeight }}>
      <InventoryHeader />
      <InventorySummary />
      <Card
        styles={{ body: { padding: 10 } }}
        style={{
          height: `${cardHeight}px`,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardHeader />
        <CardFilters />
        <CardTable height={contentTable} />
      </Card>
    </div>
  );
}
