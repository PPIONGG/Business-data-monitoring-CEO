import { Layout, Menu, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  BarChartOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const { Sider } = Layout;

const Sidebar = ({
  isMobile,
  isOpen,
  onClose,
}: {
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const location = useLocation(); // ✅ ดึง Path ปัจจุบัน
  const [selectedKey, setSelectedKey] = useState("1");

  // ✅ อัปเดต Key เมื่อเปลี่ยน Path
  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      "/dashboard/financial": "1",
      "/dashboard/inventory": "2",
      "/dashboard/purchase-summary": "3",
      "/dashboard/sales-summary": "4",
    };
    setSelectedKey(pathMap[location.pathname] || "1");
  }, [location.pathname]);

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "รายงานการเงิน",
      path: "/dashboard/financial",
    },
    {
      key: "2",
      icon: <ShoppingOutlined />,
      label: "สินค้าคงคลัง",
      path: "/dashboard/inventory",
    },
    {
      key: "3",
      icon: <ShoppingCartOutlined />,
      label: "สรุปยอดซื้อ",
      path: "/dashboard/purchase-summary",
    },
    {
      key: "4",
      icon: <BarChartOutlined />,
      label: "สรุปยอดขาย",
      path: "/dashboard/sales-summary",
    },
  ];

  return isMobile ? (
    <Drawer
      title={
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "30px",
              marginRight: "10px",
            }}
          />
          CEO Control Panel
        </span>
      }
      placement="left"
      closable={false}
      width={300}
      onClose={onClose}
      open={isOpen}
      styles={{ body: { padding: 0 } }}
    >
      <Menu
        mode="vertical"
        selectedKeys={[selectedKey]}
        theme="light"
        onClick={onClose}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  ) : (
    <Sider
      width={200}
      style={{
        paddingTop: "10px",
        background: "rgb(255, 255, 255)",
        backdropFilter: "blur(10px)",
        boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
        overflowY: "auto",
        height: "calc(100vh - 60px)",
      }}
    >
      <Menu mode="vertical" selectedKeys={[selectedKey]} theme="light">
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

// import { Layout, Menu, Drawer } from "antd";
// import { Link } from "react-router-dom";
// import {
//   BarChartOutlined,
//   DashboardOutlined,
//   ShoppingCartOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
// import logo from "../assets/logo.svg";

// const { Sider } = Layout;

// const Sidebar = ({
//   isMobile,
//   isOpen,
//   onClose,
// }: {
//   isMobile: boolean;
//   isOpen: boolean;
//   onClose: () => void;
// }) => {

//   const menuItems = [
//     {
//       key: "1",
//       icon: <DashboardOutlined />,
//       label: <Link to="/dashboard/financial">รายงานการเงิน</Link>,
//     },
//     {
//       key: "2",
//       icon: <ShoppingOutlined />,
//       label: <Link to="/dashboard/inventory">สินค้าคงคลัง</Link>,
//     },
//     {
//       key: "3",
//       icon: <ShoppingCartOutlined />,
//       label: <Link to="/dashboard/purchase-summary">สรุปยอดซื้อ</Link>,
//     },
//     {
//       key: "4",
//       icon: <BarChartOutlined />,
//       label: <Link to="/dashboard/sales-summary">สรุปยอดขาย</Link>,
//     },
//   ];

//   return isMobile ? (
//     <Drawer
//       title={
//         <span
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             color: "#333",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             style={{
//               width: "30px",
//               marginRight: "10px",
//             }}
//           />
//           CEO Control Panel
//         </span>
//       }
//       placement="left"
//       closable={false}
//       width={300}
//       onClose={onClose}
//       open={isOpen}
//       styles={{ body: { padding: 0 } }}
//     >
//       <Menu
//         mode="vertical"
//         defaultSelectedKeys={["1"]}
//         items={menuItems}
//         theme="light"
//         onClick={onClose}
//       />
//     </Drawer>
//   ) : (
//     <Sider
//       width={200}
//       style={{
//         paddingTop: "10px",
//         background: "rgb(255, 255, 255)",
//         backdropFilter: "blur(10px)",
//         boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
//         overflowY: "auto",
//         height: "calc(100vh - 60px)",
//       }}
//     >
//       <Menu
//         mode="vertical"
//         defaultSelectedKeys={["1"]}
//         items={menuItems}
//         theme="light"
//       />
//     </Sider>
//   );
// };

// export default Sidebar;
