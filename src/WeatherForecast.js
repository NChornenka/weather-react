import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";



export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

    useEffect(() => {
        setLoaded(false);
}, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row mt-2">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                <WeatherForecastDay day={dailyForecast} />
                                </div>
                            );
                        } else {return null;
                        }
                    })}

                </div>
            </div>
        )

    }
    else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = '57b2c40fdae71a6ba41d72685e3226e2';

    // let apiKey = 'caa883a4a60d93878755b08a933f74ea';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
    }
    

}



