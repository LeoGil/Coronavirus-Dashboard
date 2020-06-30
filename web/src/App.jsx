import React from 'react';
import Routes from './routes';
import { BrowserRouter  } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </div>
);

export default App;
