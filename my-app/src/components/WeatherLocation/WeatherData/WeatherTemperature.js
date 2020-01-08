import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,
        CLOUDY,
        DAY_SUNY,
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
        case DAY_SUNY:
            return 'day-suny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return DAY_SUNY;
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