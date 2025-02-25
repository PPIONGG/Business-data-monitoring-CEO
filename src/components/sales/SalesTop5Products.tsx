import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useEffect, useState } from "react";
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

// ✅ ข้อมูลของ Bar Chart
const data = {
  labels: ["CUSTOMIZE", "MA", "ADD FEATURE", "Q-ERP/XT", "I"],
  datasets: [
    {
      label: "ยอดขาย",
      backgroundColor: ["#4C5B8B", "#95637A", "#C44D4D", "#7A9563", "#C49A4D"],
      data: [643, 553, 323, 213, 139],
    },
  ],
};

// ✅ Chart Options
const options: ChartOptions<"bar"> = {
  indexAxis: "y", // ✅ เปลี่ยนเป็น bar แนวนอน
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // ✅ ซ่อน legend
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          // ✅ ใช้ explicit typing แทน `any`
          const value = tooltipItem.raw as number;
          return `${value.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        callback: (value) => {
          // ✅ เปลี่ยน Type จาก `number` เป็น `TickOptions["callback"]`
          return `${value}`;
        },
      },
    },
  },
};

export default function SalesTop5Products() {
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
