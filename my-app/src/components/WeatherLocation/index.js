import React, { Component } from 'react'; 
import PropTypes from 'prop-types'  
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './styles.css'
import CircularProgress from 'material-ui/CircularProgress';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = '23ee583b8c1ee1446225ea5a12dbb094'

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null,
        };
    }
    
    componentDidMount() {
        const { city } = this.state
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data)
            this.setState({ data })
        });
    }
    
    render = () => {
        const {city, data} = this.state;
        return (
        <div className='weatherLocationCount'>
            <Location city={city} /> 
            {/* <WeatherData data={data} /> */}
            {data ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7} /> }
        </div>)
    };

}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;