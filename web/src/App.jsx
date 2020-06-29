import React from 'react';
import Routes from './routes';

import AppStyles from './AppStyles';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

const App = () => (
  <div className="App">
    <AppStyles>
      <Routes />
    </AppStyles>
  </div>
);

export default App;
