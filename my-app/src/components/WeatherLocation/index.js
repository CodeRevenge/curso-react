import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import { WI_DAY_SUNNY } from './../../constants/weathers'
import './styles.css'

const data = {
    temperature: 20,
    weatherState: WI_DAY_SUNNY,
    humidity: 10,
    wind: '10 m/s',
};

const WeatherLocation = () => (
    <div className='weatherLocationCount'>
        <Location city={'Guadalajara'} /> 
        <WeatherData data={data} />
    </div>
);

export default WeatherLocation;