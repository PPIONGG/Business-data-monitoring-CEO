import { Layout, Typography, Button } from "antd";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { useAuthStore } from "../store/useAuthStore";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = ({
  onMenuClick,
  isMobile,
}: {
  onMenuClick: () => void;
  isMobile: boolean;
}) => {
  const { logout } = useAuthStore();

  return (
    <Header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#c20000",
      padding: "0 20px",
      height: 60,
      zIndex: 1000, 
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)", // ✅ เงาชัดขึ้น
    }}
    >
      <div>
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "20px", color: "white" }} />}
            onClick={onMenuClick}
            style={{ marginRight: "10px", display: "inline-block" }}
          />
        )}
        <Text strong style={{ color: "white", fontSize: "20px" }}>
          Business Data Monitoring for CEO
        </Text>
      </div>

      <Button
        type="text"
        icon={<LogoutOutlined />}
        style={{ color: "white" }}
        onClick={logout}
      />
    </Header>
  );
};

export default AppHeader;