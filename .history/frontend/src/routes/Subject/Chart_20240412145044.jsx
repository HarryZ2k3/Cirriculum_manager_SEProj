import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Revenue',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

const labels = ["semester 1", "semester 2", "semester 3", "semester 4",];

function RenderLineChart(props) {
 
    // const { data } = props
    const [data, setData] = useState([
        {
            label: 'Inclass',
            data: [125, 139, 332, 53, 253, 323],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },
          {
            label: "Mid",
            data: [40, 50, 36, 52, 91, 120],
            borderColor: 'rgb(71, 163, 243)',
            backgroundColor: 'rgba(38, 98, 226, 0.5)',
            yAxisID: 'y1',
          },
          {
            label: "Final",
            data: [10, 60, 36, 52, 91, 120],
            borderColor: 'rgb(71, 163, 243)',
            backgroundColor: 'rgba(38, 98, 226, 0.5)',
            yAxisID: 'y2',
          },
    ]) 


    const chartData = {
        labels,
        datasets: data
      };

  return <Line
    options={options}
    data={chartData}
    />
}

export default RenderLineChart;
