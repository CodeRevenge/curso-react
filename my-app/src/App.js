import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import WeatherLocation from './components/WeatherLocation'
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  'Guadalajara,mx',
  'Zamora,mx',
  'Bucaramanga,col',
  'Buenos Aires,ar',
  'Bogota,col',
]

class App extends Component{
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
