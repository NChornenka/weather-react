import React, { useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
        // console.log(response.data);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                <WeatherForecastDay day={dailyForecast} />
                                </div>
                            );
                        }
                    })}

                </div>
            </div>
        )

    }
    else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = 'caa883a4a60d93878755b08a933f74ea';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
    }
    

}



