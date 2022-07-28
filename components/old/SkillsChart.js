import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
  export const data = {
    labels: ['Databases', 'Python/Go/Javascript', 'API development', 'Azure, AWS, GCP', 'Microservices', 'Documentation'],
    datasets: [
      {
        label: '# of Votes',
        data: [60, 90, 70, 60, 60, 90],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

var options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Skills Polar Area Chart',
        },
    },
}

export default function SkillsChart() {
    return (
        <div>
            <PolarArea
                data={data}
                options={options}
                height={400}
            />
        </div>
    )
}
