import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import faker from 'faker';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
    
  labels: [ 'healthy foods', 'Sugar Food', 'Meaty Foods', 'Junk Food',],
  datasets: [
    {
      label: '# of Votes',
      data: [50, 20, 39, 21],
      backgroundColor: [
       
        'rgba(134, 192, 225, 100%)',
        
        'rgba(225, 124, 109, 100%)',
       
        'rgba(135, 195, 83, 100%)',
        'rgba(225, 212, 68, 100%)',
      ],
      borderColor: [
        'rgba(134, 192, 225, 1)',
        'rgba(225, 124, 109, 1)',
        'rgba(135, 195, 83, 1)',
        'rgba(225, 212, 68, 1)',
       
      ],
      borderWidth: 1,
    },
  ],
};
export const data2 = {
    
    labels: [ 'Happy', 'unhappy'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 20],
        backgroundColor: [
          'rgba(135, 195, 83, 100%)',
          'rgba(239, 50, 58, 100%)',
        ],
        borderColor: [
          'rgba(134, 192, 225, 1)',
          'rgba(225, 124, 109, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
 
  
export function PieChart() {
  return(
    <>
    <div className='piechart'>
 <h2>Type of Food</h2>
 <Pie className='inner-pie' data={data} options={{
   plugins: {
     legend: {
       position: 'right',
    },
},
}}/>
</div>
<div className='piechart'>
<h2>Are You Happy</h2>
<Pie className='inner-pie' data={data2} options={{
   plugins: {
     legend: {
       position: 'right',
    },
},
}}/>
</div>


</>
  )


}
