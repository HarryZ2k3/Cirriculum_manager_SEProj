// import { useEffect } from 'react';
// import { Chart } from 'chart.js/auto';

// const LineChart = () => {
//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await fetch('http://localhost:3004/credits/IUBU11');
//                 //http://localhost:3000/credits/IUHP11
//                 // đây là ví dụ về API lấy tổng số tín chỉ thì mọi người điền theo format với bất kì học sinh nào cũng được nhé
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 console.log('API response:', data);

//                 // Sort data by year and semester
//                 const sortedData = data.sort((a, b) => (a.year === b.year) ? a.semesternumber - b.semesternumber : a.year - b.year);

//                 if (sortedData.length === 0) {
//                     throw new Error('No data found in API response');
//                 }

//                 const labels = sortedData.map(d => `S${d.semesternumber} ${d.year}`);
//                 const values = sortedData.map(d => parseInt(d.totalcredits, 10));

//                 new Chart(document.getElementById("line-chart"), {
//                     type: 'line',
//                     data: {
//                         labels: labels,
//                         datasets: [{
//                             label: "Total Credits",
//                             borderColor: "#3e95cd",
//                             fill: false,
//                             data: values
//                         }]
//                     },
//                     options: {
//                         legend: { display: false },
//                         title: {
//                             display: true,
//                             text: 'Total Credits Over Semesters'
//                         },
//                         scales: {
//                             yAxes: [{
//                                 ticks: {
//                                     min: 0 // Start y-axis from 0
//                                 }
//                             }]
//                         }
//                     }
//                 });
//             } catch (error) {
//                 console.error('Error fetching or processing data:', error);
//                 document.getElementById('error-message').innerText = `Error fetching or processing data: ${error.message}`;
//             }
//         };

//         getData();
//     }, []);

//     return (
//         <div className='w-1/2'>
//             <canvas id="line-chart" width="700" height="450"></canvas>
//             <p id="error-message"></p>
//         </div>
//     );
// };

// export default LineChart;

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3004/credits/IUBU11');
        // Replace the URL with any student username from your database
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
        const values = sortedData.map(d => parseInt(d.totalcredits, 10));

        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: "Total Credits",
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
              }
            },
            scales: {
              y: {
                beginAtZero: true,
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
    <div className="flex flex-col items-center justify-start min-h-screen p-2">
      <h1 className="text-1.75xl font-bold mb-4">Total Credits Over Semesters</h1>
      <div className="w-full max-w-3xl h-64"> {/* Adjusted size */}
        <canvas id="line-chart" ref={chartRef}></canvas>
      </div>
      {/* <p id="error-message" className="text-red-500 mt-4"></p> */}
    </div>
  );
};

export default LineChart;
