import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/Header";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      if (window.innerWidth >= 1200) {
        setIsSidebarOpen(false); // ปิด Sidebar ถ้าหน้าจอขยายขึ้น
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppHeader onMenuClick={() => setIsSidebarOpen(true)} isMobile={isMobile} />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <Sidebar
          isMobile={isMobile}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            backgroundColor: "rgb(236, 236, 236)",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
