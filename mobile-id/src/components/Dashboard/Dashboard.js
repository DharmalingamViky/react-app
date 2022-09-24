import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const lineState = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const pieState = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}


class Dashboard extends React.Component {
  constuctor() {
  }
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
        <div>
          <Line
            data={lineState}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>

        <div>
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />

          <Doughnut
            data={state}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      </div>

    );
  }
}

export default (Dashboard);