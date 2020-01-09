import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import WeatherLocation from './components/WeatherLocation'
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <WeatherLocation/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
