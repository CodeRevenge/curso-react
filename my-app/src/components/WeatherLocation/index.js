import React, { Component } from 'react';   
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './styles.css'
import CircularProgress from 'material-ui/CircularProgress';

const location = 'Guadalajara,mx'
const api_key = '23ee583b8c1ee1446225ea5a12dbb094'
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: location,
            data: null,
        };
    };
    
    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data)
            this.setState({ data })
        });
    };

    componentDidMount() {
        this.handleUpdateClick()
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
export default WeatherLocation;