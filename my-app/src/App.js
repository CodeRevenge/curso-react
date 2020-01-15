import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
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
