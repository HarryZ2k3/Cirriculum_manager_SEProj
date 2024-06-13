// import { useEffect } from 'react';
// import { Chart } from 'chart.js/auto';
// import 'tailwindcss/tailwind.css';

// const PieChart = () => {
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch('http://localhost:3004/users/IUBU11/2/2020/Oop');
//         // Replace the URL with any student username and details from your database
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('API response:', data);

//         if (!data || data.length === 0) {
//           throw new Error('No data found in API response');
//         }

//         const grades = data[0];
//         console.log('Grades:', grades);

//         const labels = ['In-class', 'Midterm', 'Final'];
//         const values = [parseFloat(grades.inclass), parseFloat(grades.midterm), parseFloat(grades.final)];

//         console.log('Labels:', labels);
//         console.log('Values:', values);

//         new Chart(document.getElementById("pie-chart"), {
//           type: 'pie',
//           data: {
//             labels: labels,
//             datasets: [{
//               label: "Grades",
//               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
//               data: values
//             }]
//           },
//           options: {
//             title: {
//               display: true,
//               text: 'Grades of Course'
//             }
//           }
//         });
//       } catch (error) {
//         console.error('Error fetching or processing data:', error);
//         document.getElementById('error-message').innerText = `Error fetching or processing data: ${error.message}`;
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="flextext-2xl font-bold mb-4 w-1/2">Grades Chart</h1>
//       <canvas id="pie-chart" width="800" height="450"></canvas>
//       <p id="error-message" className="text-red-500 mt-4"></p>
//     </div>
//   );
// };

// export default PieChart;


import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3004/users/IUBU11/2/2020/Oop');
        // Replace the URL with any student username and details from your database
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);

        if (!data || data.length === 0) {
          throw new Error('No data found in API response');
        }

        const grades = data[0];
        console.log('Grades:', grades);

        const labels = ['In-class', 'Midterm', 'Final'];
        const values = [parseFloat(grades.inclass), parseFloat(grades.midterm), parseFloat(grades.final)];

        console.log('Labels:', labels);
        console.log('Values:', values);

        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: "Grades",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
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
                text: 'Grades of Course'
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
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Grades Chart</h1>
      <div className="w-full max-w-md h-64"> {/* Adjusted size */}
        <canvas id="pie-chart" ref={chartRef}></canvas>
      </div>
      <p id="error-message" className="text-red-500 mt-4"></p>
    </div>
  );
};

export default PieChart;
