import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      
    },
    title: {
      display: true,
    },
  },
};
 
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const numArray = [12, 12, 10, 10, 10,9,12];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "",
      data: numArray.map((item) => item),
      borderColor: "#1a9da6",
      backgroundColor: "rgba(236, 236, 236, 0.6)",
    },
  ],
};

export default function ChartSection() {
  return (
    <>
      <Line width={600} options={options} data={data} />
    </>
  );
}
