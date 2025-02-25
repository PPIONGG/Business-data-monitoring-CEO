import { Table } from "antd";

// ✅ Mock Data (ข้อมูลตัวอย่าง)
const dataSource = [
  { key: "1", supplier: "อีไลฟ์ ซีสเต็มส์", amount: 153000 },
  { key: "2", supplier: "เจทคอม", amount: 32100 },
  { key: "3", supplier: "อีลอสเอส ซันเทค", amount: 5800 },
];

// ✅ คอลัมน์ของตาราง
const columns = [
  {
    title: "ชื่อบริษัท",
    dataIndex: "supplier",
    key: "supplier",
  },
  {
    title: "ยอดรวมสุทธิ",
    dataIndex: "amount",
    key: "amount",
    align: "right" as const, // ✅ ชิดขวา
    render: (value: number) => `${(value / 1000).toFixed(1)}K`, // ✅ แสดงค่าเป็น K
  },
];

export default function Top5SupplierTable() {
  return (
    <div style={{ background: "white"}}>
      <div style={{height: "30px", fontSize: "14px" }}>TOP 5 SUPPLIER</div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false} // ✅ ไม่ใช้ pagination
        size="small" // ✅ ตารางขนาดเล็ก
        bordered // ✅ เพิ่มเส้นขอบ
      />
    </div>
  );
}
