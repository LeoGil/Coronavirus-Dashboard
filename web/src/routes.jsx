import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Country from './pages/Country';
import Map from './pages/Map';
import Header from './components/Header';

import rootpath from './services/getRootPath';

export default function Routes({ toggleTheme }) {
  return (
    <BrowserRouter>
      <Route
        path={rootpath}
        component={() => <Header toggleTheme={toggleTheme} />}
      />
      <Route exact path={rootpath} component={Main} />
      <Route exact path={`${rootpath}Country/:country_code`} component={Country} />
      <Route exact path={`${rootpath}Map`} component={Map} />
    </BrowserRouter>
  );
}
