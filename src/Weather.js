import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherData from './WeatherData';


export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setReady(true);
        setWeatherData(
            {
                temperature: response.data.main.temp,
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                wind: Math.round(response.data.wind.speed),
                header: response.data.name,
                date: new Date(response.data.dt * 1000),
                icon: response.data.weather[0].icon,                

            }
            
        )

    }

    function handleSubmit(event){
        event.preventDefault();
        if (city.length > 2){
            search();
                    } else {
                        alert("Enter a city, please")
                    }
    }

    function updateCity(event){
        setCity(event.target.value);

    }

    function search(){

        let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

    }


    if (ready) {
        return (
    <div className='Weather'>
        <div className='container-weather'>
            <form className="d-flex" role="search"
            onSubmit={handleSubmit}>
            <input
            className="form-control"
            type="search"
            placeholder="City"
            autoFocus="on"
            onChange={updateCity}
            />
            <input className="btn btn-outline-success" type="submit" value="Search" />
            </form>
    <WeatherData data={weatherData}/>
        </div>
    </div>
    )
} else {
    search();
    return "Loading...."

}

}