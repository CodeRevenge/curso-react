import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import AppBar from '@material-ui/core/AppBar';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = [
  'Guadalajara,mx',
  'Zamora,mx',
  'Bucaramanga,col',
  'Buenos Aires,ar',
  'Bogota,col',
]

class App extends Component{
  constructor () {
    super();
    this.state = {
      city: 'Nueva ciudad',
    };
  }
  
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`)
  }

  render() {
    const { city } = this.state;
    
    return (

      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather App'></AppBar>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
            </Col>
            <Col md={12} lg={6}>
              <Paper zDepth={4}>
                <div className='detail'>              
                  <ForecastExtended city={city}></ForecastExtended>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
