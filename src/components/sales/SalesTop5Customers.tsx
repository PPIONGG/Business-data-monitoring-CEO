import { Table } from "antd";
import { useState, useRef, useEffect } from "react";

const columns = [
  { title: "ลูกค้า", dataIndex: "customer", key: "customer" },
  { title: "รวมสุทธิ", dataIndex: "total", key: "total" },
];

const dataSource = [
  { key: "1", customer: "จัดหางานเพอร์ซันแนล คอนซัลแตนท์", total: "6.38M" },
  { key: "2", customer: "แพนฟู้ด", total: "5.91M" },
  { key: "3", customer: "ไทยแทฟฟ์ด้า", total: "2.23M" },
  { key: "4", customer: "สยามอินเตอร์ล็อคเทค", total: "2.22M" },
  { key: "5", customer: "เฮสเม็ต เดลคี", total: "2.15M" },
];

export default function SalesTop5Customers() {
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
      <div style={{ height: "30px", fontSize: "14px" }}>TOP 5 ลูกค้า</div>
      <Table
        bordered
        sticky
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: tableHeight }} // ✅ ใช้ค่าที่คำนวณได้
      />
    </div>
  );
}
