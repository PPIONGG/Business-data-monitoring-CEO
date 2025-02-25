import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ✅ ลงทะเบียน Chart.js Modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ✅ ข้อมูลของ Sales Bar Chart
const data: ChartData<"bar"> = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    { label: "2017", backgroundColor: "#5D8896", data: [6.12, 0, 0, 0, 0, 0, 0, 0, 0] },
    { label: "2018", backgroundColor: "#C44D4D", data: [0, 12.6, 0, 0, 0, 0, 0, 0, 0] },
    { label: "2019", backgroundColor: "#C49A4D", data: [0, 0, 14.3, 0, 0, 0, 0, 0, 0] },
    { label: "2020", backgroundColor: "#95637A", data: [0, 0, 0, 14.7, 0, 0, 0, 0, 0] },
    { label: "2021", backgroundColor: "#7A9563", data: [0, 0, 0, 0, 16.7, 0, 0, 0, 0] },
    { label: "2022", backgroundColor: "#6C5B7B", data: [0, 0, 0, 0, 0, 18.6, 0, 0, 0] },
    { label: "2023", backgroundColor: "#4C5B8B", data: [0, 0, 0, 0, 0, 0, 18.2, 0, 0] },
    { label: "2024", backgroundColor: "#C05B8B", data: [0, 0, 0, 0, 0, 0, 0, 13.5, 0] },
    { label: "2025", backgroundColor: "#A9A94D", data: [0, 0, 0, 0, 0, 0, 0, 0, 1.76] },
  ],
};

// ✅ Chart Options (ปรับแต่ง Label บนแท่งและแกน Y)
const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false, // ✅ ให้ Chart ปรับขนาดตาม Container
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.raw}M`;
        },
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (value) => `${value}M`, // ✅ แสดงหน่วยเป็น M
      },
    },
  },
};

export default function SalesBarChart() {
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
      <Bar key={chartKey} data={data} options={options} />
    </div>
  );
}
