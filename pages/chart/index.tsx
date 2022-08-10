import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import "chart.js/auto";

import { Layout } from "antd";
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);
Chart.register(CategoryScale);
Chart.register(ArcElement);

const ChartJs = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //doughnut chart data set

  const data1 = {
    labels: ["Organic", "Social Media", "Websites"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  //  line
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Looping tension",
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  // config

  const config = {
    type: "line",
    // data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
        },
      },
    },
  };

  return (
    <Layout>
      <h1 style={{ margin: 20 }}>Report</h1>
      <div style={{ height: 300, margin: 50 }}>
        <Line
          data={data}
          // option={config}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div style={{ height: 300, margin: 50 }}>
        <Bar
          data={data}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        ></Bar>
      </div>
      <div style={{ height: 300, margin: 50 }}>
        <Pie
          data={data}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        ></Pie>
      </div>
      <div style={{ height: 300, margin: 50 }}>
        <Doughnut
          data={data1}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        ></Doughnut>
      </div>
      <div style={{ height: 300, margin: 50 }}>
        <Line
          data={data2}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        ></Line>
      </div>
      {/* <canvas id="myChart" width="1000" height="600"></canvas> */}
    </Layout>
  );
};

export default ChartJs;
