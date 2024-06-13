import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const GPAChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3004/GPA/IUBU11');
        // Replace 'IUBU11' with any student username from your database, e.g., 'Anh12'
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);

        // Sort data by year and semester
        const sortedData = data.sort((a, b) => (a.year === b.year) ? a.semesternumber - b.semesternumber : a.year - b.year);

        if (sortedData.length === 0) {
          throw new Error('No data found in API response');
        }

        const labels = sortedData.map(d => `S${d.semesternumber} ${d.year}`);
        const values = sortedData.map(d => parseFloat(d.gpa));

        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: "GPA",
              borderColor: "#3e95cd",
              backgroundColor: "rgba(62, 149, 205, 0.2)",
              fill: true,
              data: values
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true },
              title: {
                display: true,
                text: 'GPA through Years'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching or processing data:', error);
        document.getElementById('error-message').innerText = `Error fetching or processing data: ${error.message}`;
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">GPA through Years</h1>
      <div className="w-full max-w-lg h-64">
        <canvas id="line-chart" ref={chartRef}></canvas>
      </div>
      {/* <p id="error-message" className="text-red-500 mt-4"></p> */}
    </div>
  );
};

export default GPAChart;
