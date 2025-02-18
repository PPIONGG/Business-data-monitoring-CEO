import {
  Card,
  Input,
  Button,
  Form,
  Typography,
  Divider,
  message,
  Select,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { api } from "../services/api";

const { Option } = Select;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuthStore();

  const handleLogin = async (values: {
    system: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      // const response = await api.post("/login", values);
      const response = {
        status: 200,
      };

      if (response.status === 200) {
        message.success("เข้าสู่ระบบสำเร็จ");
        checkAuth();
        navigate("/dashboard");
      } else {
        message.error("รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error(`เกิดข้อผิดพลาด: ${error.message}`);
      } else {
        message.error("เกิดข้อผิดพลาดในการเชื่อมต่อ");
      }
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 470,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "#333",
          }}
        >
          Business Data Monitoring for CEO
        </Typography>
        <Form
          onFinish={handleLogin}
          layout="vertical"
          initialValues={{ system: "QERP" }}
        >
          <Form.Item
            name="system"
            rules={[
              {
                required: true,
                message: "กรุณาเลือกชนิดล็อกอิน",
              },
            ]}
            // label={
            //   <span
            //     style={{
            //       color: "#333",
            //       fontSize: "18px",
            //       fontWeight: "bold",
            //     }}
            //   >
            //     ชนิดล็อกอิน
            //   </span>
            // }
          >
            <Select
              style={{
                width: "100%",
                height: "45px",
                fontWeight: "bold",
                color: "#333",
                transition: "all 0.3s ease",
              }}
              className="custom-select"
            >
              <Option value="QERP">QERP</Option>
              <Option value="ฐานข้อมูล">ฐานข้อมูล</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "กรุณากรอกรหัสผู้ใช้" }]}
            style={{ fontWeight: "bold" }}
            // label={
            //   <span
            //     style={{
            //       color: "#333",
            //       fontSize: "18px",
            //       fontWeight: "bold",
            //     }}
            //   >
            //     รหัสผู้ใช้งาน
            //   </span>
            // }
          >
            <Input
              style={{
                border: "1px solid rgba(255, 255, 255, 0)",
                background: "rgb(250, 195, 195)",
                fontSize: "16px",
                fontWeight: "bold",
                height : '45px',
                color: "#333",
                transition: "all 0.3s ease",
              }}
              placeholder="กรุณากรอกอีเมล"
              className="custom-input"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            // label={
            //   <span
            //     style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}
            //   >
            //     รหัสผ่าน
            //   </span>
            // }
            style={{ fontWeight: "bold" }}
            rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
          >
            <Input.Password
              style={{
                border: "1px solid rgba(255, 255, 255, 0)",
                background: "rgb(250, 195, 195)",
                borderRadius: "8px",
                fontSize: "16px",
                height : '45px',
                color: "#333",
                transition: "all 0.3s ease",
              }}
              placeholder="กรุณากรอกรหัสผ่าน"
              className="custom-input"
              autoComplete="off"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{
              borderRadius: "8px",
              height: "48px",
              fontSize: "16px",
              background: "linear-gradient(135deg, #ff4d4d, #ff0000)",
              border: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            เข้าสู่ระบบ
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
