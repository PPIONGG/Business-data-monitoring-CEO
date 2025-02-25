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
  labels: ["สินค้า A", "สินค้า B", "สินค้า C", "สินค้า D"],
  datasets: [
    {
      data: [9, 5, 4, 3], // ✅ จำนวนสินค้าที่ขายได้
      backgroundColor: ["#C49A4D", "#5DAE94", "#2471A3", "#95637A"], // ✅ สีของแต่ละประเภท
      hoverOffset: 4, // ✅ ขยายเมื่อ Hover
    },
  ],
};

// ✅ Chart Options
const options = {
    responsive: true,
    maintainAspectRatio: false, // ✅ ปรับขนาดให้พอดีกับ div
    plugins: {
      legend: {
        display: false, // ✅ ซ่อน Legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) => {
            const dataset = tooltipItem.dataset.data as number[]; // ✅ ดึงข้อมูลทั้งหมด
            const total = dataset.reduce((acc, value) => acc + value, 0); // ✅ คำนวณผลรวม
            const percentage = ((tooltipItem.raw as number) / total) * 100; // ✅ คำนวณ %
            return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage.toFixed(2)}%)`;
          },
        },
      },
    },
  };

export default function PurchaseDonutChart() {
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
        จำนวนร้อยละยอดซื้อแบ่งตามประเภท
      </div>
      <Doughnut key={chartKey} data={data} options={options} style={{ paddingTop: "30px" }}/>
    </div>
  );
}
