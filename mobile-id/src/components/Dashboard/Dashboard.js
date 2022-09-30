import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import Accordion from 'react-bootstrap/Accordion';
import { Chart } from 'react-chartjs-2'
import Container from 'react-bootstrap/Container';
import '../../styles.scss';
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
      <div class="fill-window">
        <Container fluid>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Device list</Accordion.Header>
                  <Accordion.Body>
                    <h1>pagination</h1>
                    <h1>device list will go here with endless scrolling</h1>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>reserved</Accordion.Header>
                  <Accordion.Body>
                    <h1>pagination</h1>
                    <h1>device list will go here with endless scrolling</h1>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div class="col-lg-8 col-md-8 col-12">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
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
                </div>
                <div class="col-lg-4 col-md-4 col-12">
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
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
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
                </div>

                <div class="col-lg-4 col-md-4 col-12">
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

            </div>

          </div>


        </Container>
      </div>

    );
  }
}

export default (Dashboard);