import React from 'react'
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
    <div>
        <WeatherLocation city={'Guadalajara,mx'} />
        <WeatherLocation city={'Bogota,col'} />
        <WeatherLocation city={'Bucaramanga,col'} />
        <WeatherLocation city={'Zamora,mx'} />
    </div>
);

export default LocationList;