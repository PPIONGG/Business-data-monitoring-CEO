import { Select, Row, Col } from "antd";
import { useFinancialStore } from "../../store/financialStore";

const { Option } = Select;

const years = Array.from({ length: 50 }, (_, i) => (2024 - i).toString());
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function PurchaseFilters() {
    const { year, month, setYear, setMonth } = useFinancialStore();

    return (
      <Row gutter={16} style={{ marginBottom: "10px" }}>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>ปี</div>
            <Select
              mode="multiple"
              value={year.includes("All") ? ["All"] : year}
              onChange={(selected) => {
                if (selected.includes("All")) {
                  setYear(["All", ...years]);
                } else {
                  setYear(selected);
                }
              }}
              style={{ width: "100%" }}
              optionLabelProp="label"
              maxTagCount="responsive"
            >
              <Option key="All" value="All">
                All
              </Option>
              {years.map((y) => (
                <Option key={y} value={y} label={y}>
                  {y}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>เดือน</div>
            <Select
              mode="multiple"
              value={month.includes("All") ? ["All"] : month}
              onChange={(selected) => {
                if (selected.includes("All")) {
                  setMonth(["All", ...months]);
                } else {
                  setMonth(selected);
                }
              }}
              style={{ width: "100%" }}
              optionLabelProp="label"
              maxTagCount="responsive"
            >
              <Option key="All" value="All">
                All
              </Option>
              {months.map((m) => (
                <Option key={m} value={m} label={m}>
                  {m}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px",minWidth:"113px"}}>วันที่แบบกำหนดเอง</div>
            <Select
              mode="multiple"
              value={month.includes("All") ? ["All"] : month}
              onChange={(selected) => {
                if (selected.includes("All")) {
                  setMonth(["All", ...months]);
                } else {
                  setMonth(selected);
                }
              }}
              style={{ width: "100%" }}
              optionLabelProp="label"
              maxTagCount="responsive"
            >
              <Option key="All" value="All">
                All
              </Option>
              {months.map((m) => (
                <Option key={m} value={m} label={m}>
                  {m}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
      </Row>
    );
}
