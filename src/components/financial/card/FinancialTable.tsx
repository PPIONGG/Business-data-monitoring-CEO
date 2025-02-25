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
  { key: "5", date: "1/1/2560", amount: "1.19M" },
  { key: "6", date: "1/2/2560", amount: "859K" },
  { key: "7", date: "1/3/2560", amount: "1.11M" },
  { key: "8", date: "1/4/2560", amount: "786K" },
  { key: "11", date: "1/1/2560", amount: "1.19M" },
  { key: "21", date: "1/2/2560", amount: "859K" },
  { key: "31", date: "1/3/2560", amount: "1.11M" },
  { key: "41", date: "1/4/2560", amount: "786K" },
  { key: "51", date: "1/1/2560", amount: "1.19M" },
  { key: "61", date: "1/2/2560", amount: "859K" },
  { key: "71", date: "1/3/2560", amount: "1.11M" },
  { key: "81", date: "1/4/2560", amount: "786K" },
];

interface Props {
  height: number;
}

export default function FinancialTable({ height }: Props) {
  return (
    <div style={{ height: `${height}px` }}>
      <Table
        bordered
        sticky
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: height - 55 }}
      />
    </div>
  );
}
