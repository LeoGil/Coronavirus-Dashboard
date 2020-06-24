import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Country from './pages/Country';
import Header from './components/Header';

import rootpath from './services/getRootPath';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path={rootpath} component={Header} />
      <Route exact path={rootpath} component={Main} />
      <Route exact path={`${rootpath}:country_code`} component={Country} />
    </BrowserRouter>
  );
}