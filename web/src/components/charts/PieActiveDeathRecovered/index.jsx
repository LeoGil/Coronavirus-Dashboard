import React, { useEffect } from 'react';
import * as Chart from 'chart.js';

export default function PieCases({
  data,
  timelineDataLoaded,
  country = 'Global',
}) {
  // Mount pie cases
  useEffect(() => {
    if (timelineDataLoaded) {
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
          labels: ['Active', 'Recovered', 'Death'],
          datasets: [
            {
              backgroundColor: ['#ffc137', '#347fd5', '#f35353'],
              data: [data.active, data.recovered, data.deaths],
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineDataLoaded]);

  return (
    <>
      <h2>{country} active, deaths and recovered</h2>
      <canvas className="mt-4" height="110rem" id="pie_cases" />
    </>
  );
}
