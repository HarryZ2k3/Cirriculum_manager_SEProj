import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart(props){
    if (props == null ) return null;
    const {dataChart, labelsChart, chartName} = props;
    const [dataset, setDataset] = useState({
        labels: ['inclass','mid','final'],
        datasets: [
            {
              label: 'Dataset 1',
              data: [],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
      })
    // console.log(
    //     "dataChart", dataChart
    //     );
    // console.log(
    //     "labelsChart", labelsChart
    //     );
    const option ={
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }

    useEffect(() => {
        console.log("chartName", chartName)
        setDataset({
            labels: labelsChart,
            datasets: [
                {
                  label: chartName,
                  data: dataChart,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
              ]
          })

        // SEMESTER
        // setDataset({
        //     labels: ['inclass'],
        //     datasets: [
        //         { mon 1
        //           label: chartName,
        //           data: dataChart,
        //           backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //         { mon 2
        //           label: chartName,
        //           data: dataChart,
        //           backgroundColor: 'rgba(255, 89, 12, 0.5)',
        //         },
        //       ]
        //   })
    }, [dataChart])


    console.log("call BarChart method");
    //console.log(data);

    return <Bar
        options={option}
        data={dataset}
    />
}

export default BarChart;
