import React, { useEffect, useContext } from 'react';
import * as Chart from 'chart.js';

import { ThemeContext } from 'styled-components';

export default function TimeLine({ timeline, timelineDataLoaded }) {
  const theme = useContext(ThemeContext);

  Chart.defaults.LineWithLine = Chart.defaults.line;
  Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw(ease) {
      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        const activePoint = this.chart.tooltip._active[0];
        const { ctx } = this.chart;
        const { x } = activePoint.tooltipPosition();
        const topY = this.chart.scales['y-axis-0'].top;
        const bottomY = this.chart.scales['y-axis-0'].bottom;

        // draw line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = theme.hoverBorder;
        // ctx.shadowBlur = 1;
        ctx.stroke();
        ctx.restore();
      }
      Chart.controllers.line.prototype.draw.call(this, ease);
    },
  });

  // Mount graph cases
  useEffect(() => {
    if (timelineDataLoaded) {
      const timelinedates = [];
      const timelinedataCases = [];
      const timelinedataDeaths = [];
      const timelinedataRecovered = [];
      const timelinedataActive = [];

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

      Object.keys(timeline.cases).forEach(key => {
        timelinedataActive.push(
          timeline.cases[key] -
          (timeline.deaths[key] + timeline.recovered[key]),
        );
      });

      const cav = document.getElementById('cav_cases').getContext('2d');
      new Chart(cav, {
        type: 'LineWithLine',
        options: {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            labels: {
              fontColor: theme.mainText,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: theme.mainText,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: theme.mainText,
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
            {
              label: 'Active cases',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(255,193,55,0.4)',
              borderColor: '#ffc137',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#ffc137',
              pointBackgroundColor: '#ffc137',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#ffc137',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 2,
              data: timelinedataActive.map(item => item),
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineDataLoaded]);

  return (
    <>
      <h2>Timeline cases and deaths</h2>
      <canvas className="mt-4" height="170rem" id="cav_cases" />
    </>
  );
}
