import React from "react";
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

// ✅ ลงทะเบียน Chart.js components (จำเป็น!)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  datasets: [
    { label: "ค่าใช้จ่าย", backgroundColor: "#4b89dc", data: [10, 12, 15, 18, 20, 22, 25, 30] },
    { label: "ทุน", backgroundColor: "#d9534f", data: [-5, -7, -10, -15, -20, -25, -30, -35] },
    { label: "รายได้", backgroundColor: "#f0ad4e", data: [8, 10, 12, 14, 18, 22, 25, 28] },
  ],
};

export default function FinancialChart() {
  return (
    <div >
      <Bar data={data} />
    </div>
  );
}
