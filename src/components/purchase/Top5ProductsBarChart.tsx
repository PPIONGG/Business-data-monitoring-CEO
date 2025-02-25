import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ✅ ลงทะเบียน Chart.js Modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ✅ ข้อมูลสำหรับ Chart
const data = {
  labels: [
    "เครื่องสแกนบาร์โค้ด 4",
    "SERVER 1",
    "เครื่องสแกนบาร์โค้ด 2",
    "เครื่องสแกนบาร์โค้ด 5",
    "PRINTER 3",
  ],
  datasets: [
    {
      label: "ยอดขาย",
      backgroundColor: ["#d9534f", "#5D577F", "#5DAE94", "#F5B041", "#2471A3"],
      data: [3, 3, 2, 1.5, 1], // ✅ กำหนดยอดขายสินค้า
    },
  ],
};

// ✅ Chart Options
const options = {
  responsive: true,
  maintainAspectRatio: false, // ✅ ปิดอัตราส่วนคงที่
  indexAxis: "y" as const, // ✅ เปลี่ยนเป็น Horizontal Bar
  plugins: {
    legend: { display: false }, // ✅ ซ่อน Legend
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        stepSize: 1, // ✅ ให้แสดงค่าทีละ 1
      },
    },
  },
};

export default function Top5ProductsBarChart() {
  // ✅ ใช้ state `chartKey` เพื่อบังคับให้ Chart รีเฟรช
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    // ✅ ฟังก์ชันจับ Event Resize และบังคับให้ Chart รีเฟรช
    const handleResize = () => {
      setChartKey((prevKey) => prevKey + 1); // ✅ เปลี่ยนค่า `key` เพื่อให้ Chart รีเฟรช
    };

    window.addEventListener("resize", handleResize); // ✅ ดักจับ Resize

    return () => window.removeEventListener("resize", handleResize); // ✅ Cleanup
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          fontSize: 14,
        }}
      >
        Top 5 สินค้า
      </div>
      <Bar
        key={chartKey}
        data={data}
        options={options}
        style={{ paddingTop: "30px" }}
      />
    </div>
  );
}
