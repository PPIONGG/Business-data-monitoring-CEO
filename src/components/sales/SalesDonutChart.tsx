import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// ✅ ลงทะเบียน Chart.js Modules
ChartJS.register(ArcElement, Tooltip, Legend);

// ✅ ข้อมูลของ Donut Chart
const data = {
  labels: ["บริการ", "สินค้า"],
  datasets: [
    {
      data: [99.71, 0.29], // ✅ แสดงเปอร์เซ็นต์
      backgroundColor: ["#5A77D4", "#C49A4D"], // ✅ สีของแต่ละประเภท
      hoverOffset: 4, // ✅ ขยายเมื่อ Hover
    },
  ],
};

// ✅ Chart Options
const options = {
  responsive: true,
  maintainAspectRatio: false, // ✅ ปรับขนาดให้พอดีกับ div
  plugins: {
    legend: { position: "top" as const },

    tooltip: {
      callbacks: {
        label: (tooltipItem: TooltipItem<"doughnut">) => {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

export default function SalesDonutChart() {
  // ✅ ใช้ state `chartKey` เพื่อบังคับให้ Chart รีเฟรชเมื่อหน้าจอเปลี่ยนขนาด
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setChartKey((prevKey) => prevKey + 1); // ✅ เปลี่ยนค่า `key` เพื่อให้ Chart รีเฟรช
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          fontSize: 14,
        }}
      >
        ยอดขายแยกตามประเภทสินค้า
      </div>
      <Doughnut
        key={chartKey}
        data={data}
        options={options}
        style={{ paddingTop: "30px" }}
      />
    </div>
  );
}
