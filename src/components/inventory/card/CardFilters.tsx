import { Select } from "antd";
import { useFinancialStore } from "../../../store/financialStore";

const { Option } = Select;

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

export default function CardFilters() {
  const { month, setMonth } = useFinancialStore();

  return (
    <div>
      <div style={{ fontSize: 14, height: 30 }}>รหัสและชื่อสินค้า</div>
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
        style={{ width: "100%", marginBottom: "10px" }}
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
  );
}
