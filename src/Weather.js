import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherData from './WeatherData';


export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleSubmit(response){
        setReady(true);
        setWeatherData(
            {
                temperature: response.data.main.temp,
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                wind: Math.round(response.data.wind.speed),
                header: response.data.name,
                date: new Date(response.data.dt * 1000),
                iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,                

            }
            
        )

    }


    if (ready) {
        return (
    <div className='Weather'>
        <div className='container-weather'>
            <form className="d-flex" role="search">
        {/* <form className="d-flex" role="search" onSubmit={getCity}> */}
            <input
            className="form-control"
            type="text"
            placeholder="City"
            aria-label="search"
            autoFocus="on"
        // onChange={updateCity}
            />
            <input className="btn btn-outline-success" type="submit"
            Search
            />
            </form>
    <WeatherData data={weatherData}/>
        </div>
    </div>
    )
} else {
    let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading...."
}

}