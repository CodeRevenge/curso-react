import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,
        CLOUDY,
        WI_DAY_SUNNY,
        RAIN,
        SNOW,
        WINDY } from '../../../constants/weathers'
import './styles.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case WI_DAY_SUNNY:
            debugger;
            return 'wi-day-sunny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return WI_DAY_SUNNY;
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size='4x' />)
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className='weatherTemperatureCount'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType'>C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;