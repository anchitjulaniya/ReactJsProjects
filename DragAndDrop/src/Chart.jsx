// src/Charts.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ['Apples', 'Mangoes', 'Bananas', 'Grapes', 'Papaya', 'Oranges', "Watermelon","Black Grapes", "Blackberries", "Strawberries","Pears","Pineapples"],
    datasets: [
      {
        label: 'Sales',
        data: [30, 20, 50, 60, 70, 90, 80, 100, 10, 120, 30, 140],
        backgroundColor: '#02CCFE',
        borderColor: 'rgba(255, 192, 192, 1)',
        borderWidth: 4,
        borderRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Serving Data',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Charts;
