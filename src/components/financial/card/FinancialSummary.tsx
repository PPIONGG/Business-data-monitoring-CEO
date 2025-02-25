import { Card, Row, Col } from "antd";

const summaryData = [
  { label: "ค่าใช้จ่าย", value: "116M" },
  { label: "ทุน", value: "-279M" },
  { label: "รายได้", value: "115M" },
];

export default function FinancialSummary() {
  return (
    <Row gutter={10}>
      {summaryData.map((item, index) => (
        <Col key={index} span={8}>
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
