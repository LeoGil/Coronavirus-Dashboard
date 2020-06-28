import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'react-loading';
import api from '../../services/api';

import CountryData from '../../components/CountryDetailsCard';
import TimeLine from '../../components/TimeLine';
import PieCases from '../../components/PieActiveDeathRecovered';
import PieTests from '../../components/PieTests';

import CountryStyles from './styles';

export default function Country() {
  const { country_code: countryCode } = useParams();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isTimeLineDataLoaded, setIsTimeLineDataLoaded] = useState(false);
  const [country, setCountry] = useState([]);
  const [countryTimeline, setCountryTimeline] = useState([]);

  // Get Country Timeline
  useEffect(() => {
    const loadCountryTimeLine = async () => {
      const response = await api.get(`/country_timeline/${countryCode}`);
      setCountryTimeline(response.data.timeline);
      setIsTimeLineDataLoaded(true);
    };

    loadCountryTimeLine();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Country Data
  useEffect(() => {
    const loadCountryData = async () => {
      const response = await api.get(`/country/${countryCode}`);
      setCountry(response.data);
      setIsPageLoaded(true);
    };

    loadCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isPageLoaded ? (
    <div className="loading">
      <Loading type="bars" color="#eee" />
    </div>
  ) : (
    <CountryStyles className="container-fluid">
      <div className="row">
        <div className="col-12">
          <CountryData country={country} />
        </div>
        <div className="col-8">
          <section className=" chart-div">
            <TimeLine
              timeline={countryTimeline}
              timelineDataLoaded={isTimeLineDataLoaded}
            />
          </section>
        </div>
        <div className="col-4">
          <div className="col-12">
            <section className="chart-div">
              <PieCases
                data={country}
                timelineDataLoaded={isTimeLineDataLoaded}
                country={country.country}
                pageLoaded={isPageLoaded}
              />
            </section>
          </div>
          <div className="col-12">
            <section className="chart-div">
              <PieTests
                data={country}
                timelineDataLoaded={isTimeLineDataLoaded}
              />
            </section>
          </div>
        </div>
      </div>
    </CountryStyles>
  );
}
