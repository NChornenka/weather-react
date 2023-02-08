import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";


export default function WeatherForecast(props) {

    function handleResponse(response){
        console.log(response.data)
    }
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = 'caa883a4a60d93878755b08a933f74ea';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
            </div>
        </div>
    )
}



