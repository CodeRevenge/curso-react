import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
  
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`)
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='blue'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='yellow'></div>
            </Col>
          </Row>
        </Grid>

        {/* <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          />
        </div> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
