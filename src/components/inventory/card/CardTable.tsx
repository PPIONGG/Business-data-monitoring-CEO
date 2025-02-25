import { Table } from "antd";

const columns = [
  { title: "สินค้า", dataIndex: "product", key: "product" },
  { title: "ยอดยกมา", dataIndex: "balance", key: "balance" },
  { title: "สินค้าเข้า", dataIndex: "import", key: "import" },
  { title: "สินค้าออก", dataIndex: "export", key: "export" },
  { title: "ยอดระหว่างส่ง", dataIndex: "transit", key: "transit" },
  { title: "จำนวนขายได้", dataIndex: "sales", key: "sales" },
];

const dataSource = [
  {
    key: "1",
    product: "สินค้า 1",
    balance: "0.00",
    import: "700.00",
    export: "0.00",
    transit: "0.00",
    sales: "700.00",
  },
  {
    key: "2",
    product: "สินค้า 2",
    balance: "0.00",
    import: "6.00",
    export: "0.00",
    transit: "0.00",
    sales: "6.00",
  },
  {
    key: "3",
    product: "สินค้า 3",
    balance: "0.00",
    import: "90.00",
    export: "0.00",
    transit: "0.00",
    sales: "90.00",
  },
  {
    key: "4",
    product: "สินค้า 4",
    balance: "0.00",
    import: "100.00",
    export: "0.00",
    transit: "0.00",
    sales: "100.00",
  },
  {
    key: "5",
    product: "สินค้า 5",
    balance: "30.00",
    import: "1000.00",
    export: "0.00",
    transit: "0.00",
    sales: "1000.00",
  },
  {
    key: "6",
    product: "สินค้า 1",
    balance: "0.00",
    import: "700.00",
    export: "0.00",
    transit: "0.00",
    sales: "700.00",
  },
  {
    key: "7",
    product: "สินค้า 2",
    balance: "0.00",
    import: "6.00",
    export: "0.00",
    transit: "0.00",
    sales: "6.00",
  },
  {
    key: "8",
    product: "สินค้า 3",
    balance: "0.00",
    import: "90.00",
    export: "0.00",
    transit: "0.00",
    sales: "90.00",
  },
  {
    key: "9",
    product: "สินค้า 4",
    balance: "0.00",
    import: "100.00",
    export: "0.00",
    transit: "0.00",
    sales: "100.00",
  },
  {
    key: "10",
    product: "สินค้า 5",
    balance: "30.00",
    import: "1000.00",
    export: "0.00",
    transit: "0.00",
    sales: "1000.00",
  },
];

interface Props {
  height: number;
}
export default function CardTable({ height }: Props) {
  return (
    <div>
      <div style={{ fontSize: 14, height: 30 }}>รายละเอียด</div>
      <Table
        sticky
        style={{ height: `${height}px` }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: height - 55 }}
      />
    </div>
  );
}
