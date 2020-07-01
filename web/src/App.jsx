import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </div>
);

export default App;
