import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const GPAChart = () => {
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

        new Chart(document.getElementById("line-chart"), {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: "GPA",
              borderColor: "#3e95cd",
              fill: false,
              data: values
            }]
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'GPA through Years'
            },
            scales: {
              yAxes: [{
                ticks: {
                  min: 0, // Start y-axis from 0
                  max: 100 // Set y-axis maximum to 100
                }
              }]
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">GPA through Years</h1>
      <canvas id="line-chart" width="700" height="450"></canvas>
      <p id="error-message" className="text-red-500 mt-4"></p>
    </div>
  );
};

export default GPAChart;
