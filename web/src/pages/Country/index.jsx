import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'react-loading';
import api from '../../services/api';

import CountryData from '../../components/CountryDetailsCard';
import TimeLine from '../../components/charts/TimeLine';
import TimeLineDaily from '../../components/charts/TimeLineDaily';
import PieCases from '../../components/charts/PieActiveDeathRecovered';
import PieTests from '../../components/charts/PieTests';

import CountryStyles from './styles';
import { ThemeContext } from 'styled-components';

export default function Country() {
  const { country_code: countryCode } = useParams();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isTimeLineDataLoaded, setIsTimeLineDataLoaded] = useState(false);
  const [isTimeLineNewDataLoaded, setIsTimeLineNewDataLoaded] = useState(false);
  const [country, setCountry] = useState([]);
  const [countryTimeline, setCountryTimeline] = useState([]);
  const [countryTimelineNew, setCountryTimelineNew] = useState([]);

  const theme = useContext(ThemeContext);

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

  // Get Country New Per Day Timeline
  useEffect(() => {
    const loadCountryTimeLineNew = async () => {
      const response = await api.get(`/country_timeline_new/${countryCode}`);
      setCountryTimelineNew(response.data.timeline);

      setIsTimeLineNewDataLoaded(true);
    };

    loadCountryTimeLineNew();

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
      <Loading type="bars" color={theme.mainText} />
    </div>
  ) : (
      <CountryStyles className="container-fluid">
        <div className="row">
          <div className="col-12">
            <CountryData country={country} />
          </div>
          <div className="col-lg-6 col-md-12">
            <section className=" chart-div">
              <TimeLine
                timeline={countryTimeline}
                timelineDataLoaded={isTimeLineDataLoaded}
              />
            </section>
          </div>
          <div className="col-lg-6 col-md-12">
            <section className=" chart-div">
              <TimeLineDaily
                timeline={countryTimelineNew}
                timelineDataLoaded={isTimeLineNewDataLoaded}
              />
            </section>
          </div>
          <div className="col-lg-6 col-md-12">
            <section className="chart-div">
              <PieCases
                data={country}
                timelineDataLoaded={isTimeLineDataLoaded}
                country={country.country}
                pageLoaded={isPageLoaded}
              />
            </section>
          </div>
          <div className="col-lg-6 col-md-12">
            <section className="chart-div">
              <PieTests
                data={country}
                timelineDataLoaded={isTimeLineDataLoaded}
              />
            </section>
          </div>
        </div>
      </CountryStyles>
    );
}
