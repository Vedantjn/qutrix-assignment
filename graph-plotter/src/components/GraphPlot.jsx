import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphPlot = ({ data }) => {
  const allXValues = Array.from(new Set(data.flatMap(dataset => dataset.xAxis)));

  const chartData = {
    labels: allXValues,
    datasets: data.map((dataset, index) => {
      const yValues = allXValues.map(xValue => {
        const index = dataset.xAxis.indexOf(xValue);
        return index !== -1 ? dataset.yAxis[index] : null;
      });

      return {
        label: dataset.label || `Dataset ${index + 1}`,
        data: yValues,
        fill: false,
        backgroundColor: `rgba(${75 + index * 40}, ${192 - index * 40}, 192, 0.4)`,
        borderColor: `rgba(${75 + index * 40}, ${192 - index * 40}, 192, 1)`,
        pointBackgroundColor: `rgba(${255 - index * 40}, 99, 132, 1)`,
        pointBorderColor: `rgba(${255 - index * 40}, 99, 132, 1)`,
        pointRadius: 5,
        pointHoverRadius: 7,
      };
    }),
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'X-Axis',
        },
        ticks: {
          beginAtZero: true,
        },
        min: 0, 
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Y-Axis',
        },
        ticks: {
          beginAtZero: true,
        },
        min: 0,  
      },
    },
    maintainAspectRatio: false, 
  };
  
  

  return <Line data={chartData} options={options} />;
};

export default GraphPlot;
