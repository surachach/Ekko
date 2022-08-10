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
const ExChart = () => {
  return (
    <Layout>
      <h1 style={{ margin: 20 }}>Report</h1>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </Layout>
  );
};

export default ExChart;
