import React, { useEffect } from 'react';
import * as Chart from 'chart.js';

export default function PieCases({ data, timelineDataLoaded, country = 'Global', pageLoaded }) {
  // Mount pie cases
  useEffect(() => {
    if (pageLoaded === true && timelineDataLoaded === true) {
      const cav = document.getElementById(`pie_cases`).getContext('2d');
      new Chart(cav, {
        type: 'pie',
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
        data: {
          labels: [
            // "World Population",
            'Active',
            'Recovered',
            'Death',
          ],
          datasets: [
            {
              backgroundColor: [
                // "#3e95cd",
                '#ffc137',
                '#347fd5',
                '#f35353',
              ],
              data: [
                // globalData.population,
                data.active,
                data.recovered,
                data.deaths,
              ],
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineDataLoaded]);

  return (
    <>
      <h2>{country} Active, Deaths and Recovered</h2>
      <canvas className="mt-4" id="pie_cases" />
    </>
  );
}
