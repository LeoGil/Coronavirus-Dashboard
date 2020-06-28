import React, { useEffect } from 'react';
import * as Chart from 'chart.js';



export default function TimeLine({ timeline, timelineDataLoaded }) {
  // let draw = Chart.controllers.line.prototype.draw;
  // Chart.controllers.line.prototype.draw = function () {
  //   draw.apply(this, arguments);
  //   let ctx = this.chart.chart.ctx;
  //   let _stroke = ctx.stroke;
  //   ctx.stroke = function () {
  //     ctx.save();
  //     ctx.shadowColor = '#4b4b4b8e';
  //     ctx.shadowBlur = 20;
  //     ctx.shadowOffsetX = 1;
  //     ctx.shadowOffsetY = 2;
  //     _stroke.apply(this, arguments);
  //     ctx.restore();
  //   }
  // };
  Chart.defaults.LineWithLine = Chart.defaults.line;
  Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function (ease) {
      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        var activePoint = this.chart.tooltip._active[0],
          ctx = this.chart.ctx,
          x = activePoint.tooltipPosition().x,
          topY = this.chart.scales['y-axis-0'].top,
          bottomY = this.chart.scales['y-axis-0'].bottom;

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
    }
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
