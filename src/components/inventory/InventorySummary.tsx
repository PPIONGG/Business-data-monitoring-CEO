import { Card, Row, Col } from "antd";

const summaryData = [
  { label: "สินค้าคงคลัง", value: "5.12K" },
  { label: "สินค้าออก", value: "0" },
  { label: "ยอดระหว่างส่ง", value: "0" },
  { label: "จำนวนขายรวม", value: "5.16K" },
];

export default function InventorySummary() {
  return (
    <Row gutter={10} style={{ marginBottom: "10px" }}>
      {summaryData.map((item, index) => (
        <Col key={index} span={6}>
          <Card
            styles={{ body: { padding: 0 } }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
              height: "110px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>{item.value}</div>
              <div style={{ fontSize: 16, color: "gray" }}>{item.label}</div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
