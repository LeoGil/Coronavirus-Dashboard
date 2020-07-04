import React, { useEffect, useContext } from 'react';
import * as Chart from 'chart.js';

import { ThemeContext } from 'styled-components';

export default function PieCases({ data, timelineDataLoaded }) {
  const theme = useContext(ThemeContext);

  // Mount pie tests
  useEffect(() => {
    if (timelineDataLoaded) {
      const cav = document.getElementById(`pie_tests`).getContext('2d');
      new Chart(cav, {
        type: 'pie',
        options: {
          legend: {
            labels: {
              fontColor: theme.mainText,
            },
          },
        },
        data: {
          labels: [`${data.country} population`, 'Tests'],
          datasets: [
            {
              backgroundColor: [
                // "#3e95cd",
                '#da8213',
                '#6bfb31',
              ],
              data: [
                // globalData.population,
                data.population,
                data.tests,
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
      <h2>{data.country} Population / Tests</h2>
      <canvas className="mt-4" height="110rem" id="pie_tests" />
    </>
  );
}
