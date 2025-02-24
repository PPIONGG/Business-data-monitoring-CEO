import { Card, Row, Col } from "antd";

const summaryData = [
  { label: "ค่าใช้จ่าย", value: "116M" },
  { label: "ทุน", value: "-279M" },
  { label: "รายได้", value: "115M" },
];

export default function FinancialSummary() {
  return (
    <Row gutter={16} >
      {summaryData.map((item, index) => (
        <Col key={index} span={8}>
          <Card style={{ textAlign: "center", fontSize: 20 }}>
            <div>{item.value}</div>
            <div style={{ fontSize: 16, color: "gray" }}>{item.label}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
