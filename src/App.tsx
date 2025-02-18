import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // ✅ ตรวจสอบ Token เมื่อเปิดเว็บ    
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
