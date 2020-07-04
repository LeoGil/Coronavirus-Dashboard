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
        ctx.strokeStyle = '#fe3860';
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

      Object.keys(timeline.cases).forEach(key => {
        timelinedates.push(key);
        timelinedataCases.push(timeline.cases[key]);
      });

      Object.keys(timeline.deaths).forEach(key => {
        timelinedataDeaths.push(timeline.deaths[key]);
      });

      const cav = document.getElementById('cav_cases_daily').getContext('2d');
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
              label: 'Daily Cases',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(255, 138, 55,0.4)',
              borderColor: '#ff8a37',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#ff8a37',
              pointBackgroundColor: '#ff8a37',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#ff8a37',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 2,
              data: timelinedataCases.map(item => item),
            },
            {
              label: 'Daily Deaths',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(175, 28, 28,0.4)',
              borderColor: '#af1c1c',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#af1c1c',
              pointBackgroundColor: '#af1c1c',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#af1c1c',
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
      <h2>Timeline daily cases and deaths</h2>
      <canvas className="mt-4" height="170rem" id="cav_cases_daily" />
    </>
  );
}
