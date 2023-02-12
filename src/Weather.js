import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherData from './WeatherData';
import WeatherForecast from './WeatherForecast';



export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
    const [unit, setUnit] = useState("celcius");

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
                coordinates: response.data.coord,              

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
                    document.getElementById("search-form").value="";
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

    function current(event){
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(getCurrentData)}

    function getCurrentData(position){
        let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
        let apiURL = "https://api.openweathermap.org/data/2.5/weather";
        let latitude = position.coords.latitude;
        let longtitude = position.coords.longitude;
        axios.get(`${apiURL}?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`).then(handleResponse);

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
            id='search-form'
            />
            <input className="btn btn-outline-success" type="submit" value="Search" />
            <input className="btn btn-outline-success" type="submit" value="Current" onClick={current} />
            </form>
    <WeatherData data={weatherData} unit={unit} setUnit={setUnit}/>
    <WeatherForecast coordinates={weatherData.coordinates} unit={unit} setUnit={setUnit}/>

        </div>
    </div>
    )
} else {
    search();
    return "Loading...."

}

}