import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function SalesHeader() {
  return (
    <div
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 16 }}>สรุปยอดขาย</div>
      <Button
        type="primary"
        icon={<UploadOutlined />}
        size="middle"
        danger
      ></Button>
    </div>
  );
}
