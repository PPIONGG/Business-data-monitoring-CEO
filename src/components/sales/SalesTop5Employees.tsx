import { Table } from "antd";
import { useState, useRef, useEffect } from "react";

const columns = [
  { title: "พนักงานขาย", dataIndex: "name", key: "name" },
  { title: "ยอดขาย", dataIndex: "sales", key: "sales" },
];

const dataSource = [
  { key: "1", name: "รัฐธุรกิจดี", sales: "46.7M" },
  { key: "2", name: "พัชริพร", sales: "23M" },
  { key: "3", name: "Support Services", sales: "20.4M" },
  { key: "4", name: "ณัฐธุรกิจดี", sales: "15.5M" },
  { key: "5", name: "อื่นๆ", sales: "7.08M" },
];

export default function SalesTop5Employees() {
    const [tableHeight, setTableHeight] = useState<number>(200);
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const updateHeight = () => {
        if (containerRef.current) {
          const containerHeight = containerRef.current.clientHeight;
          const headerHeight = 30; // ความสูงของหัวข้อ "TOP 5 ลูกค้า"
          const padding = 10; // Padding ของ Card
          setTableHeight(containerHeight - headerHeight - padding);
        }
      };
  
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "30px", fontSize: "14px" }}>TOP 5 พนักงานตามยอดขาย</div>
      <Table bordered sticky columns={columns} dataSource={dataSource} pagination={false} scroll={{ y: tableHeight }}/>
    </div>
  );
}
