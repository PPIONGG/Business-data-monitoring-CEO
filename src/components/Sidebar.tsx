import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  DashboardOutlined,
  BarChartOutlined,
  StockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "../store/useAuthStore";

const { Sider } = Layout;

const Sidebar = () => {
  const { logout } = useAuthStore();

  // ✅ ใช้ useMemo เพื่อป้องกัน Re-render ของเมนูโดยไม่จำเป็น
  const menuItems = useMemo(
    () => [
      {
        key: "1",
        icon: <DashboardOutlined />,
        label: <Link to="/dashboard/financial">รายการการเงิน</Link>,
      },
      {
        key: "2",
        icon: <StockOutlined />,
        label: <Link to="/dashboard/inventory">สินค้าคงคลัง</Link>,
      },
      {
        key: "3",
        icon: <BarChartOutlined />,
        label: <Link to="/dashboard/summary">สรุปยอดรวม</Link>,
      },
      {
        key: "4",
        icon: <LogoutOutlined />,
        label: "Logout",
        onClick: logout, // ✅ ใช้ onClick ใน items
      },
    ],
    [logout]
  );

  return (
    <Sider width={200} style={{ height: "100vh", position: "fixed", left: 0 }}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
    </Sider>
  );
};

export default Sidebar;
