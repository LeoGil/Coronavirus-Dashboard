import React, { useEffect, useState } from 'react';
import * as Chart from 'chart.js';
import api from '../../services/api';

export default function TimeLineCountries({ countries }) {
  const [timelineCountries, setTimelineCountries] = useState();
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    // console.log(countries)
    if (countries[0] !== undefined) {
      const countriesIso = [];

      for (let index = 0; index < 5; index++) {
        countriesIso.push(countries[index].iso2);
      }

      const loadTopCountriesTimeLine = async () => {
        const response = await api.post(
          '/top_countries_timeline',
          countriesIso,
        );
        setTimelineCountries(response.data);
        setChartLoaded(true);
      };

      loadTopCountriesTimeLine();
    }
  }, [countries]);

  // Mount graph cases
  useEffect(() => {
    if (timelineCountries && chartLoaded === false) {
      const timelinedates = [];
      const timelineCountry = [];
      const timelineCountryNames = [];
      const datasets = [];

      Object.keys(timelineCountries[0].timeline.cases).forEach(key => {
        timelinedates.push(key);
      });

      for (let index = 0; index < timelineCountries.length; index++) {
        timelineCountryNames.push(timelineCountries[index].country);
        timelineCountry.push(timelineCountries[index].timeline.cases);

        const randColor = `#${Math.floor(Math.random() * 16777215).toString(
          16,
        )}`;
        datasets.push({
          label: timelineCountryNames[index],
          fill: false,
          lineTension: 0.1,
          borderColor: randColor,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: randColor,
          pointBackgroundColor: randColor,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: randColor,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 2,
          data: Object.values(timelineCountry[index]).map(item => item),
        });
      }

      const cav = document
        .getElementById('cav_cases_top_countries')
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
          datasets,
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineCountries, chartLoaded]);

  return (
    <>
      <h2>Timeline cases from top 5 countries</h2>
      <canvas className="mt-4" height="164px" id="cav_cases_top_countries" />
    </>
  );
}
