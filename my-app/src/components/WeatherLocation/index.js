import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'

const WeatherLocation = () => (
    <div className='weatherLocationCount'>
        <Location city={'Guadalajara'} /> 
        <WeatherData />
    </div>
);

export default WeatherLocation;