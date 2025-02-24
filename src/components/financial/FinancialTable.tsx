import { Table } from "antd";

const columns = [
  { title: "วัน/เดือน/ปี", dataIndex: "date", key: "date" },
  { title: "ยอดสุทธิ", dataIndex: "amount", key: "amount" },
];

const dataSource = [
  { key: "1", date: "1/1/2560", amount: "1.19M" },
  { key: "2", date: "1/2/2560", amount: "859K" },
  { key: "3", date: "1/3/2560", amount: "1.11M" },
  { key: "4", date: "1/4/2560", amount: "786K" },
];

export default function FinancialTable() {
  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
}
