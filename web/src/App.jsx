import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyles, { themeModes } from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storagedChanges = localStorage.getItem(
      '@Coronavirus-Dashboard:theme',
    );
    return storagedChanges ? JSON.parse(storagedChanges) : 'dark';
  });

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  // LocalStorage Theme
  useEffect(() => {
    localStorage.setItem('@Coronavirus-Dashboard:theme', JSON.stringify(theme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <div className="App">
      <ThemeProvider
        theme={theme === 'dark' ? themeModes.dark : themeModes.light}
      >
        <BrowserRouter>
          <Routes toggleTheme={toggleTheme} />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
};

export default App;
