import React, { useState, useEffect, useContext, useRef } from 'react';
import Loading from 'react-loading';
import { VectorMap } from 'react-jvectormap';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';

import '../../assets/maps/map.css';

import './styles.css';

export default function Map() {
  const theme = useContext(ThemeContext);
  const nf = new Intl.NumberFormat();

  const mapRef = useRef();
  mapRef.current = 'world_mill';

  const [countriesCases, setCountriesCases] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Get Country Data
  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/countries`);

      const CountriesObject = Object.values(response.data);
      const countriesCasesFormat = [];
      const countryDataFormat = [];

      Object.keys(CountriesObject).forEach(key => {
        if (CountriesObject[key].iso2 !== null) {
          countriesCasesFormat[CountriesObject[key].iso2] =
            CountriesObject[key].active;
          countryDataFormat[CountriesObject[key].iso2] = {
            cases: nf.format(CountriesObject[key].cases),
            deaths: nf.format(CountriesObject[key].deaths),
            recovered: nf.format(CountriesObject[key].recovered),
            active: nf.format(CountriesObject[key].active),
            critical: nf.format(CountriesObject[key].critical),
          };

          if (CountriesObject[key].iso2 === 'SO') {
            countriesCasesFormat.XS = CountriesObject[key].active;
            countryDataFormat.XS = {
              cases: nf.format(CountriesObject[key].cases),
              deaths: nf.format(CountriesObject[key].deaths),
              recovered: nf.format(CountriesObject[key].recovered),
              active: nf.format(CountriesObject[key].active),
              critical: nf.format(CountriesObject[key].critical),
            };
          } else if (CountriesObject[key].iso2 === 'CY') {
            countriesCasesFormat.XC = CountriesObject[key].active;
            countryDataFormat.XC = {
              cases: nf.format(CountriesObject[key].cases),
              deaths: nf.format(CountriesObject[key].deaths),
              recovered: nf.format(CountriesObject[key].recovered),
              active: nf.format(CountriesObject[key].active),
              critical: nf.format(CountriesObject[key].critical),
            };
          }
        }
      });

      setCountriesCases(countriesCasesFormat);
      setCountryData(countryDataFormat);
      setIsPageLoaded(true);
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHover = (e, el, code) => {
    if (code === 'XS') {
      code = 'SO';
    } else if (code === 'XC') {
      code = 'CY';
    }
    el.html(
      `<div
        class="map-hover-content"
        style="background-color: ${theme.background}; color: ${theme.mainText}"
       >
        <div class="content-header mb-4">
          <img
            class='map-contry-flag'
            src='https://cdn.u21.io/flags/4x3/${code.toLowerCase()}.svg'
            alt='flag ${code}'
          />
          <span class="ml-2 map-country-name">${el.html()}</span>
        </div>
        <p>
           <label>Cases: </label>
           <span class="color-cases">${
             countryData[code] === undefined
               ? 'unknown'
               : countryData[code].cases
           }</span>
        </p>
        <p>
          <label>Deaths: </label>
          <span class="color-death">${
            countryData[code] === undefined
              ? 'unknown'
              : countryData[code].deaths
          }</span>
        </p>
        <p>
          <label>Recovered: </label>
          <span class="color-recovered">${
            countryData[code] === undefined
              ? 'unknown'
              : countryData[code].recovered
          }</span>
        </p>
        <p>
          <label>Active: </label>
          <span class="color-active">${
            countryData[code] === undefined
              ? 'unknown'
              : countryData[code].active
          }</span>
        </p>
        <p>
          <label>Critical: </label>
          <span class="color-critical">${
            countryData[code] === undefined
              ? 'unknown'
              : countryData[code].critical
          }</span>
        </p>
      </div >
    `,
    );
  };

  return isPageLoaded === false ? (
    <div className="loading">
      <Loading type="bars" color={theme.mainText} />
    </div>
  ) : (
    <main className="map">
      <VectorMap
        backgroundColor={theme.bgActive}
        map={mapRef.current}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        series={{
          regions: [
            {
              values: countriesCases,
              scale: ['#aeb5bb', theme.colorCritical],
              normalizeFunction: 'polynomial',
            },
          ],
        }}
        onRegionTipShow={handleHover}
        containerClassName="map"
      />
    </main>
  );
}
