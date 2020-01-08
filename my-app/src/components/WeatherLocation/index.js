import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import { RAIN, WINDY } from './../../constants/weathers'
import './styles.css'

const data1 = {
    temperature: 20,
    weatherState: RAIN,
    humidity: 42,
    wind: '10 m/s',
};

const data2 = {
    temperature: 23,
    weatherState: WINDY,
    humidity: 10,
    wind: '18 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Guadalajara',
            data: data1,
        };
    };

    handleUpdateClick = () => (
        this.setState({
            data: data2,
        })
    );
    
    render = () => {
        const {city, data} = this.state;
        return (
        <div className='weatherLocationCount'>
            <Location city={city} /> 
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>)
    };

}
export default WeatherLocation;