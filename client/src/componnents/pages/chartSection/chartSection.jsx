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
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const numArray = [0, 1, 2, 3, 4, 5, 6];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: " ",
      data: numArray.map((item) => item),
      //   borderColor: 'rgb(53, 162, 235)',
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function ChartSection() {
  return (
    <div className=" flex justify-center h-72 ">
      <Line options={options} data={data} />
    </div>
  );
}
