import React, { useEffect } from 'react';
import * as Chart from 'chart.js';

export default function TimeLine({ timeline, timelineDataLoaded }) {

  // Mount graph cases
  useEffect(() => {
    if (timelineDataLoaded) {
      const timelinedates = [];
      const timelinedataCases = [];
      const timelinedataDeaths = [];
      const timelinedataRecovered = [];

      Object.keys(timeline.cases).forEach(key => {
        timelinedates.push(key);
        timelinedataCases.push(timeline.cases[key]);
      });

      Object.keys(timeline.deaths).forEach(key => {
        timelinedataDeaths.push(timeline.deaths[key]);
      });

      Object.keys(timeline.recovered).forEach(key => {
        timelinedataRecovered.push(timeline.recovered[key]);
      });

      const cav = document
        .getElementById('cav_cases')
        .getContext('2d');
      new Chart(cav, {
        type: 'line',
        options: {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: 'white',
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: 'white',
                },
              },
            ],
          },
        },
        data: {
          labels: timelinedates,
          datasets: [
            {
              label: 'Total Cases',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(14, 233, 203,0.4)',
              borderColor: '#0ee9cb',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#0ee9cb',
              pointBackgroundColor: '#0ee9cb',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#0ee9cb',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 2,
              data: timelinedataCases.map(item => item),
            },
            {
              label: 'Total Recovered',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(52, 127, 213,0.4)',
              borderColor: '#347fd5',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#347fd5',
              pointBackgroundColor: '#347fd5',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#347fd5',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 2,
              data: timelinedataRecovered.map(item => item),
            },
            {
              label: 'Total Deaths',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(243, 83, 83,0.4)',
              borderColor: '#f35353',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#f35353',
              pointBackgroundColor: '#f35353',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#f35353',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 2,
              data: timelinedataDeaths.map(item => item),
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineDataLoaded]);

  return (
    <>
      <h2>Timeline Cases and Deaths</h2>
      <canvas
        className="mt-4"
        height="164px"
        id={'cav_cases'}
      />
    </>
  );
}
