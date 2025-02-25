import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["2018", "2019", "2020", "2021", "2022"],
  datasets: [
    { label: "2018", backgroundColor: "#5D8896", data: [150000, 0, 0, 0, 0] },
    { label: "2019", backgroundColor: "#C44D4D", data: [0, 10000, 0, 0, 0] },
    { label: "2020", backgroundColor: "#C49A4D", data: [0, 0, 15000, 0, 0] },
    { label: "2021", backgroundColor: "#95637A", data: [0, 0, 0, 25000, 0] },
    { label: "2022", backgroundColor: "#7A9563", data: [0, 0, 0, 0, 10000] },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" as const },
  },
  scales: {
    y: {
      ticks: {
        callback: (value: unknown) => `${Number(value) / 1000}K`, // ✅ แปลงเป็น Number
      },
    },
  },
};

export default function PurchaseBarChart() {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setChartKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ height: "100%", width: "100%", }}>
      <Bar key={chartKey} data={data} options={options} />
    </div>
  );
}
